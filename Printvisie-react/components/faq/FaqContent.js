import Accordion from "../Accordion/Accordion";
import Link from "next/link";

export const faqsData = [
	{
		id: 1,
		question: "cPDF bestanden",
		answer: "Bij voorkeur ontvangen wij certified PDF bestanden.",
	},
	{
		id: 2,
		question: "Bestanden aanleveren",
		answer: (
			<>
				Lever uw bestand(en) via ons{" "}
				<a
					href="https://printvisie.wetransfer.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="custom-link"
				>
					Printvisie WeTransfer
				</a>
				-kanaal.
			</>
		),
	},
	{
		id: 3,
		question: "Open bestanden",
		answer: "Graag verzoeken wij u indien u open bestanden aan ons aanlevert, deze (compleet met fonts en afbeeldingen) eerst in te pakken met een compressieprogramma. De compressieformaten welke door ons ondersteund worden zijn ZIP en SIT.",
	},
	{
		id: 4,
		question: "Vragen?",
		answer: (
			<>
				Voor vragen verzoeken wij u{" "}
				<Link href="/contact">
					<a className="custom-link">contact</a>
				</Link>{" "}
				met ons op te nemen.
			</>
		),
	},
];

export default function FaqContent() {
	return (
		<section className="faq-ask-wrapper section-padding">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents fw500">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2>Aanleverinstructies</h2>
						</div>
					</div>
				</div>

				<div className="row faq-ask">
					<div className="col-lg-12 col-12">
						<div className="faq-accordion">
							<Accordion content={faqsData} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
