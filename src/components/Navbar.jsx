import { useEffect, useState } from 'react'
import { Menu as MenuIcon, ShoppingBag, X } from 'lucide-react'

const LINKS = [
  ['#home', 'Beranda'],
  ['#menu', 'Menu'],
  ['#about', 'Tentang'],
  ['#kontak', 'Kontak'],
]

const iconBtn =
  'relative grid size-11 cursor-pointer place-items-center rounded-full text-espresso transition-colors duration-200 hover:bg-espresso/10'

export default function Navbar({ count, onCart }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? 'bg-cream/80 shadow-[0_8px_30px_-12px_rgba(42,26,18,.25)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 md:px-6" aria-label="Navigasi utama">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className={`${iconBtn} md:hidden`}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="nav-mobile"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
          {/* Logo disusun dari ikon + teks font asli supaya tetap tajam di layar apa pun */}
          <a href="#home" className="flex items-center gap-2 text-espresso" aria-label="Ruang Ide, ke beranda">
            <img src="/logo-icon.png" alt="" width="452" height="455" className="size-10 md:size-11" />
            <span className="leading-none">
              <span className="block font-['Bebas_Neue'] text-[2rem] tracking-wide md:text-[2.25rem]">Ruang Ide</span>
              <span className="-mt-0.5 block font-['Lora'] text-[0.62rem] whitespace-nowrap md:text-[0.7rem]">
                Manis Alami Ide Tanpa Batas
              </span>
            </span>
          </a>
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="group relative rounded-full px-4 py-2 font-medium text-ink/80 transition-colors duration-200 hover:text-espresso"
              >
                {label}
                <span className="absolute inset-x-4 bottom-1 h-0.5 origin-left scale-x-0 rounded bg-nipah transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button type="button" className={iconBtn} aria-label={`Keranjang, ${count} item`} onClick={onCart}>
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 grid min-w-5 place-items-center rounded-full bg-nipah px-1 text-xs font-bold text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div
        id="nav-mobile"
        className={`grid overflow-hidden px-4 transition-[grid-template-rows,opacity] duration-300 md:hidden ${
          open ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        inert={!open}
      >
        <ul className="min-h-0">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-display text-2xl uppercase text-ink transition-colors hover:bg-espresso/10"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
