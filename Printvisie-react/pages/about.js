import Head from "next/head";
import ContentOne from "../components/AboutPage/ContentOne";
import CallToAction from "../components/Common/CallToAction";
import PageBanner from "../components/Common/PageBanner";
import FeaturesThree from "../components/Features/FeaturesThree";
import TeamTwo from "../components/Team/TeamTwo";
import Testimonial from "../components/Testimonial/Testimonial";
import ContentTwo from "./../components/AboutPage/ContentTwo";

export default function about() {
	return (
		<>
			<Head>
				<title>Printvisie Greenlabel - Drukkerij Printvisie</title>
			</Head>
			<PageBanner
				title="Printvisie Greenlabel"
				content="Waarom kiezen voor groen drukwerk goed is voor mens en milieu"
			/>
			<FeaturesThree />
			<ContentTwo />
			<Testimonial />
			<TeamTwo />
			<CallToAction />
		</>
	);
}
