import Link from "next/link";

export default function ErrorContent() {
	return (
		<section className="error-404-wrapper section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3 text-center">
						<div className="error-content">
							<img src="/img/printvisie-404.png" alt="404 Image" />
							<h1 className="mt-5 mb-3">Oops! Pagina niet gevonden.</h1>
							<p>
							Het lijkt erop dat de pagina die je zocht niet gevonden kon worden.
							 Probeer naar de Homepagina te gaan met de knop hieronder.
							</p>
							<Link href="/">
								<a className="theme-btn mt-50">Terug Naar De Homepagina</a>
							</Link>
						</div>
						<div className="leaf">
							<img src="/img/leaf.png" alt="" />
						</div>
						<div className="leaf-copy">
							<img src="/img/leaf.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
