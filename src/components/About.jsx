export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
      <div className="reveal relative overflow-hidden rounded-[2rem] bg-espresso p-10 text-cream md:p-14">
        <div className="absolute -right-16 -bottom-16 size-64 rounded-full bg-nipah/40 blur-2xl" aria-hidden />
        <p className="relative font-display text-4xl leading-tight font-semibold uppercase md:text-5xl">
          “Ide bagus sering datang dari obrolan sambil ngopi.”
        </p>
        <p className="relative mt-6 text-cream/75">— Ruang Ide</p>
      </div>
      <div className="reveal">
        <p className="font-display text-lg tracking-widest text-nipah-ink uppercase">Tentang kami</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-ink uppercase md:text-5xl">Ruang buat ide-idemu</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
          <p>
            Ruang Ide berawal dari keinginan sederhana: bikin kopi susu yang manisnya terasa jujur. Kami memilih gula
            nipah karena rasanya khas, legit, dan beda dari gula aren biasa.
          </p>
          <p>
            Setiap botol diseduh dalam jumlah kecil supaya tetap segar. Harapan kami, satu botol Ruang Ide bisa jadi
            teman waktu kamu sedang mengejar ide berikutnya.
          </p>
        </div>
      </div>
    </section>
  )
}
