// Logika keranjang dibuat murni (tanpa React) supaya bisa dites dengan `npm test`.
// cart = [{ id, qty }]

export const rupiah = (n) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)

export function changeQty(cart, id, delta) {
  const found = cart.find((i) => i.id === id)
  if (!found) return delta > 0 ? [...cart, { id, qty: delta }] : cart
  return cart
    .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
    .filter((i) => i.qty > 0)
}

export const cartCount = (cart) => cart.reduce((s, i) => s + i.qty, 0)

export const cartTotal = (cart, menu) =>
  cart.reduce((s, i) => s + i.qty * (menu.find((m) => m.id === i.id)?.price ?? 0), 0)

export function waLink(cart, menu, number) {
  const lines = cart.map((i) => {
    const m = menu.find((x) => x.id === i.id)
    return `- ${i.qty}x ${m.name} (${m.size}) = ${rupiah(i.qty * m.price)}`
  })
  const text = ['Halo Ruang Ide, saya mau pesan:', ...lines, '', `Total: ${rupiah(cartTotal(cart, menu))}`].join('\n')
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}
