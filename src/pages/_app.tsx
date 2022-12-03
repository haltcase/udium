import "@/styles/globals.css";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const App = ({
	Component,
	pageProps: { session, ...pageProps }
}: AppProps<{ session: Session }>) => (
	<SessionProvider session={session}>
		<Component {...pageProps} />
	</SessionProvider>
);

export default App;
