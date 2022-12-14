import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";

import { createDomain, deleteDomain } from "@/lib/api";
import { HttpMethod } from "@/types";

import { authOptions } from "../auth/[...nextauth]";

const domain = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await unstable_getServerSession(req, res, authOptions);

	if (!session) {
		return res.status(401).end();
	}

	switch (req.method) {
		case HttpMethod.POST:
			return createDomain(req, res);
		case HttpMethod.DELETE:
			return deleteDomain(req, res);
		default: {
			res.setHeader("Allow", [HttpMethod.POST, HttpMethod.DELETE]);
			return res.status(405).end(`Method ${req.method} Not Allowed`);
		}
	}
};

export default domain;
