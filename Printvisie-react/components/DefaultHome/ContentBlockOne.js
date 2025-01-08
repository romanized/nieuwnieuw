export default function ContentBlockOne() {
	return (
		<section className="content-block section-padding section-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-5 pe-lg-0 col-lg-5 col-12">
						<div className="block-img wow fadeInLeft" data-wow-duration="1.1s">
							<img src="img/teamwork.png" alt="" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-7 offset-xl-1 col-12 ps-lg-5 pe-xl-5">
						<div className="block-contents ms-xl-3 mt-5 mt-lg-0">
							<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
								<h3>Maak kennis met</h3>
								<h2>Jouw specialisten</h2>
							</div>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
							Ons team van specialisten staat klaar om uw ideeën om te zetten in hoogwaardig drukwerk.
							</p>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
							Ontmoet uw experts die elk detail tot in de puntjes verzorgen en ervoor zorgen dat uw project perfect wordt uitgevoerd
							</p>
							<a
								href="/team"
								className="theme-btn mt-30 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".6s"
							>
								Het Team
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
