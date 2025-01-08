import Slider from "react-slick";
export default function RecentProjectSlider() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 888,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
	};
	return (
		<div className="recent-project-carousel">
			<Slider {...settings}>
			<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: "url(/img/portfolio/gotc.jpg)" }}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details">Giants of the Caribbean</a>
						</h5>
						<span>Duurzaam</span>
					</div>
				</div>
				<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: "url(/img/portfolio/add.jpg)" }}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details2">Ahoy 6-daagse Daily Bulletin</a>
						</h5>
						<span>Logistiek</span>
					</div>
				</div>
				<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: "url(/img/portfolio/ophj.jpg)" }}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details3">Online portal Hotel Jakarta</a>
						</h5>
						<span>Online portal</span>
					</div>
				</div>
			</Slider>
		</div>
	);
}
