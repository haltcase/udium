import type { NextApiRequest, NextApiResponse } from "next";

const revalidate = async (req: NextApiRequest, res: NextApiResponse) => {
	const { urlPath } = req.body;
	res.setHeader("Access-Control-Allow-Origin", "https://app.udium.bolingen.me");
	res.setHeader("Access-Control-Allow-Methods", "POST");

	try {
		await res.revalidate(urlPath);

		res.status(200).json({
			message: "OK"
		});
	} catch (error) {
		res.status(500).json({
			message: `Failed to revalidate "${urlPath}"`
		});
	}
};

export default revalidate;
