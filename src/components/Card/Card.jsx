import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

const Card = ({ item }) => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src={item.img || '/p1.jpeg'} alt='Post image' fill className={styles.image} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>{item.createdAt.substring(0, 10)} - </span>
					<span className={styles.category}>{item.catSlug}</span>
				</div>
				<Link href={`/posts/${item.slug}`}>
					<h3 className={styles.title}>{item.title}</h3>
				</Link>
				<p className={styles.desc}>{item.desc.substring(0, 250)}</p>
				<Link href={`/posts/${item.slug}`} className={styles.link}>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default Card;
