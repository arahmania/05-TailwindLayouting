import { Metadata } from "next";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Essai",
  description: "Halaman essai",
  openGraph: {
    title: "Essai", 
    description: "Halaman essai",
  },
};

const posts = [
  {
    id: 1,
    title: 'Belajar Next.js dari Nol',
    href: '#',
    description: 'Panduan lengkap untuk memulai dengan Next.js, framework React yang powerful untuk membangun aplikasi web modern dengan performa tinggi dan SEO yang baik.',
    imageUrl: '/images/project2.jpg',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    author: {
      name: 'Annisa Rahmania',
      imageUrl: '/images/project2.jpg',
    },
  },
  {
    id: 2,
    title: 'Laravel 12 Apa yang baru ya?',
    href: '#',
    description: 'Mengulas fitur-fitur terbaru dari Laravel 12, termasuk peningkatan performa, fitur keamanan baru, dan tools development yang lebih powerful untuk pengembangan aplikasi PHP modern.',
    imageUrl: '/images/project2.jpg',
    date: 'Mar 15, 2024',
    datetime: '2024-03-15',
    author: {
      name: 'Annisa Rahmania',
      imageUrl: '/images/project2.jpg',
    },
  },
  {
    id: 3,
    title: 'Jago Tailwind dalam semalam',
    href: '#',
    description: 'Tips dan trik untuk menguasai Tailwind CSS dengan cepat, dari konsep dasar hingga teknik advanced untuk membuat desain web yang responsif dan modern.',
    imageUrl: '/images/project2.jpg',
    date: 'Mar 14, 2024',
    datetime: '2024-03-14',
    author: {
      name: 'Annisa Rahmania',
      imageUrl: '/images/project2.jpg',
    },
  },
];

export default function Essays() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="text-4xl font-bold">Essai</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <article className="p-4 border rounded shadow">
          <h2 className="text-2xl font-semibold">Artikel 1</h2>
          <p className="mt-2">Deskripsi singkat artikel 1.</p>
        </article>
        <article className="p-4 border rounded shadow">
          <h2 className="text-2xl font-semibold">Artikel 2</h2>
          <p className="mt-2">Deskripsi singkat artikel 2.</p>
        </article>
        <article className="p-4 border rounded shadow">
          <h2 className="text-2xl font-semibold">Artikel 3</h2>
          <p className="mt-2">Deskripsi singkat artikel 3.</p>
        </article>
        {/* Tambahkan lebih banyak artikel sesuai kebutuhan */}
      </div>
    </div>
  );
}