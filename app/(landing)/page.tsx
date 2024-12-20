import Hero from "@/components/Hero/Hero";
import DashboardSnippet from "./_components/dashboardSnip";
import { Accordion } from "@/components/ui/accordion";
import AffiliateAccordion from "./_components/accordion";
import Footer from "@/components/global/footer";





export default function Home() {

  return (
    <main className="md:px-10 py-20 flex flex-col gap-36">
    <Hero/>
    <DashboardSnippet/>
    <AffiliateAccordion/>
    <Footer/>
    </main>
  )}