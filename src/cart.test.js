import { test } from 'node:test'
import assert from 'node:assert/strict'
import { changeQty, cartCount, cartTotal, waLink } from './cart.js'

const menu = [
  { id: 'a', name: 'Kopi', size: '250 ml', price: 15000 },
  { id: 'b', name: 'Susu', size: '250 ml', price: 12000 },
]

test('tambah, kurangi, dan hapus item', () => {
  let cart = changeQty([], 'a', 1)
  cart = changeQty(cart, 'a', 1)
  cart = changeQty(cart, 'b', 1)
  assert.deepEqual(cart, [{ id: 'a', qty: 2 }, { id: 'b', qty: 1 }])
  assert.equal(cartCount(cart), 3)
  assert.equal(cartTotal(cart, menu), 42000)
  cart = changeQty(cart, 'b', -1)
  assert.deepEqual(cart, [{ id: 'a', qty: 2 }])
  assert.deepEqual(changeQty(cart, 'zzz', -1), cart)
})

test('link WhatsApp berisi pesanan dan total', () => {
  const text = decodeURIComponent(waLink([{ id: 'a', qty: 2 }], menu, '62811').split('text=')[1])
  assert.match(text, /2x Kopi \(250 ml\)/)
  assert.match(text, /Total: Rp\s?30\.000/)
})
