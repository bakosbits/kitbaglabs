import Layout from "../components/Layout";
import { LegalSections, PageIntro } from "../components/Page";

const sections = [
    { title: "Agreement", body: ["By accessing kitbaglabs.com or using a Kitbag Labs product or service, you agree to these Terms. If you do not agree, please do not use the site or services."] },
    { title: "Our services", body: ["Kitbag Labs builds software tools and provides services such as Maphoist, our Google Business Profile management service. The scope, deliverables, and monthly fees of a service are those described on its page or agreed with you in writing.", "Some products, such as docinject, bouttabuy, and aitoolpouch, are operated on their own websites and may have their own terms."] },
    { title: "Fees and billing", body: ["Paid services are billed monthly at the price agreed when you sign up. You may cancel at any time; cancellation takes effect at the end of the current billing period and fees already paid are not refunded unless required by law."] },
    { title: "Your account access", body: ["To provide Maphoist we may need manager access to your Google Business Profile. You confirm that you are authorized to grant that access and that the information you give us is accurate. You remain the owner of your profile and its content."] },
    { title: "No guarantee of results", body: ["Local search rankings and customer inquiries depend on many factors outside our control, including Google’s policies and algorithms. We work to improve your visibility but do not guarantee any particular ranking, traffic, or revenue."] },
    { title: "Acceptable use", body: ["You agree not to misuse the site or services, attempt to disrupt them, or use them to break the law or infringe the rights of others."] },
    { title: "Intellectual property", body: ["The Kitbag Labs name, logo, site, and software are owned by Kitbag Labs. Content you supply to us remains yours, and you grant us permission to use it as needed to deliver the service."] },
    { title: "Limitation of liability", body: ["To the fullest extent permitted by law, the site and services are provided “as is,” and Kitbag Labs is not liable for indirect or consequential losses. Our total liability for any claim is limited to the fees you paid us in the three months before the claim arose."] },
    { title: "Changes and contact", body: ["We may update these Terms from time to time; the date above shows the latest revision. Continued use after a change means you accept it. Questions? Reach us through the contact page."] },
];

export default function Terms() {
    return (
        <Layout>
            <PageIntro centered id="terms-title" label="TERMS" title={<>Terms of <span className="text-teal-dark">service.</span></>} lead="The ground rules for using our site and services, in plain language." />
            <LegalSections updated="October 15, 2026" sections={sections} />
        </Layout>
    );
}
