"use client"

import React, {useEffect, useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import AutoForm, {AutoFormSubmit} from "@/components/ui/auto-form";
import {ChevronRight} from "lucide-react";
import {FloatingNav} from "@/components/ui/floating-navbar";

const formSchema = z.object({
    lastName: z.string().optional().describe('Nom de famille'),
    firstName: z.string().optional().describe('Prénom'),
    email: z.string().email().min(5).optional().describe('Email'),
    phone: z.string().length(10).optional().describe('Téléphone'),
    address: z.string().optional().describe('Adresse'),
    zipCode: z.string().length(5).optional().describe('Code postal'),
    electricWarm: z.enum(['Électrique', 'Gaz']).default('Électrique').optional().describe('Type de chauffage'),
    residenceType: z.enum(['Principale', 'Secondaire']).default('Principale').optional().describe('Type de résidence'),
    area: z.number().min(70).optional().describe('Surface habitable'),
    minRoofing: z.number().min(15).optional().describe('Surface de toiture'),
    professionalStatus: z.enum(['CDI', 'Libéral', 'Retraité']).default('CDI').describe('Statut professionnel'),
})
export default function Home() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const [state, setState] = React.useState(false);

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Partners", path: "javascript:void(0)" },
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Team", path: "javascript:void(0)" },
    ];

    const initialForm = formSchema.parse({})

    console.log(initialForm)

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];

    return (
        <div className="h-[200vh]">
            <FloatingNav navItems={navItems}/>
        </div>
    )
}

/**
 * <div className="w-2/3">
 *             <AutoForm
 *                 // Pass the schema to the form
 *                 formSchema={formSchema}
 *                 fieldConfig={{
 *                     firstName: {
 *                         inputProps: {
 *                             placeholder: 'John',
 *                         }
 *                     },
 *                     lastName: {
 *                         inputProps: {
 *                             placeholder: 'Doe',
 *                         }
 *                     },
 *                     email: {
 *                         inputProps: {
 *                             placeholder: 'email@example.com',
 *                         }
 *                     },
 *                     phone: {
 *                         inputProps: {
 *                             placeholder: '0123456789',
 *                         }
 *                     },
 *                     address: {
 *                         inputProps: {
 *                             placeholder: '1 rue des fleurs',
 *                         }
 *                     },
 *                     zipCode: {
 *                         inputProps: {
 *                             placeholder: '75000',
 *                         }
 *                     },
 *                     area: {
 *                         inputProps: {
 *                             placeholder: '70',
 *                         }
 *                     },
 *                     minRoofing: {
 *                         inputProps: {
 *                             placeholder: '15',
 *                         }
 *                     },
 *                     professionalStatus: {
 *                         inputProps: {
 *                             as: 'select',
 *                         },
 *                         selectOptions: [
 *                             {value: 'CDI', label: 'CDI'},
 *                             {value: 'Libéral', label: 'Libéral'},
 *                             {value: 'Retraité', label: 'Retraité'},
 *                         ]
 *                     },
 *                 }
 *                 }>
 *                 <AutoFormSubmit className="bg-primary">Souscrire</AutoFormSubmit>
 *             </AutoForm>
 */