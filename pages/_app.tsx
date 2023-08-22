import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class">
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  )
}
