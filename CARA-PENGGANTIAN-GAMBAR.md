# 📸 Cara Mengganti Gambar di Website MPK

## 🔴 PENTING: Langkah Pertama
Sebelum mengganti gambar, pastikan Anda memiliki semua file gambar yang diperlukan dengan format dan nama yang benar.

## 📁 File Gambar yang Diperlukan

### 1. Logo MPK
**File**: `public/images/logo1.svg` atau `logo1.png`
- **Format**: SVG (direkomendasikan) atau PNG
- **Ukuran**: 40x40px atau kelipatan yang sama
- **Background**: Transparan
- **Keterangan**: Logo organisasi MPK yang akan muncul di navbar

### 2. Foto Dokumentasi (7 foto)
**Files**: 
- `public/images/photo1.jpg`
- `public/images/photo2.jpg`
- `public/images/photo3.jpg`
- `public/images/photo4.jpg`
- `public/images/photo5.jpg`
- `public/images/photo6.jpg`
- `public/images/photo7.jpg`

**Spesifikasi**:
- **Format**: JPG, PNG, atau WEBP
- **Resolusi**: Minimal 1200x800px (untuk kualitas terbaik)
- **Aspek Rasio**: 16:9 atau 4:3 direkomendasikan
- **Ukuran File**: Maksimal 2MB per file
- **Keterangan**: Foto kegiatan dan dokumentasi organisasi

### 3. Foto 360° (7 foto)
**Files**:
- `public/images/photo3601.jpg`
- `public/images/photo3602.jpg`
- `public/images/photo3603.jpg`
- `public/images/photo3604.jpg`
- `public/images/photo3605.jpg`
- `public/images/photo3606.jpg`
- `public/images/photo3607.jpg`

**Spesifikasi**:
- **Format**: JPG atau PNG
- **Resolusi**: Minimal 1920x1080px
- **Jenis**: Foto panorama 360° (dari Google Photos atau kamera 360°)
- **Ukuran File**: Maksimal 5MB per file
- **Keterangan**: Foto yang dapat diputar 360° untuk pengalaman interaktif

## 🔄 Cara Mengganti Gambar

### Metode 1: Ganti Langsung (Mudah)
1. Siapkan gambar baru dengan nama file yang sama persis
2. Hapus gambar lama di folder `public/images/`
3. Copy gambar baru ke folder `public/images/`
4. Refresh browser (Ctrl+F5)

### Metode 2: Ganti dengan Nama Berbeda
1. Copy gambar baru ke folder `public/images/`
2. Edit file komponen yang relevan:
   - **Logo**: Edit `components/Navbar.tsx` baris dengan `src="/images/logo1.svg"`
   - **Foto Dokumentasi**: Edit `components/PhotoSlider.tsx` array `photos`
   - **Foto 360°**: Edit `components/Photo360Viewer.tsx` array `photos360`

## 📝 Contoh Mengganti Nama File

### Mengganti Logo
```tsx
// Di components/Navbar.tsx
<Image
  src="/images/logo-baru.png"  // ← Ganti nama file di sini
  alt="MPK Logo"
  fill
  className="object-contain"
/>
```

### Mengganti Foto Dokumentasi
```tsx
// Di components/PhotoSlider.tsx
const photos = [
  { id: 1, src: '/images/kegiatan1.jpg', alt: 'Kegiatan 1' }, // ← Ganti nama
  { id: 2, src: '/images/kegiatan2.jpg', alt: 'Kegiatan 2' }, // ← Ganti nama
  // ... dst
];
```

### Mengganti Foto 360°
```tsx
// Di components/Photo360Viewer.tsx
const photos360 = [
  { id: 1, src: '/images/panorama1.jpg', title: 'Ruang Kelas' }, // ← Ganti nama
  { id: 2, src: '/images/panorama2.jpg', title: 'Lab Komputer' }, // ← Ganti nama
  // ... dst
];
```

## 🎨 Tips Optimasi Gambar

### Sebelum Upload:
1. **Kompres gambar** menggunakan tool online seperti:
   - TinyPNG.com
   - Squoosh.app
   - CompressJPEG.com

2. **Resize gambar** ke ukuran yang tepat:
   - Logo: 40x40px atau 80x80px
   - Foto dokumentasi: 1200x800px
   - Foto 360°: 1920x1080px

3. **Pilih format yang tepat**:
   - Logo: SVG (terbaik) atau PNG
   - Foto: JPG untuk foto dengan banyak warna
   - Grafik: PNG untuk gambar dengan sedikit warna

## 🚀 Setelah Mengganti Gambar

1. **Test di browser**: Buka website dan pastikan gambar muncul
2. **Test responsiveness**: Cek di mobile dan tablet
3. **Clear cache**: Tekan Ctrl+F5 atau Cmd+Shift+R
4. **Build ulang** (jika perlu): 
   ```bash
   npm run build
   npm run dev
   ```

## ❗ Troubleshooting

### Gambar tidak muncul?
- Cek nama file (case sensitive!)
- Pastikan file ada di folder `public/images/`
- Cek format file (JPG, PNG, SVG)
- Clear browser cache

### Gambar buram/pixelated?
- Upload gambar dengan resolusi lebih tinggi
- Gunakan format PNG untuk grafik
- Compress tanpa kehilangan kualitas

### Loading lambat?
- Kompres gambar lebih agresif
- Kurangi ukuran file (target < 1MB per foto)
- Gunakan format WEBP jika browser support

## 📱 Preview Mobile

Selalu test gambar di perangkat mobile karena:
- Ukuran layar berbeda
- Kecepatan internet mungkin lebih lambat
- Touch interface membutuhkan target yang lebih besar

---

**💡 Pro Tip**: Backup selalu gambar asli sebelum mengedit atau mengganti!