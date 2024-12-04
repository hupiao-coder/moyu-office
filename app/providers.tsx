"use client";

import * as React from "react";
// NextUI - https://nextui.org
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
// ChakraUI - https://www.chakra-ui.com
import { Provider as ChakraUIProvider } from "@/components/ui/provider"


export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <ChakraUIProvider>
          {children}
        </ChakraUIProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
