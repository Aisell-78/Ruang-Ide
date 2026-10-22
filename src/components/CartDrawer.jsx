import { useEffect, useRef } from 'react'
import { ShoppingBag, X } from 'lucide-react'
import { MENU, WA_NUMBER } from '../data'
import { cartTotal, rupiah, waLink } from '../cart'
import { Stepper } from './MenuSection'

export default function CartDrawer({ open, onClose, cart, onQty }) {
  const panel = useRef(null)

  useEffect(() => {
    if (!open) return
    const prevFocus = document.activeElement
    panel.current?.focus({ preventScroll: true })
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prevFocus?.focus?.()
    }
  }, [open, onClose])

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} inert={!open}>
      <div
        className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-hidden
      />
      <aside
        ref={panel}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl outline-none transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-espresso/10 px-6 py-4">
          <h2 id="cart-title" className="font-display text-2xl font-bold text-ink uppercase">
            Keranjang
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup keranjang"
            className="grid size-11 cursor-pointer place-items-center rounded-full text-espresso transition-colors hover:bg-espresso/10"
          >
            <X size={22} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <span className="grid size-20 place-items-center rounded-full bg-nipah/15 text-nipah-ink">
              <ShoppingBag size={34} aria-hidden />
            </span>
            <p className="text-ink/70">Keranjang masih kosong.</p>
            <a
              href="#menu"
              onClick={onClose}
              className="inline-flex h-12 items-center rounded-full bg-espresso px-6 font-semibold text-white transition hover:bg-ink"
            >
              Lihat menu
            </a>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-espresso/10 overflow-y-auto px-6">
              {cart.map(({ id, qty }) => {
                const m = MENU.find((x) => x.id === id)
                return (
                  <li key={id} className="flex items-center gap-4 py-4">
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-lg font-semibold text-ink uppercase">{m.name}</p>
                      <p className="text-sm text-ink/60">
                        {m.size} · {rupiah(m.price)}
                      </p>
                    </div>
                    <Stepper qty={qty} label={`${m.name} ${m.size}`} onChange={(d) => onQty(id, d)} />
                  </li>
                )
              })}
            </ul>
            <div className="border-t border-espresso/10 p-6">
              <div className="flex items-baseline justify-between">
                <span className="text-ink/70">Total</span>
                <span className="font-display text-3xl font-bold text-espresso">{rupiah(cartTotal(cart, MENU))}</span>
              </div>
              <a
                href={waLink(cart, MENU, WA_NUMBER)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex h-13 items-center justify-center rounded-full bg-espresso font-semibold text-white transition duration-200 hover:bg-ink active:scale-[.98]"
              >
                Pesan lewat WhatsApp
              </a>
              <p className="mt-3 text-center text-sm text-ink/60">Pesananmu akan terkirim sebagai pesan WhatsApp.</p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
