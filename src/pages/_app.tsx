import { getPages } from "@/sanity-requests/getPages";
import "@/styles/globals.css";
import { Page } from "@/types/Page";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    const fetchPages = async () => {
      const pagesFound = await getPages();

      setPages(pagesFound);
    };

    fetchPages();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-10">
      <header className="flex items-center justify-between">
        <Link
          href={"/"}
          className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
        >
          Diego
        </Link>

        <div className="flex items-center gap-5 text-sm text-gray-600" >
          {pages.map((page) => (
            <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
              {page.title}
            </Link>
          ))}
        </div>
      </header>
      <main className="py-20">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
