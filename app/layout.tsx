import "./globals.css";

import Navbar from '@components/Navbar';

export const metadata = {
  title: {
    default: "Sportas | We make playing sports with others easy",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-white text-black dark:bg-[#111010] dark:text-white"
    >
      <body className="flex flex-col antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
