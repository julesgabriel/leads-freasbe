import React, {useState} from "react";
import {z, ZodIssue} from "zod";


type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    zipCode: string;
    AmountOfEnergyConsumption: string;
    modeOfHeating: string;
    professionalStatus: string;
    owner: string;
}
const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        zipCode: '',
        AmountOfEnergyConsumption: '',
        modeOfHeating: '',
        professionalStatus: '',
        owner: '',
    });

    const [error, setError] = useState<ZodIssue[]>(null);

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const formDataSchema = z.object({
        firstName: z.string().min(1, "Le prénom n'est pas assez long"),
        lastName: z.string().min(1, "Le nom n'est pas assez long"),
        email: z.string().email("L'email n'est pas valide"),
        phone: z.string().min(1, "Le numéro de téléphone est trop court"),
        address: z.string().min(1, "L'adresse est trop courte"),
        zipCode: z.string().min(1, "Le code postal est trop court"),
        AmountOfEnergyConsumption: z.string().min(1, "La consommation est incorrecte"),
        modeOfHeating: z.string().min(1, "Le mode de chauffage est incorrect"),
        professionalStatus: z.string().min(1, "Le statut professionnel est incorrect"),
        owner: z.string().min(1, "Le statut de propriétaire est incorrect"),
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const validation = formDataSchema.safeParse(formData);
        if (validation.success) {
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
        } else {
            setError(validation.error.errors)
            setTimeout(() => {
                setError(null)
            }, 3000)
            console.error("Validation failed", validation.error.errors);
        }
    }


    return (
        <form id="myForm" onSubmit={handleSubmit}
              className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md mt-5 md:top-5 z-10">

            <div className="absolute top-3 right-3">
                {
                    error && error.map((err, idx) => (
                        <div
                            key={idx}
                            className="animate-toast max-w-xs bg-red-500 text-sm text-white rounded-md shadow-lg dark:bg-gray-700 mb-3 ml-3"
                            role="alert">
                            <div className="flex p-4">
                                {err.message}
                                <div className="ml-auto">
                                    <button type="button"
                                            className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-gray-500 transition-all text-sm dark:focus:ring-offset-gray-700 dark:focus:ring-gray-500">
                                        <span className="sr-only">Close</span>
                                        <svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                fill="currentColor"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
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
                    />
                </div>
                <div className="mb-4 col-span-1 md:col-span-2">
                    <label className="block text-gray-700" htmlFor="owner"> </label>
                    <select
                        id="owner"
                        name="owner"
                        value={formData.owner}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md appearance-none bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="">Etes vous propriétaire</option>
                        <option value="Oui"> Oui</option>
                        <option value="Non">Non</option>
                    </select>
                </div>
                <div className="mb-4 col-span-1 md:col-span-2">
                    <label className="block text-gray-700" htmlFor="modeOfHeating"> </label>
                    <select
                        id="modeOfHeating"
                        name="modeOfHeating"
                        value={formData.modeOfHeating}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md appearance-none bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="">Sélectionnez un mode de chauffage</option>
                        <option value="Gaz">Gaz</option>
                        <option value="Eletrique">Electrique</option>
                        <option value="Fioul">Fioul</option>
                    </select>
                </div>
                <div className="mb-4 col-span-1 md:col-span-2">
                    <label className="block text-gray-700" htmlFor="AmountOfEnergyConsumption"> </label>
                    <select
                        id="AmountOfEnergyConsumption"
                        name="AmountOfEnergyConsumption"
                        value={formData.AmountOfEnergyConsumption}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md appearance-none bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="">Sélectionnez votre montant de consomation energetique mensuel</option>
                        <option value="100"> entre 100€ et 200€</option>
                        <option value="200">entre 200€ et 300€</option>
                        <option value="300">400€ et plus</option>
                    </select>
                </div>
                <div className="mb-4 col-span-1 md:col-span-2">
                    <label className="block text-gray-700" htmlFor="professionalStatus"> </label>
                    <select
                        id="professionalStatus"
                        name="professionalStatus"
                        value={formData.professionalStatus}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md appearance-none bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="">Sélectionnez un statut</option>
                        <option value="CDI">CDI</option>
                        <option value="Libéral">Libéral</option>
                        <option value="Retraité">Retraité</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="mt-4 p-2 w-full bg-primary text-white rounded-md hover:bg-blue-600">
                Envoyer
            </button>
        </form>
    );
};

export default Form;
        
        