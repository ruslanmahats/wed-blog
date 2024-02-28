import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

const Card = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src='/p1.jpeg' alt='Post image' fill className={styles.image} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>11.02.2023 - </span>
					<span className={styles.category}>Culture</span>
				</div>
				<Link href='/'>
					<h3 className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit</h3>
				</Link>
				<p className={styles.desc}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, sequi quidem recusandae consequuntur
					fuga at, quae iure similique deserunt ratione iste nesciunt saepe illo, natus provident cupiditate
					maiores. Minima, officia. Quidem odit aut voluptas voluptatum inventore minus iusto repellat, eveniet
					quae.
				</p>
				<Link href='/' className={styles.link}>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default Card;
