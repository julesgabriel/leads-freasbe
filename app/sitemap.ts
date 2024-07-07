import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://leads.freasbe.fr/panneaux-solaires',
            lastModified: new Date('Sun Jul 07 2024 17:32:24 GMT+0200 (heure d’été d’Europe centrale)'),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}