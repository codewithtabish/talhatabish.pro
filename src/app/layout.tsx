import { metadata } from "@/lib/seo/seo-data";
export { metadata };



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // No <html> or <body> here!
  return children;
}


