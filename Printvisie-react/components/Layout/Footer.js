import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="footer-wrapper">
			<div className="footer-widgets-wrapper">
				<div className="container">
					<div className="row">
						{/* Custom class for logo column to control the width */}
						<div className="col-xl-2 col-lg-4 col-md-6 col-12"> {/* Custom column class */}
							<div className="single-footer-widget wow fadeInLeft">
								<div className="about-us-widget">
									<Link href="/">
										<a className="footer-logo d-block">
											<img src="img/printvisie-logo.svg" alt="Printvisie" className="custom-logo-size"/>
										</a>
									</Link>
									<div className="contact-info">
										<div className="widget-title">
											<strong>Contact</strong>
										</div>
										<p>010 - 7 410 410</p>
										<p>info@printvisie.nl</p>

										<div className="widget-title">
											<strong>Adres</strong>
										</div>
										<p>Aristotelesstraat 20</p>
										<p>3076BD Rotterdam</p>

										<div className="widget-title">
											<strong>Kvk Rotterdam</strong>
										</div>
										<p>24139784</p>

										<div className="widget-title">
											<strong>IBAN-nummer</strong>
										</div>
										<p>NL75 RABO 0117 1309 58</p>

										<div className="widget-title">
											<strong>BTW-nummer</strong>
										</div>
										<p>NL009621416B01</p>
									</div>
								</div>
							</div>
						</div>
						{/* Services Section */}
						<div className="col-xl-2 col-lg-3 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".2s">
								<div className="widget-title">
									<h5>Services</h5>
								</div>
								<ul>
									<li>
										<Link href="/about">
											<a>Advies en begeleiding</a>
										</Link>
									</li>
									<li>
										<Link href="/contact">
											<a>Online drukwerk</a>
										</Link>
									</li>
									<li>
										<Link href="/#">
											<a>Digitaal drukwerk</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Gepersonaliseerd drukwerk</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Offset drukwerk</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Fulfillment</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						{/* Informatie Section */}
						<div className="col-xl-3 col-lg-3 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".4s">
								<div className="widget-title">
									<h5>Informatie</h5>
								</div>
								<ul>
									<li>
										<Link href="#">
											<a>Offerte aanvragen</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Aanleverinstructies</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Jouw specialisten</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Showcases</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Vacatures</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Contact</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						{/* Groen Section */}
						<div className="col-xl-2 col-lg-3 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".6s">
								<div className="widget-title">
									<h5>Groen</h5>
								</div>
								<ul>
									<li>
										<Link href="#">
											<a>Ecologisch drukadvies</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Printvisie Greenlabel</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>CO2-bespaarmeter</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Groen is frisser</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>PaperWise</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						{/* Printvisie Section */}
						<div className="col-xl-2 col-lg-3 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".8s">
								<div className="widget-title">
									<h5>Printvisie</h5>
								</div>
								<ul>
									<li>
										<Link href="#">
											<a>Shine, smile, enjoy</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Nooit gedoe-garantie</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a target="_blank">WeTransfer</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a target="_blank">Webshop</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-wrapper">
				<div className="container">
					<div className="footer-bottom-content d-md-flex justify-content-between">
						<div className="site-copyright wow fadeInUp" data-wow-delay=".2" data-wow-duration="1s">
							<p>
								&copy; 1980-2024{" "}
								<Link href="#">
									<a>Drukkerij Printvisie.</a>
								</Link>{" "}
								Alle rechten voorbehouden. 
							</p>
						</div>
						<div
							className="social-links mt-4 mt-md-0 wow fadeInUp"
							data-wow-delay=".3"
							data-wow-duration="1s"
						>
							<Link href="https://www.facebook.com/DrukkerijPrintvisie/">
								<a target="_blank">
									<FaFacebookF />
								</a>
							</Link>
							<Link href="https://x.com/Printvisie">
								<a target="_blank">
									<FaTwitter />
								</a>
							</Link>
							<Link href="https://www.instagram.com/printvisie/">
								<a target="_blank">
									<FaInstagram />
								</a>
							</Link>
							<Link href="https://www.linkedin.com/company/drukkerij-printvisie/">
								<a target="_blank">
									<FaLinkedinIn />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
