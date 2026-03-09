export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-serif text-sm tracking-[0.25em] uppercase text-white font-semibold">
          FRAPPE STUDIO
        </p>

        <div className="flex items-center gap-8">
          {["Instagram", "Telegram", "YouTube"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[10px] tracking-[0.3em] uppercase text-white/40 hover:text-[#c9a96e] transition-colors duration-300 font-sans"
            >
              {link}
            </a>
          ))}
        </div>

        <p className="text-[10px] tracking-widest uppercase text-white/30 font-sans">
          © {year} Frappe Studio
        </p>
      </div>
    </footer>
  );
}
