import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import image1 from "../../../public/images/project1.jpeg";
import image2 from "../../../public/images/project2.jpg";

type ProjectProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};

function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectProps) {
    return (
        <li className="transform transition duration-300 hover:scale-105">
            <a href={url} className="block h-full">
                <div className="h-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl border border-gray-200">
                    <div className="relative h-48 overflow-hidden">
                        <Image 
                            className="w-full h-full object-cover" 
                            src={imageSrc} 
                            alt={name} 
                        />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-indigo-700">{name}</div>
                    </div>
                    <div className="px-6 pb-4">
                        <span className="inline-block bg-indigo-100 rounded-full px-3 py-1 text-sm font-semibold text-indigo-700 mr-2 mb-2">{urlDisplay}</span>
                    </div>
                </div>
            </a>
        </li>
    );
}

export const metadata: Metadata = {
  title: "Proyek",
  description: "Halaman proyek",
  openGraph: {
    title: "Proyek",
    description: "Halaman proyek",
  },
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 py-16 px-8">
      <header className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-indigo-800">Proyek Saya</h1>
        <p className="text-lg mt-6 text-zinc-600 max-w-2xl mx-auto">Berikut adalah beberapa projek yang telah saya kerjakan</p>
      </header>
      <div className="mt-16 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-indigo-700 mb-8 border-b-2 border-indigo-200 pb-2">Proyek Terbaru</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-8">
            <ProjectItem name="Proyek 1" url="https://example.com/project1" urlDisplay="Website" imageSrc={image1} />
            <ProjectItem name="Proyek 2" url="https://example.com/project2" urlDisplay="Aplikasi" imageSrc={image2} />
        </ul>
      </div>
    </div>
  );
}
