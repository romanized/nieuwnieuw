import { AiOutlineAlignLeft } from "react-icons/ai";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";

export default function FeaturesOne() {
	return (
		<section className="our-best-features-wrapper section-padding">
			<div className="container">
				<div className="col-xl-8 offset-xl-2 text-center">
					<div className="block-contents">
						<div className="section-title">
							<h3>Wat we bieden</h3>
							<h2>Onze Services</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon1">
							<AiOutlineTeam />
							</div>
							<h3>Advies en begeleiding</h3>
							<p>Wil je iets weten over drukwerktechnieken, papiersoorten, afwerkingen of fullfillment? Heb je een schijnbaar idiote wens als het gaat om levertijden, drukwerkformaten en afwerkingen?</p>
							<div className="read-more-link">
								<a href="#">Ontdek meer</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon2">
							<AiOutlineAlignLeft />
							</div>
							<h3>Online drukwerk</h3>
							<p>We behoren tot de top in online drukwerk. Al jaren. Kijken, kiezen, bestellen. Tegen de laagste prijs en morgen in huis. Makkelijker kan niet. Goedkoper en beter kun je niet terecht.</p>
							<div className="read-more-link">
								<a href="#">Ontdek meer</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon3">
							<AiOutlineAlignRight />
							</div>
							<h3>Digitaal drukwerk</h3>
							<p>Soms is een oplage van 1, 5 of 150 stuks meer dan voldoende voor je presentatie. In dat geval bieden onze digitale drukpersen de schitterende, ultrasnelle en ook financieel slimme optie.</p>
							<div className="read-more-link">
								<a href="#">Ontdek meer</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon1">
							<BsFillPersonCheckFill />
							</div>
							<h3>Gepersonaliseerd drukwerk</h3>
							<p>Je direct mailing scoort beter door het contact persoonlijk te maken. Met dit gepersonaliseerd drukwerk, via Variabele Data Printing (VDP), win je het hart en hoofd van elke prospect.</p>
							<div className="read-more-link">
								<a href="#">Ontdek meer</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon2">
							<AiOutlineFileDone />
							</div>
							<h3>Offset drukwerk</h3>
							<p>Onze persen draaien voor sterke merken: van Diesel tot Philips en Porsche. Met het traditionele offsetdrukwerk van Printvisie weet je zeker dat je een klassieke topprestatie in handen krijgt.</p>
							<div className="read-more-link">
								<a href="#">Ontdek meer</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon3">
							<AiOutlineRise />
							</div>
							<h3>Fulfillment</h3>
							<p>Afstemmen, verzenden en bezorgen kan makkelijker. We kennen de beste wegen, de beste tarieven en de beste wijze om het proces moeiteloos te verzorgen.</p>
							<div className="read-more-link">
								<a href="#">Ontdek meer</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
