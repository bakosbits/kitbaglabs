import Layout from "../components/Layout";
import { LegalSections, PageIntro } from "../components/Page";

const sections = [
    { title: "Overview", body: ["This policy explains what information Kitbag Labs collects through kitbaglabs.com and our services, and how we use it. We collect only what we need to respond to you and deliver our services."] },
    { title: "Information you give us", body: ["When you use the contact form we receive your name, email address, phone number, subject, and message. If you become a customer, we also receive the business details and account access needed to deliver the service."] },
    { title: "How we use it", body: ["We use your information to reply to inquiries, provide and improve our services, send billing and service communications, and meet legal obligations. We do not sell your personal information."] },
    { title: "Email and hosting", body: ["Contact form messages are delivered to us by email using Cloudflare. Our site is hosted on Cloudflare, which processes standard request data such as IP address and browser details to serve and secure the site."] },
    { title: "Sharing", body: ["We share information only with service providers who help us operate (for example hosting, email, and payment processing), when required by law, or with your permission."] },
    { title: "Retention", body: ["We keep inquiries and customer records only as long as needed for the purposes above, then delete or anonymize them."] },
    { title: "Your choices", body: ["You can ask to access, correct, or delete the personal information we hold about you by contacting us through the contact page."] },
    { title: "Changes", body: ["We may update this policy; the date above shows the latest revision."] },
];

export default function Privacy() {
    return (
        <Layout>
            <PageIntro id="privacy-title" label="PRIVACY" title={<>Your <span className="text-teal-dark">privacy,</span> respected.</>} lead="What we collect, why we collect it, and what we do with it." />
            <LegalSections updated="October 15, 2026" sections={sections} />
        </Layout>
    );
}
