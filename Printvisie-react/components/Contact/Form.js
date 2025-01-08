export default function Form() {
	return (
		<form action="#" className="contact-form row">
			<div className="col-12">
				<input type="text" placeholder="Naam*" />
			</div>
			<div className="col-12">
				<input type="email" placeholder="E-maliadres*" />
			</div>
			<div className="col-12">
				<input type="text" placeholder="Telefoonnummer*" />
			</div>
			<div className="col-12">
				<textarea placeholder="Beschrijf hier uw aanvraag*"></textarea>
			</div>
			<div className="col-12">
				<button className="theme-btn" type="submit">
					Verzenden
				</button>
			</div>
		</form>
	);
}
