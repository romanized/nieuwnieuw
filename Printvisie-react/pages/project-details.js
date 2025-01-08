import Head from "next/head";
import ProjectAbout from "../components/ProjectDetails/ProjectAbout";
import RecentProject from "../components/ProjectDetails/RecentProject";
import PageBanner from "./../components/Common/PageBanner";

export default function ProjectDetails() {
	return (
		<>
			<Head>
				<title>Over projecten - Drukkerij Printvisie</title>
			</Head>
			<PageBanner
				title="Recente projecten"
				content="Bekijk een selectie van onze meest recente projecten. We zijn trots op het werk dat we hebben geleverd voor onze klanten en laten graag zien hoe we kwaliteit en duurzaamheid combineren in elk drukwerkproject."
			/>
			<ProjectAbout />
			<RecentProject />
		</>
	);
}
