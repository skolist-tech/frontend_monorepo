import { FaWhatsapp } from 'react-icons/fa';
import { LINKS } from '../constants/links';

export function WhatsAppFloat() {
  return (
    <a
      href={LINKS.WHATSAPP_GROUP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
      aria-label="Join WhatsApp Group"
    >
      <FaWhatsapp className="text-3xl" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Join WhatsApp Group
      </span>
    </a>
  );
}
