import dynamic from "next/dynamic";
import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";

const IsotopeSection = dynamic(() => import("../components/Isotope/IsotopeSection"), {
  ssr: false,
});

export default function projects() {
  return (
    <>
      <Head>
        <title>Recente Projecten - Drukkerij Printvisie</title>
      </Head>
      
      <PageBanner
        title="Recente projecten"
        content="Bekijk een selectie van onze meest recente projecten. We zijn trots op het werk dat we hebben geleverd voor onze klanten en laten graag zien hoe we kwaliteit en duurzaamheid combineren in elk drukwerkproject."
      />
      
      <IsotopeSection />
    </>
  );
}
