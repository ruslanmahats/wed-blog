import Image from 'next/image';
import styles from './Featured.module.scss';

const Featured = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Hey, WebDev here!</b> Discover my stories and creative ideas.
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image src='/p1.jpeg' alt='Hero image' fill className={styles.image} />
				</div>
				<div className={styles.textContainer}>
					<h2 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
					<p className={styles.postDesc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error ut necessitatibus voluptatum non
						fugiat vitae debitis ab rem quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
						dolore culpa necessitatibus quidem optio impedit deleniti quia asperiores exercitationem voluptatem?
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
