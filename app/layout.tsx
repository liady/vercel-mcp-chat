import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChatSidebar } from "@/components/chat-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://gitmcp.io"),
  title: "GitMCP Chat",
  description:
    "GitMCP Chat is a minimalistic MCP client with a good feature set.",
  openGraph: {
    siteName: "GitMCP Chat",
    url: "https://gitmcp.io",
    images: [
      {
        url: "https://gitmcp.io/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitMCP Chat",
    description:
      "GitMCP Chat is a minimalistic MCP client with a good feature set.",
    images: ["https://gitmcp.io/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
