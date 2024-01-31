import './card-highlights.css';
export function CardHighlights({ prop, value, span }) {
	return (
		<div className='card-highlights animation-appear'>
			<p>{prop}</p>
			<p>
				{value} <span>{span}</span>
			</p>
		</div>
	);
}
