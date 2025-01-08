import Head from "next/head";
import Teams from "../components/Team/Teams";
import CallToAction from "./../components/Common/CallToAction";
import PageBanner from "./../components/Common/PageBanner";

export default function team() {
	return (
		<>
			<Head>
				<title>De Specialisten - Drukkerij Printvisie</title>
			</Head>
			<PageBanner
				title="Ons Team"
				content="Ons team zet zich dagelijks in om hoogwaardige en duurzame drukwerkoplossingen te leveren, met oog voor detail en passie voor het vak."
			/>
			<Teams />
			<CallToAction />
		</>
	);
}
