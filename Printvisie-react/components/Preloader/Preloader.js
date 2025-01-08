import { useEffect, useState } from "react";

export default function Preloader() {
	const [showLoader, setShowLoader] = useState(true);
	const [isLoded, setIsLoded] = useState(null);

	useEffect(() => {
		window.addEventListener("load", () => {
			setIsLoded("loaded");
		});

		const timer = setTimeout(() => {
			setShowLoader(false);
		}, 700);

		return () => clearTimeout(timer);
	});
	return (
		showLoader && (
			<div id="preloader" className={`preloader ${isLoded}`}>
				<div className="animation-preloader">
					<div className="spinner"></div>
					<div className="txt-loading">
						<span data-text-preloader="P" className="letters-loading">
							P
						</span>
						<span data-text-preloader="R" className="letters-loading">
							R
						</span>
						<span data-text-preloader="I" className="letters-loading">
							I
						</span>
						<span data-text-preloader="N" className="letters-loading">
							N
						</span>
						<span data-text-preloader="T" className="letters-loading">
							T
						</span>
						<span data-text-preloader="V" className="letters-loading">
							V
						</span>
						<span data-text-preloader="I" className="letters-loading">
							I
						</span>
						<span data-text-preloader="S" className="letters-loading">
							S
						</span>
						<span data-text-preloader="I" className="letters-loading">
							I
						</span>
						<span data-text-preloader="E" className="letters-loading">
							E
						</span>
					</div>
					<p className="text-center">Laden</p>
				</div>
				<div className="loader">
					<div className="row">
						<div className="col-3 loader-section section-left">
							<div className="bg"></div>
						</div>
						<div className="col-3 loader-section section-left">
							<div className="bg"></div>
						</div>
						<div className="col-3 loader-section section-right">
							<div className="bg"></div>
						</div>
						<div className="col-3 loader-section section-right">
							<div className="bg"></div>
						</div>
					</div>
				</div>
			</div>
		)
	);
}
