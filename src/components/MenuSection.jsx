import { Minus, Plus } from 'lucide-react'
import { MENU } from '../data'
import { rupiah } from '../cart'

export default function MenuSection({ cart, onQty }) {
  return (
    <section id="menu" className="bg-latte py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="reveal">
          <p className="font-display text-lg tracking-widest text-nipah-ink uppercase">Menu</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-ink uppercase md:text-5xl">Satu menu, dibuat serius</h2>
        </div>

        {MENU.map((m) => {
          const qty = cart.find((c) => c.id === m.id)?.qty ?? 0
          return (
            <article
              key={m.id}
              className="reveal mt-12 grid overflow-hidden rounded-[2rem] bg-white md:grid-cols-[1fr_1.1fr]"
            >
              <div className="relative grid place-items-center overflow-hidden bg-gradient-to-br from-nipah to-nipah-ink px-6 py-10">
                <div className="absolute size-[70%] rounded-full border-2 border-dashed border-white/40" aria-hidden />
                <img
                  src={m.image}
                  alt={`${m.name} ${m.size}`}
                  width="313"
                  height="557"
                  loading="lazy"
                  className="relative h-80 w-auto object-contain drop-shadow-[0_24px_24px_rgba(42,26,18,.45)] transition-transform duration-500 hover:scale-105 hover:-rotate-2 md:h-[26rem]"
                />
              </div>
              <div className="flex flex-col justify-center p-7 md:p-12">
                <p className="font-display text-lg tracking-widest text-nipah-ink uppercase">{m.size}</p>
                <h3 className="mt-1 font-display text-4xl font-bold text-ink uppercase md:text-5xl">{m.name}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/70">{m.desc}</p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <span className="font-display text-4xl font-semibold text-espresso">{rupiah(m.price)}</span>
                  {qty === 0 ? (
                    <button
                      type="button"
                      onClick={() => onQty(m.id, 1)}
                      className="inline-flex h-13 cursor-pointer items-center gap-2 rounded-full bg-espresso px-7 font-semibold text-white transition duration-200 hover:bg-ink active:scale-[.98]"
                    >
                      <Plus size={20} aria-hidden />
                      Tambah ke keranjang
                    </button>
                  ) : (
                    <Stepper qty={qty} label={`${m.name} ${m.size}`} onChange={(d) => onQty(m.id, d)} />
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export function Stepper({ qty, label, onChange }) {
  const btn =
    'grid size-11 cursor-pointer place-items-center rounded-full text-espresso transition-colors duration-200 hover:bg-espresso/10 active:scale-95'
  return (
    <div className="flex items-center rounded-full border border-espresso/20">
      <button type="button" className={btn} onClick={() => onChange(-1)} aria-label={`Kurangi ${label}`}>
        <Minus size={18} aria-hidden />
      </button>
      <span className="w-6 text-center font-semibold tabular-nums" aria-label={`${qty} di keranjang`}>
        {qty}
      </span>
      <button type="button" className={btn} onClick={() => onChange(1)} aria-label={`Tambah ${label}`}>
        <Plus size={18} aria-hidden />
      </button>
    </div>
  )
}
