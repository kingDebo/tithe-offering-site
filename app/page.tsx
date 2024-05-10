"use client";

import FormComponent from "./form";
import cover from "@/public/cover.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-xl px-5 py-5 md:mx-16 lg:flex lg:px-0 lg:py-12">
      <section className="mr-36 hidden w-1/2 lg:block">
        <div className="sticky top-5 h-fit w-full rounded-2xl bg-slate-100 p-5">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">
            My response of love and obedience
          </h1>
          <p className="mb-6 text-sm text-gray-800">
            One person gives freely, yet gains even more; another withholds
            unduly, but comes to poverty" -{" "}
            <span className="block pt-2 text-xs text-gray-500">
              Proverbs 11:24
            </span>
          </p>
          <Image
            src={cover}
            alt="Serene park"
            className="h-48 w-full rounded-2xl object-cover"
          />
        </div>
      </section>
      <FormComponent />
    </main>
  );
}
