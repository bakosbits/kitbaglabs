import { ArrowUpRight, Check } from "lucide-react";
import Layout from "../components/Layout";
import { PageIntro } from "../components/Page";
import { Button, Section, display } from "../components/ui";

const included = [
    { title: "Profile optimization", body: "We complete and tune every field of your Google Business Profile so it accurately represents what you do." },
    { title: "Category optimization", body: "The right primary and secondary categories decide which searches you show up for. We choose and maintain them." },
    { title: "Weekly posts", body: "Fresh, relevant posts every week keep your profile active and give prospects a reason to call." },
    { title: "Review responses", body: "Every review gets a timely, professional reply, good or bad, in your voice." },
    { title: "Job photo management", body: "We organize and publish photos of your completed work so prospects can see the quality for themselves." },
    { title: "Monthly reporting", body: "A clear monthly report on views, searches, calls, and direction requests, so you can see what the profile is doing." },
];

const plans = [
    {
        name: "Maphoist",
        price: "$350",
        note: "Everything you need to get found.",
        features: included.map((item) => item.title),
    },
    {
        name: "Maphoist + Reviews",
        price: "$450",
        note: "Adds a customer review generation campaign.",
        features: [...included.map((item) => item.title), "Customer review generation campaign"],
        featured: true,
    },
];

export default function Maphoist() {
    return (
        <Layout>
            <PageIntro
                id="maphoist-title"
                label="MAPHOIST"
                title={<>Be found by more <span className="text-teal-dark">prospects.</span></>}
                lead="Maphoist is a done-for-you Google Business Profile management service. We handle the upkeep that moves local search results, so the customers already looking for you can find you."
            >
                <div className="mt-8 flex md:mt-10">
                    <Button href="/contact?subject=Tell%20me%20more%20about%20%22maphoist%22">Get started <ArrowUpRight size={17} /></Button>
                </div>
            </PageIntro>

            <Section labelledBy="included-title" className="border-t border-line pt-6 pb-18 md:pb-28 xl:px-16">
                <h2 id="included-title" className={`${display} mt-12 mb-10 text-3xl leading-none tracking-tighter sm:text-4xl md:mt-16 md:mb-16 md:text-5xl`}>Six things, handled every month.</h2>
                <div className="grid border-t border-line md:grid-cols-3">
                    {included.map((item, i) => (
                        <article key={item.title} className="border-b border-line py-5 md:py-6 md:pr-8 md:[&:not(:nth-child(3n+1))]:border-l md:[&:not(:nth-child(3n+1))]:pl-8">
                            <span className="text-2xs font-bold tracking-widest text-slate-500">{String(i + 1).padStart(2, "0")}</span>
                            <h3 className={`${display} mt-4 mb-2 text-lg leading-tight tracking-tight md:mt-5 md:text-xl`}>{item.title}</h3>
                            <p className="max-w-sm text-xs leading-relaxed text-slate-500">{item.body}</p>
                        </article>
                    ))}
                </div>
            </Section>

            <Section id="pricing" labelledBy="pricing-title" outer="bg-ink text-white" className="pt-16 pb-16 md:pt-24 md:pb-24 xl:px-16">
                <h2 id="pricing-title" className={`${display} mt-7 mb-10 text-4xl leading-none tracking-tighter sm:text-5xl md:mt-9 md:mb-14 md:text-6xl`}>
                    Simple monthly pricing. <span className="text-slate-300">No surprises.</span>
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                    {plans.map((plan) => (
                        <article key={plan.name} className={`flex flex-col border p-6 md:p-8 ${plan.featured ? "border-teal bg-white/5" : "border-white/20"}`}>
                            <span className="text-2xs font-bold tracking-widest text-slate-300 uppercase">{plan.name}</span>
                            <p className={`${display} mt-4 text-5xl leading-none tracking-tighter`}>{plan.price}<span className="text-sm font-medium tracking-normal text-slate-300"> / month</span></p>
                            <p className="mt-3 text-xs text-slate-400">{plan.note}</p>
                            <ul className="mt-6 mb-8 grid gap-3 text-xs text-slate-200 md:text-sm">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-teal" size={16} />{feature}</li>
                                ))}
                            </ul>
                            <a className="mt-auto inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-white px-4 text-xs font-bold tracking-wide text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-teal md:px-5" href={`/contact?subject=${encodeURIComponent(`Sign me up for ${plan.name}`)}`}>
                                Choose {plan.name} <ArrowUpRight size={17} />
                            </a>
                        </article>
                    ))}
                </div>
            </Section>
            <Section labelledBy="maphoist-cta-title" className="pt-16 pb-18 md:pt-24 md:pb-26 xl:px-16">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between md:gap-8">
                    <div>
                        <h2 id="maphoist-cta-title" className={`${display} text-4xl leading-none tracking-tighter sm:text-5xl md:text-6xl`}>Ready to be found?</h2>
                        <p className="mt-5 max-w-xs text-xs leading-relaxed text-slate-500 md:max-w-none md:text-sm">Tell us about your business and we’ll take it from there.</p>
                    </div>
                    <Button large className="mt-7 self-start whitespace-nowrap md:mt-0 md:mb-2 md:self-auto" href="/contact?subject=Tell%20me%20more%20about%20%22maphoist%22">Get started <ArrowUpRight size={18} /></Button>
                </div>
            </Section>
        </Layout>
    );
}
