import ProjectGallary from "../Slider/ProjectGallary";

export default function ProjectAbout({ project }) {
  return (
    <section className="project-details-wrapper section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-12 ">
            <ProjectGallary images={[`/img/portfolio/${project.image}`]} />
          </div>
          <div className="col-xl-5 col-12 mt-5 pe-xl-0 mt-xl-0">
            <div className="project-details-content">
              <h3>{project.title}</h3>
              <p className="mt-3">{project.description}</p>
			  <p className="mt-3">{project.secondDescription}</p>
              <ul>
                <h3>Informatie</h3>
                <li>
                  <b>Product:</b> <span>{project.product}</span>
                </li>
                <li>
                  <b>Papier:</b> <span>{project.papier}</span>
                </li>
                <li>
                  <b>Druk:</b> <span>{project.druk}</span>
                </li>
                <li>
                  <b>Speciaal:</b> <span>{project.special}</span>
                </li>
              </ul>

              {project.video && (
                <div className="video-container mt-5">
                  <h3>Bekijk De Video</h3>
                  <iframe
                    width="100%"
                    height="400"
                    src={project.video}
                    title="Ahoy 6-daagse Daily Bulletin"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
