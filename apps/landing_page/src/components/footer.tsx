import { Link } from "react-router-dom";
import { LINKS } from "../constants/links";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-12">
      <div className="container">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          {/* Skolist Section */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Skolist</h3>
            <p className="text-sm text-gray-600">
              Empowering Schools to Provide Personalized Strategy-Based Learning
              for Every Child&apos;s Better Future
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/vision"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                Vision
              </Link>
              <Link
                to="/contact"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Get in Touch</h3>
            <p className="mb-3 text-sm text-gray-600">
              Ready to transform learning in your school?
            </p>
            <a
              href={LINKS.WHATSAPP_GROUP}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              Join WhatsApp Group 💬 →
            </a>
            <p className="text-sm text-gray-600">
              Email:{" "}
              <a
                href="mailto:info@skolist.com"
                className="text-blue-600 hover:text-blue-700"
              >
                info@skolist.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Skolist. Built by IIT Founders.
          </p>
        </div>
      </div>
    </footer>
  );
}
