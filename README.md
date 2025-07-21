# MPK Landing Page 🏫

Website landing page responsive untuk organisasi MPK (Majelis Perwakilan Kelas) yang dibuat dengan Next.js 14 dan Tailwind CSS.

## ✨ Fitur

- **Navbar Glassy**: Navbar transparan dengan efek glassmorphism yang responsive
- **Animasi Typewriter**: Teks yang berubah secara otomatis dengan efek mengetik
- **Photo Slider**: Slider foto dokumentasi organisasi dengan navigasi lengkap
- **Foto 360° Interaktif**: Viewer foto 360 derajat yang dapat diputar dengan drag
- **Design Modern**: Tema gelap dengan aksen merah dan animasi yang halus
- **Fully Responsive**: Optimized untuk mobile, tablet, dan desktop
- **Performance Optimized**: Menggunakan Next.js 14 dengan App Router

## 🚀 Demo

Website ini menampilkan:
1. Hero section dengan animasi typewriter yang menampilkan:
   - "Bersama Menyuarakan Aspirasi, Demi Kelas yang Lebih Baik."
   - "Dari Pelajar, Oleh Pelajar, Untuk Pelajar."
2. Galeri foto dokumentasi organisasi (7 foto)
3. Koleksi foto 360° yang interaktif (7 foto)
4. Tombol "Gabung Sekarang" yang mengarah ke Google.com

## 🛠️ Teknologi

- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animasi dan transisi
- **Heroicons** - Icon set
- **React Three Fiber** - 3D graphics (untuk foto 360°)

## 📦 Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd mpk-landing
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## 📁 Struktur Project

```
mpk-landing/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── Navbar.tsx           # Navbar component
│   ├── TypewriterText.tsx   # Typewriter animation
│   ├── PhotoSlider.tsx      # Photo slider
│   ├── Photo360Viewer.tsx   # 360° photo viewer
│   └── JoinButton.tsx       # Join button
├── public/
│   └── images/
│       ├── logo1.png        # Logo MPK
│       ├── photo1.jpg       # Dokumentasi 1-7
│       └── photo3601.jpg    # Foto 360° 1-7
└── README.md
```

## 🎨 Customization

### Mengganti Logo
Ganti file `public/images/logo1.png` dengan logo organisasi Anda.

### Mengganti Foto Dokumentasi
Ganti file `photo1.jpg` sampai `photo7.jpg` di folder `public/images/` dengan foto dokumentasi Anda.

### Mengganti Foto 360°
Ganti file `photo3601.jpg` sampai `photo3607.jpg` di folder `public/images/` dengan foto 360° Anda.

### Mengubah Teks Typewriter
Edit array `texts` di `components/TypewriterText.tsx`:
```tsx
const texts = [
  "Teks pertama Anda",
  "Teks kedua Anda"
];
```

### Mengubah Link Tombol
Edit URL di `components/JoinButton.tsx`:
```tsx
const handleJoinClick = () => {
  window.open('https://your-link.com', '_blank');
};
```

### Mengubah Warna Tema
Edit warna di `tailwind.config.ts` atau gunakan kelas warna Tailwind yang berbeda di komponen.

## 📱 Responsiveness

Website ini telah dioptimasi untuk berbagai ukuran layar:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Fitur mobile-first design memastikan performa terbaik di perangkat mobile.

## 🔧 Development

### Scripts
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
```

### Environment Variables
Buat file `.env.local` jika diperlukan untuk konfigurasi tambahan.

## 📸 Format Foto

### Foto Dokumentasi
- Format: JPG, PNG, WEBP
- Resolusi: Minimal 800x600px
- Aspek rasio: 16:9 atau 4:3 untuk hasil terbaik

### Foto 360°
- Format: JPG, PNG (dari Google Photos)
- Resolusi: Minimal 1920x1080px
- Harus berupa foto panorama 360° yang telah diproses

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Connect repository ke Vercel
3. Deploy otomatis

### Netlify
1. Build project: `npm run build`
2. Upload folder `out/` atau `.next/` ke Netlify

### Manual Server
1. Build project: `npm run build`
2. Copy files ke server
3. Jalankan: `npm start`

## 🤝 Contributing

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Heroicons](https://heroicons.com/)

---

Dibuat dengan ❤️ untuk organisasi MPK

