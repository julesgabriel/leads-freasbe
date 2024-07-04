import React from "react";
import RetroGrid from "@/components/ui/magicui/retro-grid";
import Image from 'next/image'

export default function Hero() {
    return (


/*         <div className="relative from-slate-700 to-slate-900">
        <img
            src="./landscape-hero.png"
            className="w-full object-cover md:absolute"
        />
        <div className="w-screen md:absolute"></div>
        <section className="relative max-w-full mx-auto">
            <div className="max-w-screen-xl mx-auto px-4 gap-12 text-gray-600 md:px-8">
            </div>
        </section>
    </div>  */
    <div className="xs:min-h-screen md:h-1/2 object-cover">
    <Image className="hero-overlay img-slide-from-top opacity-90 object-right object-cover w-full h-1/2 min-h-screen md:absolute"
           loading={"eager"} src={"/landscape-hero.png"}
           alt="hero" width={1920} height={1080}/>
        </div>
    );
}
