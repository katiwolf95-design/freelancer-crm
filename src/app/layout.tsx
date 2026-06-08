import "./globals.css";
import Navigation from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
    >
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
