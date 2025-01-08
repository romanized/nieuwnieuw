import { useRouter } from "next/router";
import { projectsData } from "../../components/Isotope/projectsData";
import ProjectAbout from '../../components/ProjectDetails/ProjectAbout';
import PageBanner from "../../components/Common/PageBanner";
import Head from "next/head"; 

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const project = projectsData.find((p) => p.id === parseInt(id));


  if (!project) {
    return <p>Project niet gevonden.</p>;
  }

  return (
    <>
      <Head>
        <title>{project.title} - Drukkerij Printvisie</title>
      </Head>

      <PageBanner
  title={project.title}
  content="Bekijk dit project in detail. We zijn trots op het werk dat we hebben geleverd en laten graag zien hoe we kwaliteit en duurzaamheid combineren in elk drukwerkproject."
  breadcrumb={project.title}
/>


      <ProjectAbout project={project} />
    </>
  );
}
