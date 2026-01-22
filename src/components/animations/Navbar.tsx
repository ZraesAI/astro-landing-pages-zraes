import { useState, useEffect, useRef } from "react";
import { ChevronDown, MessageCircle, Zap, X, Menu } from "lucide-react";

interface SubSubItem {
  name: string;
  href: string;
}

interface SubItem {
  name: string;
  href: string;
  subSubItems?: SubSubItem[];
}

interface MenuItem {
  name: string;
  href: string;
  subItems?: SubItem[];
}

interface NavbarProps {
  telegramBotUrl?: string;
}

const menuItems: MenuItem[] = [
  { name: "HOME", href: "/" },
  {
    name: "FEATURES",
    href: "/profil",
    subItems: [
      { name: "Bot Analytics", href: "/profil" },
      { name: "Risk Assessment", href: "/profil#visi-misi" },
      { name: "Smart Contracts", href: "/profil#struktur-organisasi" },
    ],
  },
  {
    name: "SOLUTIONS",
    href: "/program",
    subItems: [
      { name: "DeFi Bots", href: "/program#sosial" },
      { name: "Trading Bots", href: "/program#kemanusiaan" },
      { name: "Arbitrage Bots", href: "/program#keagamaan" },
    ],
  },
  {
    name: "DOCS",
    href: "/berita",
  },
];

export default function Navbar({ telegramBotUrl = "https://t.me/Gilang_Bot" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<number[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div ref={navRef} className="w-full fixed top-0 left-0 right-0 z-[100] px-4 py-3 flex justify-center">
      <nav className="w-full max-w-6xl flex justify-between items-center px-6 2xl:px-8 py-3 backdrop-blur-xl relative z-[100] bg-[#1f2833]/90 rounded-2xl border border-[#66fcf1]/30 shadow-[0_8px_32px_rgba(102,252,241,0.15)]">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="cursor-pointer hover:opacity-90 transition-all duration-300 ease-out active:opacity-70 flex-shrink-0 group">
            <span className="text-xl md:text-2xl font-bold tracking-wider flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#66fcf1] to-[#45a29e] flex items-center justify-center group-hover:shadow-[0_0_25px_rgba(102,252,241,0.5)] transition-all duration-300 group-hover:scale-105">
                <Zap className="w-5 h-5 text-[#0b0c10]" />
              </div>
              <span className="bg-gradient-to-r from-[#66fcf1] via-[#45a29e] to-[#66fcf1] bg-clip-text text-transparent">ZRAES AI</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-8 text-[#c5c6c7] font-medium text-sm">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group" onMouseEnter={() => setActiveDropdown(index)} onMouseLeave={() => setActiveDropdown(null)}>
                <a href={item.href} className="flex items-center gap-1 hover:text-[#66fcf1] transition-colors duration-300 ease-out relative py-2">
                  <span>{item.name}</span>
                  {item.subItems && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-out ${activeDropdown === index ? "rotate-180" : ""}`} />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#66fcf1] to-[#45a29e] group-hover:w-full transition-all duration-300 ease-out" />
                </a>

                {/* Dropdown */}
                {item.subItems && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-56 bg-[#1f2833]/95 backdrop-blur-xl text-white shadow-[0_8px_32px_rgba(102,252,241,0.15)] rounded-xl mt-2 z-[110] border border-[#66fcf1]/25 transition-all duration-300 ease-out overflow-hidden ${
                      activeDropdown === index ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                    }`}
                  >
                    <div className="py-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <a key={subIndex} href={subItem.href} className="block px-4 py-3 text-[#c5c6c7] hover:bg-[#66fcf1]/10 hover:text-[#66fcf1] transition-all duration-200 ease-out hover:pl-5">
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Telegram Bot Button */}
            <a
              href={telegramBotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#66fcf1] to-[#45a29e] text-[#0b0c10] font-bold text-sm rounded-xl hover:shadow-[0_0_30px_rgba(102,252,241,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">TELEGRAM BOT</span>
              <span className="md:hidden">BOT</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden text-[#c5c6c7] hover:text-[#66fcf1] focus:outline-none transition-all duration-300 ease-out active:scale-90 p-2 rounded-xl hover:bg-[#66fcf1]/10"
            >
              <Menu className={`w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0b0c10]/60 backdrop-blur-sm z-[99] xl:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsMobileMenuOpen(false)} />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-full max-w-sm h-full bg-[#0b0c10]/98 backdrop-blur-xl z-[100] transform transition-transform duration-500 ease-out xl:hidden overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-5 border-b border-[#66fcf1]/10">
          <span className="text-lg font-bold bg-gradient-to-r from-[#66fcf1] to-[#45a29e] bg-clip-text text-transparent">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#c5c6c7] hover:text-[#66fcf1] p-2 rounded-xl hover:bg-[#66fcf1]/10 transition-all duration-200">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="p-5">
          {/* Telegram Bot Button Mobile */}
          <a
            href={telegramBotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-4 mb-6 bg-gradient-to-r from-[#66fcf1] to-[#45a29e] text-[#0b0c10] font-bold rounded-xl hover:shadow-[0_0_30px_rgba(102,252,241,0.4)] transition-all duration-300 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            TELEGRAM BOT
          </a>

          <div className="flex flex-col text-white font-medium">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-[#66fcf1]/10 py-4 transition-colors duration-200">
                {!item.subItems ? (
                  <a href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-[#c5c6c7] hover:text-[#66fcf1] transition-colors duration-200 ease-out">
                    {item.name}
                  </a>
                ) : (
                  <div>
                    <button onClick={() => toggleAccordion(index)} className="flex justify-between items-center w-full text-[#c5c6c7] hover:text-[#66fcf1] transition-colors duration-200 ease-out">
                      <span>{item.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ease-out ${openAccordions.includes(index) ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-out ${openAccordions.includes(index) ? "max-h-96 mt-3" : "max-h-0"}`}>
                      <div className="py-2 px-4 flex flex-col gap-2 bg-[#1f2833]/60 rounded-xl border border-[#66fcf1]/10">
                        {item.subItems.map((subItem, subIndex) => (
                          <a key={subIndex} href={subItem.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-[#c5c6c7] hover:text-[#66fcf1] hover:pl-2 transition-all duration-200 ease-out">
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
