import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 px-4 py-6 max-w-7xl mx-auto">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
