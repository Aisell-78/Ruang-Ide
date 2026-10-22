import { AtSign, MapPin, MessageCircle, Phone } from 'lucide-react'
import { CONTACT, WA_NUMBER } from '../data'

export default function Contact() {
  const items = [
    {
      icon: MapPin,
      label: 'Lokasi',
      value: CONTACT.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`,
    },
    { icon: Phone, label: 'WhatsApp / Telepon', value: CONTACT.phone, href: `https://wa.me/${WA_NUMBER}` },
    {
      icon: AtSign,
      label: 'Instagram',
      value: `@${CONTACT.instagram}`,
      href: `https://instagram.com/${CONTACT.instagram}`,
    },
  ]

  return (
    <section id="kontak" className="px-4 pb-20 md:px-6 md:pb-28">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-nipah px-6 py-14 md:px-14 md:py-20">
        <div className="absolute -top-24 -right-24 size-80 rounded-full border-[40px] border-white/15" aria-hidden />
        <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-5xl leading-[0.95] font-bold text-ink uppercase md:text-6xl">
              Haus ide?
              <br />
              Pesan sekarang.
            </h2>
            <p className="mt-5 max-w-md text-lg text-ink/80">
              Chat kami lewat WhatsApp untuk pesan antar, pesanan acara, atau sekadar tanya rasa.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-13 items-center gap-2 rounded-full bg-ink px-7 font-semibold text-white transition duration-200 hover:bg-espresso active:scale-[.98]"
            >
              <MessageCircle size={20} aria-hidden />
              Chat WhatsApp
            </a>
          </div>
          <ul className="space-y-3">
            {items.map(({ icon: Icon, label, value, href }) => {
              const Tag = href ? 'a' : 'div'
              return (
                <li key={label}>
                  <Tag
                    {...(href && { href, target: '_blank', rel: 'noreferrer' })}
                    className={`flex items-center gap-4 rounded-2xl bg-cream/90 p-4 ${
                      href ? 'transition duration-200 hover:bg-cream hover:shadow-lg' : ''
                    }`}
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-espresso text-white">
                      <Icon size={20} aria-hidden />
                    </span>
                    <span>
                      <span className="block text-sm text-ink/60">{label}</span>
                      <span className="font-semibold text-ink">{value}</span>
                    </span>
                  </Tag>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
