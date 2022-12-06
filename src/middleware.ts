import { NextRequest, NextResponse } from "next/server";

export const config = {
	matcher: [
		/*
		 * Match all paths except for:
		 * 1. /api routes
		 * 2. /_next (Next.js internals)
		 * 3. /fonts (inside /public)
		 * 4. /examples (inside /public)
		 * 5. all root files inside /public (e.g. /favicon.ico)
		 */
		"/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)"
	]
};

const middleware = async (req: NextRequest) => {
	const url = req.nextUrl;

	// Get hostname of request (e.g. demo.udium.bolingen.me, demo.localhost:3000)
	const hostname = req.headers.get("host") || "demo.udium.bolingen.me";

	// Only for demo purposes - remove this if you want to use your root domain as the landing page
	if (
		hostname === "udium.bolingen.me" ||
		hostname === "platforms.udium.bolingen.me"
	) {
		return NextResponse.redirect("https://demo.udium.bolingen.me");
	}

	const currentHost =
		process.env.NODE_ENV === "production" && process.env.RENDER === "true"
			? hostname
					.replace(`.udium.bolingen.me`, "")
					.replace(`.platformize.udium.bolingen.me`, "")
			: hostname.replace(`.localhost:3000`, "");

	// rewrites for app pages
	if (currentHost == "app") {
		if (
			url.pathname === "/login" &&
			(req.cookies.get("next-auth.session-token") ||
				req.cookies.get("__Secure-next-auth.session-token"))
		) {
			url.pathname = "/";
			return NextResponse.redirect(url);
		}

		url.pathname = `/app${url.pathname}`;
		return NextResponse.rewrite(url);
	}

	// rewrite root application to `/home` folder
	if (
		hostname === "localhost:3000" ||
		hostname === "platformize.udium.bolingen.me"
	) {
		url.pathname = `/home${url.pathname}`;
		return NextResponse.rewrite(url);
	}

	// rewrite everything else to `/_sites/[site]` dynamic route
	url.pathname = `/_sites/${currentHost}${url.pathname}`;
	return NextResponse.rewrite(url);
};

export default middleware;
