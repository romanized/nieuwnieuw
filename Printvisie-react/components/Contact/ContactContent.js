import { AiTwotonePhone } from "react-icons/ai";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Map from "../GoogleMap/Map";
import ContactCard from "./ContactCard";
import Form from "./Form";

export default function ContactContent() {
	return (
		<section className="contact-us-wrapper section-padding">
			<div className="container">
				<div className="row text-center">
					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<AiTwotonePhone />}
							title="Telefoonnummer & Fax"
							content={[
								"010 - 7 410 410", // phone number
								"010 - 4 198 880", // fax number
							]}
							className="box1"
						/>
					</div>
					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaEnvelope />}
							title="E-mailadressen"
							content={[
								"info@printvisie.nl",
								"leander@printvisie.nl",
								"dennis@printvisie.nl",
								"rogier@printvisie.nl",
								"pre-press@printvisie.nl",
							]}
							className="box2"
						/>
					</div>
					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaMapMarkerAlt />}
							title="Onze Locatie & Printvisie"
							content={[
								"Aristotelesstraat 20",
								"3076BD Rotterdam",
								"Kvk Rotterdam: 24139784",
								"IBAN: NL75 RABO 0117 1309 58",
								"BTW: NL009621416B01",
							]}
							className="box3"
						/>
					</div>
				</div>

				<div className="row mt-4 mt-lg-5">
					<div className="col-lg-8 col-xl-6 offset-xl-3 offset-lg-2 text-center">
						<div className="block-contents">
							<div className="section-title mb-4">
								<h2 className="wow fadeInUp">Binnen 4 uur uw offerte</h2>
								<p className="wow fadeInUp pt-15" data-wow-delay=".3s">
									Beschrijf uw aanvraag en wat wij voor u kunnen betekenen. We reageren zo snel mogelijk.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6 pe-lg-4 order-2 order-lg-1">
						<div className="google-map me-lg-4 wow fadeInUp">
							{/* Werkt nog niet omdat er geen geldige key in zit. Aan Jeremy vragen. */}
							<Map />
						</div>
					</div>
					<div className="col-lg-6 pls-lg-4 wow fadeInUp order-1 order-lg-2">
						<Form />
					</div>
				</div>
			</div>
		</section>
	);
}
