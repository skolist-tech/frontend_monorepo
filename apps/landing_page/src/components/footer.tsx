import { Link } from "react-router-dom";
import { LINKS } from "../constants/links";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* Skolist Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Skolist</h3>
            <p className="text-sm text-gray-600">
              Empowering Schools to Provide Personalized Strategy-Based Learning for Every Child&apos;s Better Future
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link to="/vision" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Vision
              </Link>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-sm text-gray-600 mb-3">
              Ready to transform learning in your school?
            </p>
            <a
              href={LINKS.WHATSAPP_GROUP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-3"
            >
              Join WhatsApp Group 💬 →
            </a>
            <p className="text-sm text-gray-600">
              Email: <a href="mailto:info@skolist.com" className="text-blue-600 hover:text-blue-700">info@skolist.com</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-center">
          <p className="text-sm text-gray-600">
            © 2025 Skolist. Built by IIT Founders.
          </p>
        </div>
      </div>
    </footer>
  );
}
