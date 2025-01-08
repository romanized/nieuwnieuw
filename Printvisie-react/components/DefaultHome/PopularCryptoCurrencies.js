import { FaDisease } from "react-icons/fa";
import { GiPortal } from "react-icons/gi";
import { MdEventAvailable } from "react-icons/md";
export default function PopularCryptoCurrencies() {
	return (
		<section className="crypto-currencies-wrapper fix section-black section-padding">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents text-white">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h3>Zien is geloven</h3>
							<h2>Recente projecten</h2>
						</div>
					</div>
				</div>
				<div className="nice-arrow-icon d-none d-lg-block wow fadeInDown" data-wow-duration="1.2s">
					<img src="img/icons/nice-arrow-down.svg" alt="" />
				</div>

				<div className="row">
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".2s"
						>
							<div className="currency-header">
								<div className="icon icon1">
								<FaDisease />
								</div>
								<div className="currency-name">
									<h6>Giants of the Caribbean</h6>
									<span>Hardcover boek met stofomslag </span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Onderwaterfotograaf en ambassadeur van het Wereld
								 Natuurfonds maakte op alle continenten van de wereld prachtige foto's
								  van het leven in de zee.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
								<div className="currency-rate">
									<h5>Duurzaam</h5>
								</div>
								<div className="currency-buy-now">
									<a href="/projects">Meer lezen</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".4s"
						>
							<div className="currency-header">
								<div className="icon icon2">
								<GiPortal />
								</div>
								<div className="currency-name">
									<h6>Online portal Hotel Jakarta</h6>
									<span>Online portal</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Printvisie is voor veel horeca en hotels de partner in drukwerk.
								 Bedrijven zoals Hilton, Dudok, Van der Valk en de restaurants van Debuut Horeca zijn al jarenlang klant.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
								<div className="currency-rate">
									<h5>Online portal</h5>
								</div>
								<div className="currency-buy-now">
									<a href="/projects">Meer lezen</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".6s"
						>
							<div className="currency-header">
								<div className="icon icon3">
								<MdEventAvailable />
								</div>
								<div className="currency-name">
									<h6>Ahoy 6-daagse Daily Bulletin</h6>
									<span> Nieuwsbrief 3-luik</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Soms gaat het om snelheid en betrouwbaarheid en is het de gewoonste zaak van de wereld dat er goed gedrukt wordt.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
								<div className="currency-rate">
									<h5>Logistiek</h5>
								</div>
								<div className="currency-buy-now">
									<a href="/projects">Meer lezen</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
