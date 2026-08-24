import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tuscany Horse Trekking | Horseback Riding in Tuscany",
  description:
    "Authentic horseback riding experiences in the Tuscan countryside near Montepulciano.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
