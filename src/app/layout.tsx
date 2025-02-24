import type { Metadata } from "next";
import Nav from "./Components/Nav/Nav";
import 'normalize.css';
import "./MIxin-and-defolt/defolt.scss";
import layoutStyle from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Cock and balls torture",
  description: "Generated by me for me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={layoutStyle.body}>
          <div className={layoutStyle.navHolder}>
            <Nav />
          </div>
          {children}
        </body>
      </html>
    </>
  );
}
