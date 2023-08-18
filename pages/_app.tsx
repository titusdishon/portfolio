import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class">
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  )
}
