import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
export default function Testimonial() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
	};
	return (
		<section className="testimonial-wrapper section-padding fix">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInDown" data-wow-duration="1.2s">
							<h3>Referenties</h3>
							<h2>Wij werken voor</h2>
						</div>
					</div>
				</div>
				<div className="col-12 col-xl-12">
					<div className="testimonial-carousel-active">
						<Slider {...settings}>
							<div className="single-testimoinal-item">
								<div className="client-info">
								<div
									className="client-img bg-cover"
									style={{
										backgroundImage: "url(/img/testimonial/philips.svg)",
										width: "70px",
										height: "70px",
										backgroundSize: "contain",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",

									}}
									></div>
									<div className="client-name">
										<h6>Philips</h6>
										<span>Innovatie, Elektronica</span>
									</div>
								</div>
								<div className="feedback">
									“Drukwerk voor evenementen, en dan ook nog eens met innovatie als hoofdthema. Het complete drukwerkpakket voor dit jaarlijkse evenement komt uit onze drukkerij in Rotterdam.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
									className="client-img bg-cover"
									style={{
										backgroundImage: "url(/img/testimonial/porsche.svg)",
										width: "70px",
										height: "70px",
										backgroundSize: "contain",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",

									}}
									></div>
									<div className="client-name">
										<h6>Porsche</h6>
										<span>Luxe, Sportwagens</span>
									</div>
								</div>
								<div className="feedback">
									“Binnenkort ook helemaal elektrisch. Daar zijn we als groene drukkerij blij mee! Natuurlijk ook met het feit dat Printvisie het drukwerk voor dit mooie merk mag verzorgen.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
									className="client-img bg-cover"
									style={{
										backgroundImage: "url(/img/testimonial/dudok.svg)",
										width: "70px",
										height: "70px",
										backgroundSize: "contain",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",

									}}
									></div>
									<div className="client-name">
										<h6>Dudok</h6>
										<span>Architectuur, Monumentaal</span>
									</div>
								</div>
								<div className="feedback">
									“Een appeltaartje van Dudok, wie kent het niet. Maar ook voor een lunch of diner kan je bij Dudok terecht. Voor alle vestigingen drukt Printvisie de menukaarten.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
									className="client-img bg-cover"
									style={{
										backgroundImage: "url(/img/testimonial/ahoy.svg)",
										width: "70px",
										height: "70px",
										backgroundSize: "contain",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",
									}}
									></div>
									<div className="client-name">
										<h6>Ahoy Rotterdam</h6>
										<span>Evenementen, Concerten</span>
									</div>
								</div>
								<div className="feedback">
									“Rotterdams mooiste bedrijf drukt natuurlijk bij de Rotterdamse drukker. Of het nu om spoed drukwerk gaat of om brochures voor Ahoy’s eigen producties.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
								<div
									className="client-img bg-cover"
									style={{
										backgroundImage: "url(/img/testimonial/pbs.svg)",
										width: "70px",
										height: "70px",
										backgroundSize: "contain",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",

									}}
									></div>
									<div className="client-name">
										<h6>Prinses Beatrix Spierfonds</h6>
										<span>Onderzoek, Fondsenwerving</span>
									</div>
								</div>
								<div className="feedback">
									“Ieder jaar komt de collectant langs voor uw bijdrage. Drukwerk in full colour, PMS kleuren, offset- en digitaal druk, maar vooral de logistiek. Printvisie is la jaren de vaste partner.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/rvko.svg" }}
									></div>
									<div className="client-name">
										<h6>RVKO</h6>
										<span>Basisonderwijs, Katholiek</span>
									</div>
								</div>
								<div className="feedback">
									“De grootste scholengemeenschap in het primaire onderwijs van Nederland met 2200 medewerkers en en 21.000 leerlingen. Daar kan natuurlijk alleen maar duurzaam voor gedrukt worden.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/1.jpg" }}
									></div>
									<div className="client-name">
										<h6>Numatic</h6>
										<span>Schoonmaakapparatuur, Innovatief</span>
									</div>
								</div>
								<div className="feedback">
									“Een van de oudste duurzame klanten van Printvisie. Drukt vanaf het eerste uur op Printvisie Greenlabel papier. Misschien zegt de naam Numatic je niet veel, maar hun stofzuigers Henry en Hetty zijn zeker wel bekend.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/1.jpg" }}
									></div>
									<div className="client-name">
										<h6>Hilton</h6>
										<span>Luxe, Hotels</span>
									</div>
								</div>
								<div className="feedback">
									“Met meerdere vestigingen in Nederland leveren kwaliteitsdrukwerk voor deze luxe hotelketen.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/1.jpg" }}
									></div>
									<div className="client-name">
										<h6>Dyade</h6>
										<span>Onderwijsadvies, Financiën</span>
									</div>
								</div>
								<div className="feedback">
									“Alle leraren en schooldirecteuren uit het primair onderwijs hebben ooit te maken met Dyade. Bij de Dyade Academy kan deze groep worden bijgeschoold.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
}
