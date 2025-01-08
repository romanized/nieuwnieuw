import React from "react";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="hero-welcome-wrapper hero-1">
			<div className="single-slide text-white">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-contents">
								<h1>De groenste drukkerij van Rotterdam</h1>
								<Link href="/about">
								<a className="theme-btn black">Ontdek waarom</a>
								</Link>
								<div className="tri-arrow">
									<img src="img/icons/tir-shape.svg" alt="arrow" />
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0">
						<div className="hero-mobile mt-10 mt-xl-0">
						{/* <img 
							src="img/mobile-hero1.png" 
							alt="iphone printvisie" 
							style={{ width: '100%', maxWidth: '305px', height: 'auto' }}
						/> */}
						</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
