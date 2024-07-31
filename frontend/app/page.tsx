import LogosSection from "./components/LogosSection";
import AffichesSection from "./components/PostersSection";
import TopSection from "./components/TopSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <TopSection />
            <AffichesSection />
            <LogosSection />
        </main>
    );
}
