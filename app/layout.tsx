import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import { ReactReduxContext } from "react-redux";
import { ReduxProvider } from "./redux/provider";
import { Toaster } from "sonner"
import { ReactQueryProvider } from "./react-query/provider";
import { ThemeProvider } from "@/components/theme";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "FoldPro",
  description: "Affiliate Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${roboto.variable} bg-black`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ReduxProvider>
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </ReduxProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}