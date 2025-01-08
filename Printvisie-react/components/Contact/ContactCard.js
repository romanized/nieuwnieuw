export default function ContactCard({ icon, title, content = [], className }) {
	return (
		<div className={`single-contact-box ${className}`}>
			<div className="icon">{icon}</div>
			<div className="contact-info">
				<strong>{title}</strong>
				{/* Loop through content array */}
				{content.map((item, index) => (
					<span key={index}>{item}</span>
				))}
			</div>
		</div>
	);
}
