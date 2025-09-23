import { cookies } from "next/headers";
import { Open_Sans } from "next/font/google";
import "@/app/styles/globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "CartolinksProject",
  description: "CartolinksProject - Advanced Mapping Solutions",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("themeMode")?.value || "light";
  console.log(theme);

  return (
    <html lang="en" className={`${theme}`}>
      <body
        className={` ${openSans.className} dark:bg-secondary dark:text-secondary-text bg-primary text-primary-text`}
      >
        {children}
      </body>
    </html>
  );
}
