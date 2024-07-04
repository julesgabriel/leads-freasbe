export type FeatureCardProps = {
    icon: string;
    title: string;
    desc: string;
}

export function FeatureCard(
    {
        icon,
        title,
        desc,
    }: FeatureCardProps
) {
    return (
        <li
            className="bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  space-y-3 p-4 border border-slate-200 rounded-xl"
        >
            <div
                className="text-purple-600 rounded-full p-4 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-fit">
                {icon}
            </div>
            <h4 className="text-lg text-primary font-bold font-geist tracking-tighter">
                {title}
            </h4>
            <p className="text-slate-700">{desc}</p>
        </li>
    )
}