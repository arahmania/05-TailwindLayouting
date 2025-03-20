import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essai",
  description: "Halaman essai",
  openGraph: {
    title: "Essai",
    description: "Halaman essai",
  },
};

export default function Essays() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-teal-50 py-20 px-4 sm:px-8">
      <header className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-teal-600">
          Essai
        </h1>
        <p className="mt-6 text-gray-700 text-xl font-light">
          Kumpulan tulisan dan pemikiran tentang berbagai topik menarik
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100/50 transform hover:-translate-y-1">
          <div className="mb-6">
            <span className="text-xs font-medium inline-block py-1.5 px-3 rounded-full text-rose-600 bg-rose-50/70">
              Dasar Skincare
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 hover:text-rose-600 transition-colors duration-200">
            Panduan Lengkap Skincare untuk Pemula
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Memahami rutinitas dasar perawatan kulit: dari pembersihan hingga tabir surya. Pelajari urutan penggunaan produk yang benar dan bahan-bahan kunci untuk kulit sehat.
          </p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-gray-500">10 menit baca</span>
            <button className="group text-rose-600 hover:text-rose-700 font-medium inline-flex items-center">
              Baca selengkapnya 
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </article>

        <article className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100/50 transform hover:-translate-y-1">
          <div className="mb-6">
            <span className="text-xs font-medium inline-block py-1.5 px-3 rounded-full text-teal-600 bg-teal-50/70">
              Bahan Aktif
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 hover:text-teal-600 transition-colors duration-200">
            Mengenal Retinol dan Manfaatnya
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Retinol adalah bahan anti-aging yang powerful. Temukan cara menggunakan retinol dengan aman, manfaatnya untuk kulit, dan tips menghindari iritasi.
          </p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-gray-500">8 menit baca</span>
            <button className="group text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
              Baca selengkapnya
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </article>

        <article className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100/50 transform hover:-translate-y-1">
          <div className="mb-6">
            <span className="text-xs font-medium inline-block py-1.5 px-3 rounded-full text-rose-600 bg-rose-50/70">
              Tips & Trik
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 hover:text-rose-600 transition-colors duration-200">
            Merawat Skin Barrier yang Rusak
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Skin barrier yang sehat adalah kunci kulit glowing. Pelajari tanda-tanda skin barrier rusak dan cara memperbaikinya dengan ingredients yang tepat.
          </p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-gray-500">7 menit baca</span>
            <button className="group text-rose-600 hover:text-rose-700 font-medium inline-flex items-center">
              Baca selengkapnya
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

