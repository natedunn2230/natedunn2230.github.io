import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import { Metadata } from "next";
import { Roboto } from "next/font/google";

import '@mantine/core/styles.css';
import "../styles/app.css";

export const metadata: Metadata = {
  title: "Nathan Dunn",
  description: "Discover more about Nathan Dunn",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const theme = createTheme({
  primaryColor: 'blue',
});

import Main from './page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <ColorSchemeScript/>
      </head>
      <body>
        <div className="app">
          <MantineProvider theme={theme}>
            <Main>
              {children}
            </Main>
          </MantineProvider>
        </div>
      </body>
    </html>
  );
}
