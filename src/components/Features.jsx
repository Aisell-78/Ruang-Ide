import { Coffee, Leaf, Snowflake } from 'lucide-react'

const FEATURES = [
  {
    icon: Leaf,
    title: 'Manis dari alam',
    text: 'Gula nipah dari nira pohon nipah memberi manis yang dalam, sedikit gurih, dan tidak bikin enek.',
  },
  {
    icon: Coffee,
    title: 'Kopi yang berani',
    text: 'Espresso yang cukup kuat untuk tetap terasa di balik susu dan manisnya gula nipah.',
  },
  {
    icon: Snowflake,
    title: 'Paling enak dingin',
    text: 'Simpan di kulkas, kocok sebentar, minum langsung dari botol. Segarnya pas kapan saja.',
  },
]

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="reveal max-w-2xl">
        <p className="font-display text-lg tracking-widest text-nipah-ink uppercase">Kenapa gula nipah?</p>
        <h2 className="mt-2 font-display text-4xl leading-tight font-bold text-ink uppercase md:text-5xl">
          Satu botol, tiga alasan buat balik lagi
        </h2>
      </div>
      <div className="reveal mt-12 grid gap-5 md:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, text }, i) => (
          <article
            key={title}
            className="group rounded-3xl border border-espresso/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(99,51,27,.35)]"
          >
            <div className="flex items-center justify-between">
              <span className="grid size-14 place-items-center rounded-2xl bg-nipah/15 text-nipah-ink transition-colors duration-300 group-hover:bg-nipah group-hover:text-ink">
                <Icon size={26} aria-hidden />
              </span>
              <span className="font-display text-5xl font-bold text-espresso/10">0{i + 1}</span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ink uppercase">{title}</h3>
            <p className="mt-2 leading-relaxed text-ink/70">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
