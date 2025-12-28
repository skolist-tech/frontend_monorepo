import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { WhatsAppFloat } from "./whatsapp-float";

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
      <WhatsAppFloat />
    </div>
  );
}
