# 🚀 Panduan Lengkap Website MPK

## 📋 Daftar Isi
- [Persiapan](#persiapan)
- [Instalasi](#instalasi)
- [Customization](#customization)
- [Testing](#testing)
- [Deployment](#deployment)
- [Maintenance](#maintenance)

## 🛠️ Persiapan

### Perangkat Lunak yang Diperlukan
1. **Node.js** (versi 18.0 atau lebih baru)
   - Download dari [nodejs.org](https://nodejs.org/)
   - Verifikasi: `node --version`

2. **Git** (untuk version control)
   - Download dari [git-scm.com](https://git-scm.com/)
   - Verifikasi: `git --version`

3. **Code Editor** (pilih salah satu):
   - Visual Studio Code (recommended)
   - WebStorm
   - Atom
   - Sublime Text

### File Media yang Diperlukan
1. **Logo organisasi** (format PNG/SVG)
2. **7 foto dokumentasi** (kegiatan, event, dll)
3. **7 foto 360°** (dari Google Photos atau kamera 360°)

## 🔧 Instalasi

### 1. Download Project
```bash
# Jika dari GitHub
git clone [URL_REPOSITORY]
cd mpk-landing

# Atau download ZIP dan extract
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```

### 4. Buka Browser
Akses `http://localhost:3000`

## 🎨 Customization

### 1. Mengganti Informasi Organisasi

#### Nama Organisasi
**File**: `components/Navbar.tsx`
```tsx
// Ganti "MPK" dengan nama organisasi Anda
<span className="text-white text-xl md:text-2xl font-bold tracking-wide">
  NAMA_ORGANISASI_ANDA
</span>
```

#### Tagline/Slogan
**File**: `components/TypewriterText.tsx`
```tsx
const texts = [
  "Slogan pertama organisasi Anda",
  "Slogan kedua organisasi Anda"
];
```

#### Metadata Website
**File**: `app/layout.tsx`
```tsx
export const metadata: Metadata = {
  title: "Nama Organisasi - Tagline",
  description: "Deskripsi singkat organisasi Anda",
  // ... dst
};
```

### 2. Mengganti Warna Tema

#### Warna Utama (Merah → Warna Lain)
**File**: `tailwind.config.ts`
```typescript
// Ganti red-500 dengan warna pilihan Anda di seluruh project
// Contoh: blue-500, green-500, purple-500, etc.
```

#### Warna Manual di Komponen
Cari dan ganti semua instance:
- `bg-red-500` → `bg-blue-500`
- `text-red-500` → `text-blue-500`
- `ring-red-500` → `ring-blue-500`
- dst.

### 3. Mengganti Konten

#### Judul Foto 360°
**File**: `components/Photo360Viewer.tsx`
```tsx
const photos360 = [
  { id: 1, src: '/images/photo3601.jpg', title: 'Ruang Kelas A' },
  { id: 2, src: '/images/photo3602.jpg', title: 'Laboratorium' },
  // ... sesuaikan dengan lokasi foto Anda
];
```

#### Link Tombol "Gabung Sekarang"
**File**: `components/JoinButton.tsx`
```tsx
const handleJoinClick = () => {
  window.open('https://your-registration-link.com', '_blank');
};
```

#### Footer
**File**: `app/page.tsx`
```tsx
<p className="text-gray-400 text-sm md:text-base">
  © 2024 NAMA_ORGANISASI. Tagline Anda.
</p>
```

## 🧪 Testing

### 1. Testing Lokal
```bash
# Development
npm run dev

# Production build test
npm run build
npm run start
```

### 2. Testing Responsiveness
- **Desktop**: 1920x1080, 1366x768
- **Tablet**: 768x1024, 1024x768
- **Mobile**: 375x667, 414x896, 360x640

### 3. Testing Browser
- Chrome
- Firefox
- Safari
- Edge

### 4. Testing Performance
- Gunakan Chrome DevTools
- Check Lighthouse score
- Test loading speed

## 🌐 Deployment

### Opsi 1: Vercel (Gratis & Mudah) ⭐
1. Push code ke GitHub
2. Daftar di [vercel.com](https://vercel.com)
3. Connect repository
4. Deploy otomatis!

**Domain**: `your-project.vercel.app`

### Opsi 2: Netlify (Gratis)
1. Build project: `npm run build`
2. Daftar di [netlify.com](https://netlify.com)
3. Drag & drop folder `.next/` atau connect Git
4. Deploy!

**Domain**: `your-project.netlify.app`

### Opsi 3: GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "export": "next export",
     "deploy": "gh-pages -d out"
   }
   ```
3. Run: `npm run build && npm run export && npm run deploy`

### Opsi 4: Hosting Sendiri
1. Build: `npm run build`
2. Upload folder `.next/` ke hosting
3. Setup Node.js server
4. Run: `npm start`

## 🔧 Maintenance

### Update Dependencies
```bash
# Check outdated packages
npm outdated

# Update all
npm update

# Update specific package
npm install package-name@latest
```

### Backup
Selalu backup:
1. **Source code** (Git repository)
2. **Media files** (folder `public/images/`)
3. **Database** (jika ada)
4. **Environment variables**

### Monitoring
1. **Google Analytics** (untuk traffic)
2. **Google Search Console** (untuk SEO)
3. **Uptime monitoring** (untuk availability)

### Security
1. **Keep dependencies updated**
2. **Use HTTPS** (otomatis di Vercel/Netlify)
3. **Regular backups**
4. **Monitor for vulnerabilities**: `npm audit`

## 📱 Mobile Optimization

### Performance Tips
1. **Optimize images** (WebP format)
2. **Lazy loading** (sudah built-in)
3. **Minimize JavaScript**
4. **Use CDN** (otomatis di Vercel/Netlify)

### UX Tips
1. **Touch targets** min 44px
2. **Fast loading** < 3 seconds
3. **Easy navigation**
4. **Readable fonts** min 16px

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next/
rm -rf node_modules/
npm install

# Check for TypeScript errors
npm run lint
```

### Image Issues
- Check file names (case sensitive!)
- Verify file exists in `public/images/`
- Check file permissions
- Try different image format

### Performance Issues
- Optimize images (compress)
- Check bundle size: `npm run analyze`
- Use production build: `npm run build`

### Deployment Issues
- Check build logs
- Verify environment variables
- Test locally first
- Check domain DNS settings

## 📞 Support

### Resources
1. **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
2. **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
3. **Framer Motion**: [framer.com/motion](https://framer.com/motion)

### Community
1. **Stack Overflow** (untuk technical issues)
2. **GitHub Issues** (untuk bugs)
3. **Discord/Slack** (komunitas developer)

---

## ✅ Checklist Deploy

- [ ] Ganti semua placeholder text
- [ ] Upload semua gambar (logo + 14 foto)
- [ ] Test di mobile & desktop
- [ ] Check performance (Lighthouse)
- [ ] Setup domain (opsional)
- [ ] Setup analytics (opsional)
- [ ] Backup source code

---

**🎉 Selamat! Website MPK Anda siap digunakan!**