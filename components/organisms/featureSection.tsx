import React from "react";

export default function FeatureSection() {

    const features = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                </svg>
            ),
            "title": "Indépendance Énergétique",
            "desc": "Produire sa propre électricité grâce aux panneaux photovoltaïques permet d'accroître son indépendance énergétique, de pratiquer l'autoconsommation et de réduire la dépendance aux fournisseurs."
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                </svg>
            ),
            "title": "Contribution à la Transition Énergétique",
            "desc": "Installer des panneaux photovoltaïques contribue à la transition énergétique en utilisant une source d'énergie renouvelable et propre."
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 31.371 31.371"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M24.26,20.34c0,3.42-2.423,6.342-6.845,7.111v3.92h-3.768v-3.648c-2.578-0.117-5.076-0.811-6.537-1.654l1.154-4.5
            c1.615,0.886,3.883,1.693,6.383,1.693c2.191,0,3.691-0.848,3.691-2.385c0-1.461-1.23-2.389-4.077-3.348
            c-4.112-1.385-6.921-3.306-6.921-7.033c0-3.386,2.385-6.035,6.499-6.845V0h3.767v3.383c2.576,0.115,4.309,0.652,5.576,1.268
            l-1.115,4.348C21.07,8.575,19.3,7.688,16.531,7.688c-2.5,0-3.307,1.076-3.307,2.154c0,1.268,1.346,2.074,4.613,3.307
            C22.416,14.762,24.26,16.877,24.26,20.34z"
                    />
                </svg>
            ),
            "title": "Potentiel de Revenus Complémentaires",
            "desc": "L'excédent d'électricité produit peut être vendu au réseau, générant des revenus complémentaires et augmentant la rentabilité de l'installation."
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                </svg>
            ),
            "title": "Valorisation du Patrimoine Immobilier",
            "desc": "Les maisons équipées de panneaux photovoltaïques voient souvent leur valeur augmenter, facilitant la vente ou la location du bien."
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22,4H2A1,1,0,0,0,1,5V19a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V5A1,1,0,0,0,22,4ZM21,16.184A2.987,2.987,0,0,0,19.184,18H4.816A2.987,2.987,0,0,0,3,16.184V7.816A2.987,2.987,0,0,0,4.816,6H19.184A2.987,2.987,0,0,0,21,7.816ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14ZM7,12a1,1,0,0,1-1,1H5a1,1,0,0,1,0-2H6A1,1,0,0,1,7,12Zm13,0a1,1,0,0,1-1,1H18a1,1,0,0,1,0-2h1A1,1,0,0,1,20,12Z"
                    />
                </svg>
            ),
            "title": "Rentabilité sur le Long Terme",
            "desc": "Bien que coûteux au départ, les panneaux photovoltaïques sont rentables à long terme grâce aux économies d'énergie et aux aides financières."
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                </svg>
            ),
            "title": "Réduction de la Facture d'Électricité",
            "desc": "Installer des panneaux photovoltaïques permet de produire sa propre électricité, réduisant ainsi la dépendance au réseau et les coûts associés."
        },
    ];

    const FAQ = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                </svg>
            ),
            "title": "Adaptabilité et Scalabilité",
            "desc": "Les systèmes photovoltaïques peuvent être adaptés aux besoins énergétiques spécifiques et agrandis en fonction des besoins futurs."
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                    />
                </svg>
            ),
            "title": "Facilité d'Entretien",
            "desc": "Les panneaux photovoltaïques nécessitent peu d'entretien, avec un simple nettoyage annuel et des contrôles occasionnels."
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                </svg>
            ),
            "title": "Aides et Subventions Disponibles",
            "desc": "En 2024, plusieurs aides et subventions sont disponibles pour les installations photovoltaïques, réduisant considérablement le coût initial."
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                </svg>
            ),
            "title": "Technologie Fiable et Durable",
            "desc": "Les panneaux photovoltaïques sont une technologie fiable avec une durée de vie de 25 à 30 ans, garantissant une production d'énergie stable."
        },
    ]


    return (
        <section className=" py-14 relative">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-400 md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10">
                        <h2 className="text-gray-500 mt-4 text-3xl font-normal font-geist tracking-tighter md:text-5xl sm:text-4xl">
                            Un avantage écologique ET économique
                        </h2>
                        <p className="mt-3 font-geist text-gray-500">
                            En passant à l'énergie solaire, vous bénéficiez de nombreux avantages, tant sur le plan écologique que économique
                        </p>
                        <div className="bloc-img flex justify-center">
                            <img className="img-energy" src="edf.png" alt="" />
                            <img className="img-energy" src="engie.png" alt=""/>
                            <img className="img-energy" src="total.png" alt=""/>
                            <img className="transition" src="transition.png" alt=""/>


                        </div>
                        
                    </div>
                    <div
                        className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
                        style={{
                            background:
                                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
                        }}
                    ></div>
                </div>
                <hr className="bg-white/30 h-px w-1/2 mx-auto  mt-5"/>
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <li
                                key={idx}
                                className="bg-transparent transform-gpu dark:[border:1px_solid] border-primary dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  space-y-3 p-4 border rounded-xl"
                            >
                                <div
                                    className="text-orange-600 rounded-full py-2  transform-gpu dark:[border:1px_solid] border-secondary dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-fit">{item.icon}</div>
                                <h4 className="text-lg text-primary font-bold font-geist tracking-tighter">
                                    {item.title}
                                </h4>
                                <p className="text-gray-500">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

/**
 *
 */