import { Phone, MessageCircle, Send } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";

export function MobileBottomCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-ink/10 bg-paper/95 backdrop-blur md:hidden">
      <a
        href={site.phoneHref}
        className="flex flex-col items-center justify-center gap-1 border-r border-ink/10 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-ink"
      >
        <Phone size={16} />
        Call
      </a>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 border-r border-ink/10 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-ink"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>
      <a
        href="/contact"
        className="flex flex-col items-center justify-center gap-1 bg-ember py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-paper"
      >
        <Send size={16} />
        Enquire
      </a>
    </div>
  );
}
