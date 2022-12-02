import type { PrismaClient } from "@prisma/client";
import Link from "next/link";
import type { Literal, Node } from "unist";
import { visit } from "unist-util-visit";

import { getTweets } from "@/lib/twitter";
import type { WithChildren } from "@/types";

type NodesToChange = Literal<string>;

export function replaceLinks(options: { href: string } & WithChildren) {
  // this is technically not a remark plugin but it
  // replaces internal links with <Link /> component
  // and external links with <a target="_blank" />
  return options.href.startsWith("/") || options.href === "" ? (
    <Link href={options.href} className="cursor-pointer">
      {options.children}
    </Link>
  ) : (
    <a href={options.href} target="_blank" rel="noopener noreferrer">
      {options.children} ↗
    </a>
  );
}

export const replaceTweets =
  <T extends Node>() =>
  (tree: T) =>
    new Promise<void>((resolve, reject) => {
      const nodesToChange: NodesToChange[] = [];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      visit(tree, "text", (node: any) => {
        if (
          node.value.match(
            /https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)([^?])(\?.*)?/g
          )
        ) {
          nodesToChange.push(node);
        }
      });

      Promise.all(
        nodesToChange.map(async (node) => {
          node.type = "html";
          node.value = await getTweet(node);
        })
      )
        .then(() => resolve())
        .catch((e) => {
          console.log("ERROR", e);
          return reject(e);
        });
    });

const getTweet = async (node: Literal<string>) => {
  const regex = /\/status\/(\d+)/gm;

  const matches = regex.exec(node.value);
  if (!matches) {
    throw new Error(`Failed to get tweet: ${node}`);
  }

  const id = matches[1];
  const tweetData = await getTweets(id);

  node.value =
    "<Tweet id='" + id + "' metadata={`" + JSON.stringify(tweetData) + "`}/>";

  return node.value;
};

export const replaceExamples =
  <T extends Node>(prisma: PrismaClient) =>
  (tree: T) =>
    new Promise<void>((resolve, reject) => {
      const nodesToChange: NodesToChange[] = [];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      visit(tree, "mdxJsxFlowElement", (node: any) => {
        if (node.name == "Examples") {
          nodesToChange.push(node);
        }
      });

      Promise.all(
        nodesToChange.map(async (node) => {
          node.type = "html";
          node.value = await getExamples(node, prisma);
        })
      )
        .then(() => resolve())
        .catch((e) => {
          console.log("ERROR", e);
          return reject(e);
        });
    });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getExamples = async (node: any, prisma: PrismaClient) => {
  const names: string[] = node?.attributes[0].value.split(",");

  const data = await Promise.all(
    names.map((name) =>
      prisma.example.findUnique({
        where: {
          id: parseInt(name),
        },
      })
    )
  );

  return `<Examples data={${JSON.stringify(data)}} />`;
};
