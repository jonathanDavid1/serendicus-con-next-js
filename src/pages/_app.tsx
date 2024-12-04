import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MetaPixel from '../components/MetaPixel';

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <MetaPixel pixelId="596246742959564" />
  <Component {...pageProps} />
  </>
}
