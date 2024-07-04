import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import React from "react";
import AutoForm, {AutoFormSubmit} from "@/components/ui/auto-form";

export default function Form() {
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
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const [state, setState] = React.useState(false);


    const initialForm = formSchema.parse({})

    console.log(initialForm)

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (

        <div className="w-1/2 py-5 px-12 rounded-md border border-primary mx-auto">
            <div className="mb-4">
                <h2 className="font-bold text-xl text-secondary dark:text-neutral-200">
                    Welcome to Aceternity
                </h2>
                <p className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Login to aceternity if you can because we don&apos;t have a login flow
                    yet
                </p>
            </div>
            <AutoForm
                // Pass the schema to the form
                formSchema={formSchema}
                fieldConfig={{
                    firstName: {
                        inputProps: {
                            placeholder: 'John',
                        }
                    },
                    lastName: {
                        inputProps: {
                            placeholder: 'Doe',
                        }
                    },
                    email: {
                        inputProps: {
                            placeholder: 'email@example.com',
                        }
                    },
                    phone: {
                        inputProps: {
                            placeholder: '0123456789',
                        }
                    },
                    address: {
                        inputProps: {
                            placeholder: '1 rue des fleurs',
                        }
                    },
                    zipCode: {
                        inputProps: {
                            placeholder: '75000',
                        }
                    },
                    area: {
                        inputProps: {
                            placeholder: '70',
                        }
                    },
                    minRoofing: {
                        inputProps: {
                            placeholder: '15',
                        }
                    },
                    professionalStatus: {
                        inputProps: {
                            as: 'select',
                        },
                        selectOptions: [
                            {value: 'CDI', label: 'CDI'},
                            {value: 'Libéral', label: 'Libéral'},
                            {value: 'Retraité', label: 'Retraité'},
                        ]
                    },
                }
                }>
                <AutoFormSubmit className="bg-primary">Souscrire</AutoFormSubmit>
            </AutoForm>
        </div>
    )


}

