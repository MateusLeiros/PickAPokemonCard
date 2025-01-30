import { Outlet } from "react-router";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-mygray">
      <Header />
      <div className="grow mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
