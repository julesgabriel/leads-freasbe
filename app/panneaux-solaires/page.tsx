import React from "react";
import FeatureSection from "@/components/organisms/featureSection";
import Hero from "@/components/organisms/hero";
import Footer from "@/components/organisms/footer";
import Faq from "@/components/organisms/faq";
import logo from '../../public/logo.png';
import Image from "next/image";
import Link from "next/link";
import {Metadata} from "next";


export const metadata: Metadata = {
    // create a good meta title
    title: "Installation photovoltaïque - Un domicile plus vert et économique",
    description: "Générez des revenus grâce à votre énergie et favoriser la transition energétique. Nous et nos partenaires vous accompagnons dans vos projets d'installation de panneaux solaires.",
};

export default function SolarPanel() {

    return (
        <div>
            <nav className="w-full shadow-md">
                <ul className="flex justify-center py-1">
                    <li>
                        <Link href="/">
                            <Image src={logo} alt='freasbe logo' width="50" height="50"/>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Hero/>
            <FeatureSection/>
            <Faq/>
            <Footer/>
        </div>

    )

}