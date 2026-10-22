import { ArrowRight } from 'lucide-react'
import { MENU } from '../data'
import { rupiah } from '../cart'

const STATS = [
  [MENU[0].size, 'isi per botol'],
  [rupiah(MENU[0].price), 'harga per botol'],
  ['Fresh', 'diseduh harian'],
]

const TAGLINE = 'Manis Alami • Ide Tanpa Batas • Kopi Susu Gula Nipah • '

export default function Hero({ onOrder }) {
  return (
    <section id="home" className="relative -mt-18 overflow-hidden pt-18">
      {/* cahaya hangat di latar */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-nipah/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-8 pb-16 md:grid-cols-[1.15fr_1fr] md:px-6 md:pt-14 lg:pb-24">
        <div className="reveal">
          <h1 className="font-display text-6xl leading-[0.92] font-bold tracking-tight text-ink uppercase sm:text-7xl lg:text-[6.5rem]">
            Kopi Susu
            <br />
            <span className="text-nipah-ink">Gula Nipah</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75">
            Espresso dan susu segar, dimaniskan gula nipah yang rasanya legit seperti karamel. Dikemas dalam botol,
            siap menemani kerja, kuliah, atau ngobrol panjang.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOrder}
              className="group inline-flex h-13 cursor-pointer items-center gap-2 rounded-full bg-espresso px-7 font-semibold text-white shadow-lg shadow-espresso/25 transition duration-200 hover:bg-ink active:scale-[.98]"
            >
              Pesan Sekarang
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
            </button>
            <a
              href="#menu"
              className="inline-flex h-13 items-center rounded-full border-2 border-espresso/20 px-7 font-semibold text-espresso transition-colors duration-200 hover:border-espresso hover:bg-espresso/5"
            >
              Lihat Menu
            </a>
          </div>

          <dl className="mt-12 flex gap-6 sm:gap-12">
            {STATS.map(([value, label]) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="text-sm text-ink/60">{label}</dt>
                <dd className="font-display text-2xl font-semibold whitespace-nowrap text-espresso sm:text-3xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative mx-auto aspect-square w-full max-w-[26rem]">
          <div className="absolute inset-[6%] rounded-full bg-nipah" aria-hidden />
          <div
            className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.45),transparent_55%)]"
            aria-hidden
          />
          <div className="absolute inset-[14%] rounded-full border-2 border-dashed border-white/50" aria-hidden />
          <div className="absolute bottom-[2%] left-1/2 h-6 w-1/2 -translate-x-1/2 rounded-[50%] bg-espresso/30 blur-md" aria-hidden />
          <img
            src="/produk.png"
            alt={`Botol ${MENU[0].name} ${MENU[0].size} dari Ruang Ide`}
            width="313"
            height="557"
            fetchPriority="high"
            className="relative mx-auto h-full w-auto animate-float object-contain drop-shadow-[0_30px_35px_rgba(42,26,18,.4)]"
          />
          <div className="absolute top-[8%] right-0 grid size-24 rotate-12 place-items-center rounded-full border-2 border-espresso bg-cream text-center shadow-xl sm:size-28">
            <span className="font-display leading-none text-espresso">
              <span className="block text-xs tracking-widest uppercase">Cuma</span>
              <span className="text-2xl font-bold sm:text-3xl">{Math.round(MENU[0].price / 1000)}rb</span>
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-espresso py-4 text-cream" aria-hidden>
        <div className="flex w-max animate-marquee font-display text-2xl tracking-wide whitespace-nowrap uppercase">
          <span>{TAGLINE.repeat(4)}</span>
          <span>{TAGLINE.repeat(4)}</span>
        </div>
      </div>
    </section>
  )
}
