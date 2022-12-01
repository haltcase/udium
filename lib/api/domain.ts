import prisma from "@/lib/prisma";
import render from "@api/render-api";

import type { NextApiRequest, NextApiResponse } from "next";

import { isValidParameter } from "@/lib/util";

/**
 * Add Domain
 *
 * Adds a new domain to the Render service using a provided
 * `domain` & `serviceId` query parameters
 *
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 */
export async function createDomain(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse> {
  const { domain } = req.query;

  if (!isValidParameter(domain)) {
    return res.status(400).end("Bad request: query parameters are not valid");
  }

  const serviceId = process.env.SERVICE_ID_RENDER;

  try {
    const response = await render
      .auth(process.env.AUTH_BEARER_TOKEN)
      .createCustomDomain(
        {
          name: domain,
        },
        { serviceId }
      );

    if (response.status !== 201) {
      const body = await response.res.json();
      return res.status(response.status).end(body.message);
    }

    // // Domain is already owned by another team but you can request delegation to access it
    // if (response.error?.code === "forbidden") return res.status(403).end();

    // // Domain is already being used by a different project
    // if (response.error?.code === "domain_taken") return res.status(409).end();

    // Domain is successfully added
    await prisma.site.update({
      where: {
        id: serviceId,
      },
      data: {
        customDomain: domain,
      },
    });

    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}

/**
 * Delete Domain
 *
 * Remove a domain from the vercel project using a provided
 * `domain` & `siteId` query parameters
 *
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 */
export async function deleteDomain(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse> {
  const { domain } = req.query;

  if (!isValidParameter(domain)) {
    return res.status(400).end("Bad request: query parameters are not valid");
  }

  const serviceId = process.env.SERVICE_ID_RENDER;

  try {
    await render.auth(process.env.AUTH_BEARER_TOKEN).deleteCustomDomain({
      serviceId,
      customDomainIdOrName: domain,
    });

    await prisma.site.update({
      where: {
        id: serviceId,
      },
      data: {
        customDomain: null,
      },
    });

    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}
