import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import MenuSection from './components/MenuSection'
import About from './components/About'
import Contact from './components/Contact'
import CartDrawer from './components/CartDrawer'
import { MENU } from './data'
import { cartCount, changeQty } from './cart'

const YEAR = new Date().getFullYear()

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const onQty = (id, delta) => setCart((c) => changeQty(c, id, delta))
  const closeCart = useCallback(() => setCartOpen(false), [])

  const orderNow = () => {
    if (cart.length === 0) onQty(MENU[0].id, 1)
    setCartOpen(true)
  }

  // Animasi muncul saat elemen .reveal masuk layar
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.15 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a
        href="#menu"
        className="sr-only z-50 rounded-full bg-espresso px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Langsung ke menu
      </a>
      <Navbar count={cartCount(cart)} onCart={() => setCartOpen(true)} />
      <main>
        <Hero onOrder={orderNow} />
        <Features />
        <MenuSection cart={cart} onQty={onQty} />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-espresso/10 py-8 text-center text-sm text-ink/60">
        © {YEAR} Ruang Ide · Kopi Susu Gula Nipah
      </footer>
      <CartDrawer open={cartOpen} onClose={closeCart} cart={cart} onQty={onQty} />
    </>
  )
}
