import 'tailwindcss/tailwind.css'
import '@/styles/styles.css'
import { ThemeProvider } from 'next-themes'
import type {AppProps} from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';


export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>13th Penge & North Beckenham Scouts</title>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link rel="icon" type="image/png" href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fworld-scout-movement-logo-png-transparent.png&f=1&nofb=1&ipt=d5fcc1b46b1918ead002766c8ee633ef48852f72bba3c66d2c70f077d0f7ec31&ipo=images" />
			</Head>
			<ThemeProvider attribute="class">
			<Component {...pageProps} />
			<Analytics />
			</ThemeProvider>
		</>
	);
}
