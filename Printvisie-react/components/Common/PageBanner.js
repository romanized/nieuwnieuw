export default function PageBanner({ title, content, breadcrumb = "project" }) {
	return (
		<div className="page-banner-wrap bg-cover text-capitalize">
			<div className="container">
				<div className="row">
					<div className="col-12 col-xl-6 ps-xl-0 pe-xl-0 offset-xl-3 col-lg-8 offset-lg-2 text-center text-white">
						<div className="page-heading">
							<h1>{title}</h1>
							<p className="ps-lg-5 pe-lg-5">{content}</p>
						</div>
						<div className="breadcrumb-wrapper">
							<nav>
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="/">home</a>
									</li>
									<li className="breadcrumb-item active" aria-current="page">
										{breadcrumb}
									</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="page-banner-shape">
					<img src="/img/banner-shape.png" alt="" />
				</div>
			</div>
		</div>
	);
}
