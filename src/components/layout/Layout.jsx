import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../../public/img/logo_movil_blanco.png";
import CookiesBanner from "../cookiesBanner/CookiesBanner";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <FloatingWhatsApp
        accountName="ERMotoservice"
        phoneNumber="+34639134295"
        chatMessage="¡Hola!, ¿en qué podemos ayudarte?"
        statusMessage=""
        placeholder="Escribe un mensaje..."
        avatar={logo}
      />
      <CookiesBanner />
    </>
  );
};

export default Layout;
