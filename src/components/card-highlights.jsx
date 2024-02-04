import styles from './card-highlights.module.css';
export function CardHighlights({ prop, value, span }) {
	return (
		<div className={`${styles.cardHighlights} animation-appear`}>
			<p>{prop}</p>
			<div className={styles.containerInfo}>
				<p>{value}</p>
				<p>{span}</p>
			</div>
		</div>
	);
}
