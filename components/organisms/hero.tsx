"use client"
import React from "react";
import Form from "@/components/organisms/form";

export default function Hero() {
    return (
        <div className="relative bg-[url('/landscape-hero.png')] bg-center from-slate-600 to-slate-900">
            <div className="absolute top-0 z-[0] h-screen w-screen"></div>
            <section className="relative max-w-full mx-auto  z-1">
                <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
                    <div className="space-y-5 max-w-3xl leading-0  lg:leading-5 mx-auto text-center">
                        <h1 className="text-3xl tracking-tighter font-geist bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500 text-transparent  mx-auto md:text-6xl">
                            Autofinancer son installation grace{" "}
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
                                à l'autoconsomation
              </span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-white font-semibold">
                            Nous vous accompagnons dans votre projet d'installation de panneaux solaires.
                        </p>
                        <Form/>
                    </div>


                </div>


            </section>
        </div>
    );
}
