import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman tentang saya",
  openGraph: {
    title: "Tentang Saya",
    description: "Halaman tentang saya",
  },
};

export default function Home() {
  return (
    <div className="mt-16 px-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Tentang Saya</h1>
      </header>
      
      <section className="prose">
        <p>Selamat datang di halaman tentang saya. Halaman ini sedang dalam pengembangan.</p>
      </section>
     
    </div>
  );
}
