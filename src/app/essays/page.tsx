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

