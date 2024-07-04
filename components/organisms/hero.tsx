import React from "react";
import RetroGrid from "@/components/ui/magicui/retro-grid";

export default function Hero() {
    return (
        <div className="relative bg-gradient-to-b from-slate-700 to-slate-900">
            <img
                src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
                className="absolute z-2 -top-0 left-10"
            />
            <div className="absolute top-0 z-[0] h-screen w-screen"></div>
            <section className="relative max-w-full mx-auto  z-1">
                <RetroGrid/>
                <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
                    <div className="space-y-5 max-w-3xl leading-0  lg:leading-5 mx-auto text-center">
                        <h1 className="text-4xl tracking-tighter font-geist bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent   mx-auto md:text-6xl">
                            Designing your projects faster with{" "}
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">
                the largest figma UI kit.
              </span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-gray-300">
                            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                        <div className="items-center  justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"/>
                <div
                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  text-xs font-medium text-gray-50 backdrop-blur-3xl">
                  <a
                      href="javascript:void(0)"
                      className="inline-flex rounded-full text-center group items-center w-full justify-center   bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent    text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10"
                  >
                    Browse courses
                  </a>
                </div>
              </span>

                        </div>
                    </div>


                </div>


            </section>
        </div>
    );
}
