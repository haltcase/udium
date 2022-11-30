import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";
import { HttpMethod } from "@/types";
import { isValidParameter } from "@/lib/util";
import render from ".api/apis/render-api";

/*
 * Note: This endpoint is to check if a domain still has its nameservers/record configured correctly.
 * To request access to a domain that belongs to another team, you need to use the
 * `/verify` endpoint: https://vercel.com/docs/rest-api#endpoints/projects/verify-project-domain
 * You can see an implementation example here: https://github.com/vercel/examples/tree/main/solutions/domains-api
 */

const subdomainRegex = /[^a-zA-Z0-9/-]+/g;

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== HttpMethod.GET) {
    res.setHeader("Allow", [HttpMethod.GET]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { serviceId, domain, subdomain = false } = req.query;

  if (!isValidParameter(serviceId) || !isValidParameter(domain)) {
    return res.status(400).end("Bad request: domain parameter is not valid");
  }

  try {
    if (subdomain) {
      const sub = domain.replace(subdomainRegex, "");

      const data = await prisma.site.findUnique({
        where: {
          subdomain: sub,
        },
      });

      const isAvailable = data === null && sub.length !== 0;

      return res.status(200).json(isAvailable);
    }

    const response = await render.getCustomDomain({
      serviceId,
      customDomainIdOrName: domain,
    });

    const isValid = response.data?.verificationStatus === "verified";

    return res.status(200).json(isValid);
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}
