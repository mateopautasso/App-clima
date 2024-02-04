import styles from './mini-card.module.css';

export function MiniCard({ day, icon, tempMax, tempMin }) {
	return (
		<div className={`${styles.miniCard} animation-appear`}>
			<h5 className={styles.title}>{day}</h5>
			<figure>
				<img src={icon} alt='' />
			</figure>
			<div className={styles.temp}>
				<p>{tempMax} °C</p>
				<p>{tempMin} °C</p>
			</div>
		</div>
	);
}
