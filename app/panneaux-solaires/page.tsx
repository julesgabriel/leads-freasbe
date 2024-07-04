"use client"

import React from "react";
import FeatureSection from "@/components/organisms/featureSection";
import Hero from "@/components/organisms/hero";
import Form from "@/components/organisms/form";
import Footer from "@/components/organisms/footer";


export default function Home() {



    const navItems = [
        {name: 'Section 1', link: '/partners'},
        {name: 'Section 2', link: '/customers'},
        {name: 'Section 3', link: '/team'},
    ]

    return (
        <div>
            <Hero/>
            <Form/>
            <FeatureSection/>
            <Footer/>
        </div>
        
    )
    
}



/**
 *
 */