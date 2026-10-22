# Ruang Ide — Kopi Susu Gula Nipah

Website jualan Ruang Ide, dibuat dengan React + Vite + Tailwind CSS.

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:5173
npm run build    # hasil siap upload ada di folder dist/
npm test         # tes logika keranjang
```

## Yang perlu diganti

- `src/data.js` — nomor WhatsApp, daftar menu & harga, alamat, jam buka, Instagram.
- `public/produk.png` — foto botol. Ganti dengan file asli `Image/Produk.png` (PNG transparan) supaya lebih tajam.
- Teks per bagian ada di `src/components/` (Hero, Features, MenuSection, About, Contact).
- Warna & font ada di `src/index.css` (bagian `@theme`).
