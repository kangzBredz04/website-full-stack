import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../index.css";

export default function Catalog() {
  const [jersey, setJersey] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/jersey")
      .then((res) => res.json())
      .then((jersey) => setJersey(jersey));
  }, []);

  console.log(jersey);
  return (
    <div className="bg-[#0e0b16]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-primary">
          Katalog Produk
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {jersey.map((j) => (
            <div key={j.id} className="group relative bg-white rounded-lg">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={j.urlGambar}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="flex justify-between bg-white px-2 pb-2">
                <div>
                  <h3 className="text-sm text-[#0e0b16]">
                    <a href="">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {j.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-[#0e0b16]">
                    {`Stock ${j.stock}`}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">{j.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
