import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import React, {useState} from "react";
import AutoForm, {AutoFormSubmit} from "@/components/ui/auto-form";

/* export default function Form() {
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
    } */


const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        zipCode: '',
        area: '',
        minRoofing: '',
        professionalStatus: '',
    });

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (!process.env.NEXT_PUBLIC_MAKE_LEAD_WEBHOOK_URI) {
                console.error(new Error("NEXT_PUBLIC_MAKE_LEAD_WEBHOOK_URI environment variable is not set"))
            }
            const url: string= process.env.NEXT_PUBLIC_MAKE_LEAD_WEBHOOK_URI!;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form.');
        }
    }


    return (
        <form id="myForm" onSubmit={handleSubmit}
              className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md relative mt-5 md:top-5 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="firstName">Nom</label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="lastName">Prénom</label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="phone">Numéro de téléphone</label>
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="address">Adresse</label>
                    <input
                        id="address"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="zipCode">Code postal</label>
                    <input
                        id="zipCode"
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="area">Surface habitable en m2</label>
                    <input
                        id="area"
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="minRoofing">Surface de toiture en m2</label>
                    <input
                        id="minRoofing"
                        type="text"
                        name="minRoofing"
                        value={formData.minRoofing}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="mb-4 col-span-1 md:col-span-2">
                    <label className="block text-gray-700" htmlFor="professionalStatus"> </label>
                    <select
                        id="professionalStatus"
                        name="professionalStatus"
                        value={formData.professionalStatus}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md appearance-none bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    >
                        <option value="">Sélectionnez un statut</option>
                        <option value="CDI">CDI</option>
                        <option value="Libéral">Libéral</option>
                        <option value="Retraité">Retraité</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="mt-4 p-2 w-full bg-secondary text-white rounded-md hover:bg-green-600">
                Envoyer
            </button>
        </form>
    );
};

export default Form;
        
        