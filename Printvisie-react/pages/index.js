import Head from "next/head";
import ContentBlockOne from "../components/DefaultHome/ContentBlockOne";
import Hero from "../components/Hero/Hero";
import PopularCryptoCurrencies from "../components/DefaultHome/PopularCryptoCurrencies";
import FeaturesOne from "../components/Features/FeaturesOne";
import CallToAction from "../components/Common/CallToAction";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
	return (
		<>
			<Head>
				<title>Drukkerij Printvisie | De groenste drukkerij van Rotterdam</title>
			</Head>
			<Hero />
			<FeaturesOne />
			<PopularCryptoCurrencies />
			<ContentBlockOne />
			<Testimonial />
			<CallToAction />
		</>
	);
}
