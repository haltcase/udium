import render from "@api/render-api";
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";
import { isValidParameter } from "@/lib/util";

/**
 * Add a new domain to the Render service.
 *
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 */
export async function createDomain(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse> {
  const { domain, siteId } = req.query;

  if (!isValidParameter(domain) || !isValidParameter(siteId)) {
    return res.status(400).end("Bad request: query parameters are not valid");
  }

  const serviceId = process.env.RENDER_SERVICE_ID;

  try {
    const response = await render
      .auth(process.env.AUTH_BEARER_TOKEN)
      .getCustomDomains({
        serviceId,
      });

    if ((response.data?.length ?? 0) > 20) {
      return res.status(500).end("Domain limit reached");
    }
  } catch (e) {
    console.error(e);
    return res.status(500).end(e);
  }

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

    await prisma.site.update({
      where: {
        id: siteId,
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
 * Remove a domain from the Render service.
 *
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 */
export async function deleteDomain(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse> {
  const { domain, siteId } = req.query;

  if (!isValidParameter(domain) || !isValidParameter(siteId)) {
    return res.status(400).end("Bad request: query parameters are not valid");
  }

  const serviceId = process.env.RENDER_SERVICE_ID;

  try {
    await render.auth(process.env.AUTH_BEARER_TOKEN).deleteCustomDomain({
      serviceId,
      customDomainIdOrName: domain,
    });
  } catch (error) {
    console.error(error);

    if (
      typeof error === "object" &&
      error != null &&
      "status" in error &&
      error.status === 404
    ) {
      // the domain is already "not found"
      return res.status(200).end();
    }
  }

  try {
    await prisma.site.update({
      where: {
        id: siteId,
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
