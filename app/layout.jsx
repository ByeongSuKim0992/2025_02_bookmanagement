import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export const metadata = {
  title: "도서 관리 프로그램",
  description: "책책책을 읽읍시다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main>
          <BreadCrumbs />
          {children}
        </main>
      </body>
    </html>
  );
}
