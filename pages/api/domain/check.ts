import render from "@api/render-api";
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";
import { isValidParameter } from "@/lib/util";
import { HttpMethod } from "@/types";

const subdomainRegex = /[^a-zA-Z0-9/-]+/g;

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== HttpMethod.GET) {
    res.setHeader("Allow", [HttpMethod.GET]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { domain, subdomain = false } = req.query;

  if (!isValidParameter(domain)) {
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

    const serviceId = process.env.RENDER_SERVICE_ID;

    const response = await render
      .auth(process.env.AUTH_BEARER_TOKEN)
      .getCustomDomain({
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
