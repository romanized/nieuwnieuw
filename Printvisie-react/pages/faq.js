import Head from "next/head";
import CallToAction from "../components/Common/CallToAction";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "./../components/Faq/FaqContent";

export default function faq() {
	return (
		<>
			<Head>
				<title>Aanleverinstructies - Drukkerij Printvisie</title>
			</Head>
			<PageBanner
				title="Aanleverinstructies"
				content="Bekijk hier de instructies voor het correct aanleveren van uw bestanden, zodat we uw drukwerk snel en nauwkeurig kunnen verwerken."
			/>
			<FaqContent />
			<CallToAction />
		</>
	);
}
