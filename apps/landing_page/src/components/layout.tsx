import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { WhatsAppFloat } from "./whatsapp-float";
import { Footer } from "./footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
