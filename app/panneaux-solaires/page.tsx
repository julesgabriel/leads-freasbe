"use client"

import React from "react";
import FeatureSection from "@/components/organisms/featureSection";
import Hero from "@/components/organisms/hero";
import Form from "@/components/organisms/form";


export default function Home() {



    const navItems = [
        {name: 'Section 1', link: '/partners'},
        {name: 'Section 2', link: '/customers'},
        {name: 'Section 3', link: '/team'},
    ]

    return (
        <div className="min-h-[200vh] bg-slate-900">
            <Hero/>

            <Form/>
            <FeatureSection/>
        </div>
    )
}

/**
 *
 */