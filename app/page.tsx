import Navbar from '@/components/Navbar';
import TypewriterText from '@/components/TypewriterText';
import PhotoSlider from '@/components/PhotoSlider';
import Photo360Viewer from '@/components/Photo360Viewer';
import JoinButton from '@/components/JoinButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900/40 via-transparent to-transparent"></div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TypewriterText />
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gray-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-red-700/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </section>
      
      {/* Photo Slider Section */}
      <PhotoSlider />
      
      {/* 360 Photo Viewer Section */}
      <Photo360Viewer />
      
      {/* Join Button Section */}
      <JoinButton />
      
      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm md:text-base">
              © 2024 MPK - Majelis Perwakilan Kelas. Dari Pelajar, Oleh Pelajar, Untuk Pelajar.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}