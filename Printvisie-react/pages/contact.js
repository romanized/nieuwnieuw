import Head from "next/head";
import ContactContent from "../components/Contact/ContactContent";
import PageBanner from "./../components/Common/PageBanner";

export default function contact() {
	return (
		<>
			<Head>
				<title>Offerte Aanvragen - Drukkerij Printvisie</title>
			</Head>
			<PageBanner
				title="Offerte Aanvragen"
				content="Vraag een offerte aan en ontdek hoe wij uw duurzame drukwerk kunnen realiseren."
			/>
			<ContactContent />
		</>
	);
}
