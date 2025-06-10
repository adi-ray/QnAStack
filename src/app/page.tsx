import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributors from "./components/TopContributors";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b">
      <section className="w-full py-12 md:py-24">
        <HeroSection />
      </section>
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Community</h2>
        <h3 className="text-xl font-semibold mb-4">Latest Questions</h3>
        <LatestQuestions />
        <h3 className="text-xl font-semibold mb-4">Top Contributors</h3>
        <TopContributors />
      </section>
    </main>
  );
}
