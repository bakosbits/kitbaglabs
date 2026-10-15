import Layout from "../components/Layout";
import { PageIntro } from "../components/Page";
import { Button, Section, SectionMarker, display } from "../components/ui";
import { ArrowUpRight } from "lucide-react";

const principles = [
    { index: "01 / PRACTICAL", title: "Useful beats impressive.", body: "Every product starts with a real, repeated annoyance and has to earn its place in someone's day." },
    { index: "02 / FOCUSED", title: "One job, done well.", body: "We keep tools small and clear. If a feature doesn't help the job, it doesn't ship." },
    { index: "03 / HONEST", title: "AI where it helps.", body: "Automation and agentic AI are ingredients, not the point. We use them when they make a real difference." },
];

export default function About() {
    return (
        <Layout>
            <PageIntro
                id="about-title"
                label="ABOUT"
                title={<>We build for the <span className="text-teal-dark">small things</span> that slow us down.</>}
                lead="Kitbag Labs is an independent venture studio. We research everyday and everyday-business friction, then build hyper-focused products and services to remove it."
            />

            <Section labelledBy="principles-title" className="border-t border-line pt-6 pb-18 md:pb-28 xl:px-16">
                <SectionMarker number="02" label="WHAT WE BELIEVE" />
                <h2 id="principles-title" className={`${display} mt-12 mb-10 text-3xl leading-none tracking-tighter sm:text-4xl md:mt-16 md:mb-16 md:text-5xl`}>A kit of tools, each with a job to do.</h2>
                <div className="grid border-t border-line md:grid-cols-3">
                    {principles.map((item, i) => (
                        <article key={item.index} className={`border-b border-line py-5 md:border-b-0 md:pt-6 md:pr-8 md:pb-0${i > 0 ? " md:border-l md:pl-8" : ""}`}>
                            <span className="text-2xs font-bold tracking-widest text-slate-500">{item.index}</span>
                            <h3 className={`${display} mt-4 mb-2 text-lg leading-tight tracking-tight md:mt-7 md:mb-3 md:text-xl`}>{item.title}</h3>
                            <p className="max-w-sm text-xs leading-relaxed text-slate-500 md:max-w-xs">{item.body}</p>
                        </article>
                    ))}
                </div>
            </Section>

            <Section labelledBy="about-cta-title" className="border-t border-line pt-6 pb-18 md:pb-26 xl:px-16">
                <SectionMarker number="03" label="SAY HELLO" />
                <div className="mt-12 flex flex-col md:mt-16 md:flex-row md:items-end md:justify-between md:gap-8">
                    <h2 id="about-cta-title" className={`${display} text-4xl leading-none tracking-tighter sm:text-5xl md:text-6xl`}>Got a little{" "}<br className="hidden md:inline" />friction of your own?</h2>
                    <Button large className="mt-7 self-start whitespace-nowrap md:mt-0 md:mb-2 md:self-auto" href="/contact">Let’s talk about it <ArrowUpRight size={18} /></Button>
                </div>
            </Section>
        </Layout>
    );
}
