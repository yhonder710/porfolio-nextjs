import "./ui/globals.css";
import { NavLink } from "./ui/NavLink";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 p-3 flex flex-col gap-5 items-center  text-white">
      <NavLink/>
        <div className=" rounded-2xl h-screen w-full">{children}</div>
      </body>
    </html>
  );
}
