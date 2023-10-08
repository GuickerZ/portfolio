import React from "react";
import { AppProps } from "next/app";
import { WindowProvider } from "@/contexts/windowContext";
import "@/styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<WindowProvider>
			<Component {...pageProps} />
		</WindowProvider>
	);
};

export default MyApp;
