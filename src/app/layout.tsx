import "../styles/app.css";

import { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavBar from "../components/navbar";

export const metadata: Metadata = {
  title: "Nathan Dunn",
  description: "Discover more about Nathan Dunn",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div className="app">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
