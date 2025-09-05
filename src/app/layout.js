import localFont from "next/font/local";
import "@/styles/reset.scss";
import { Root } from "./root";
import { ResponceBlocker } from "@/components/ResponceBlocker/ResponceBlocker";

const sfPro = localFont({
  src: [
    {
      path: "./fonts/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SFPRODISPLAYMEDIUM.otf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-sf-pro",
});

export const metadata = {
  title: "We're Creating For Emotions",
  description: "Day 11 | We're Creating For Emotions",
};

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">
      <body className={`body ${sfPro.variable}`}>
        <ResponceBlocker />
        <Root>{children}</Root>
      </body>
    </html>
  );
}
