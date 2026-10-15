import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Maphoist from "./pages/Maphoist";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const routes: Record<string, () => React.ReactElement> = {
    "/about": About,
    "/contact": Contact,
    "/maphoist": Maphoist,
    "/privacy": Privacy,
    "/terms": Terms,
};

export default function App() {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    const Page = routes[path];
    if (Page) return <Page />;

    return (
        <Layout home>
            <Home />
        </Layout>
    );
}
