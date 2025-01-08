import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";

export default function NotFound() {
	return (
		<>
			<Head>
				<title>404 Pagina niet gevonden - Drukkerij Printvisie</title>
			</Head>
			<PageBanner
				title="Oops! Pagina niet gevonden"
				content="Sorry! De pagina die je zoekt bestaat niet (meer)"
			/>
			<ErrorContent />
		</>
	);
}
