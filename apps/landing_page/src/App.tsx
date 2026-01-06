import { Routes, Route } from "react-router-dom";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import RouteChangeTracker from "./RouteChangeTracker";

import { Layout } from "./components/layout";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { VisionPage } from "./pages/vision";
import { ProductPage } from "./pages/product";
import { ContactPage } from "./pages/contact";

function App() {
  return (
    <>
      {/* GA4 SPA tracking */}
      <RouteChangeTracker />

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="vision" element={<VisionPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>

      {/* Vercel Analytics */}
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
