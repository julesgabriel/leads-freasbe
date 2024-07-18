import {Separator} from "@radix-ui/react-select";
import React from "react";
import Image from "next/image";

export default function Faq() {
    const faqsList = [
        {
            i: "/conseil.png",
            q: "Comment les systèmes photovoltaïques peuvent-ils s'adapter et évoluer avec les besoins énergétiques ?",
            a: "Les systèmes photovoltaïques peuvent être adaptés aux besoins énergétiques spécifiques et agrandis en fonction des besoins futurs. Que ce soit pour une petite installation résidentielle ou un grand parc solaire commercial, les panneaux solaires peuvent être ajoutés progressivement pour augmenter la capacité de production. Cette flexibilité permet de commencer avec une installation de taille modeste et d'ajouter des panneaux supplémentaires au fil du temps, en fonction de l'évolution des besoins en énergie et des budgets disponibles."
        },
        {
            i: "/financial.png",
            q: "Quel est le niveau d'entretien requis pour les panneaux photovoltaïques ?",
            a: "Les panneaux photovoltaïques nécessitent peu d'entretien, avec un simple nettoyage annuel et des contrôles occasionnels. Contrairement à d'autres systèmes énergétiques, les panneaux solaires n'ont pas de pièces mobiles qui s'usent. Un nettoyage annuel pour enlever la poussière et les débris ainsi que des vérifications périodiques pour s'assurer que tout fonctionne correctement sont généralement suffisants. Cela minimise les coûts et les efforts d'entretien tout en garantissant une performance optimale sur le long terme."
        },
        {
            i: "/contract.png",
            q: "Quelles aides et subventions sont disponibles pour les installations photovoltaïques en 2024 ?",
            a: "En 2024, plusieurs aides et subventions sont disponibles pour les installations photovoltaïques, réduisant considérablement le coût initial. Ces incitations financières peuvent provenir de sources gouvernementales, locales ou même d'entreprises privées. Des subventions directes, des prêts à taux réduit, aide a l'auto consommation, taux de tva reduit et des programmes de rachat de l'énergie excédentaire produite. Ces aides rendent l'installation de panneaux solaires plus abordable et accélèrent le retour sur investissement."
        },
        {
            i: "/phone.png",
            q: "Quelle est la durée de vie et la fiabilité des panneaux photovoltaïques ?",
            a: "Les panneaux photovoltaïques sont une technologie fiable avec une durée de vie de 25 à 30 ans, garantissant une production d'énergie stable. Fabriqués à partir de matériaux robustes et résistants aux intempéries, ces panneaux continuent de fonctionner efficacement pendant des décennies. De plus, la plupart des fabricants offrent des garanties de performance à long terme, assurant que les panneaux produiront un certain pourcentage de leur capacité nominale même après 25 ans. Cette longévité et fiabilité font des panneaux solaires un investissement solide et durable pour la production d'énergie verte."
        },
    ];


    return (
        <section className="relative">
            <div className="py-14 relative max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
                <div className="flex-1 relative">
                    <div className="max-w-lg">
                        <h3 className="font-semibold text-primary">
                            Questions fréquentes
                        </h3>
                        <p className="mt-3 text-gray-500 text-3xl font-extrabold sm:text-4xl">
                            Voici tout ce que vous devez savoir
                        </p>
                        <Separator className="h-[1px] my-5 bg-black/10"/>
                        <p className="text-gray-500 text-lg ">Vous ne trouvez pas la réponse à votre question ?</p>
                        <button type="submit"
                                className="mt-4 p-2 w-1/2 bg-primary text-white rounded-md hover:opacity-95">
                            <a href="#myForm">Je souhaite être contacté</a>
                        </button>
                    </div>
                </div>
                <div className="flex-1 mt-12 md:mt-0">
                    <ul className="space-y-4 divide-y">
                        {faqsList.map((item, idx) => (
                            <li className="py-5" key={idx}>
                                <summary
                                    className="text-lg flex items-center justify-between font-semibold text-primary">
                                    <div>
                                        <Image className="mb-3" src={item.i} alt={"image " + item.q} width={600}
                                               height={600}/>
                                        {item.q}
                                    </div>
                                </summary>
                                <p
                                    className="mt-3 text-gray-500 leading-relaxed"
                                >
                                    {item.a}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}