import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";

import { createPost, deletePost, getPost, updatePost } from "@/lib/api";
import { HttpMethod } from "@/types";

import { authOptions } from "./auth/[...nextauth]";

const post = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await unstable_getServerSession(req, res, authOptions);

	if (!session) {
		return res.status(401).end();
	}

	switch (req.method) {
		case HttpMethod.GET:
			return getPost(req, res, session);
		case HttpMethod.POST:
			return createPost(req, res, session);
		case HttpMethod.DELETE:
			return deletePost(req, res, session);
		case HttpMethod.PUT:
			return updatePost(req, res, session);
		default: {
			res.setHeader("Allow", [
				HttpMethod.GET,
				HttpMethod.POST,
				HttpMethod.DELETE,
				HttpMethod.PUT
			]);

			return res.status(405).end(`Method ${req.method} Not Allowed`);
		}
	}
};

export default post;
