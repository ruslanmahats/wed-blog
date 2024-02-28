import Image from 'next/image';
import Link from 'next/link';
import styles from './Comments.module.scss';

const Comments = () => {
	const status = 'authenticated';
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Comments</h1>
			{status === 'authenticated' ? (
				<div className={styles.write}>
					<textarea placeholder='write a comment' className={styles.input} />
					<button className={styles.button}>Send</button>
				</div>
			) : (
				<Link href='/login' className={styles.link}>
					Login to write a comment
				</Link>
			)}
			<div className={styles.comments}>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image src='/p1.jpeg' alt='John Doe' width={50} height={50} className={styles.image} />
						<div className={styles.userInfo}>
							<span className={styles.userName}>John Doe</span>
							<span className={styles.date}>01.02.2015</span>
						</div>
					</div>
					<div className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, mollitia. Lorem ipsum, dolor sit amet
						consectetur adipisicing elit. Eum, sed in! Est inventore et nihil sunt laudantium pariatur vel
						officia?
					</div>
				</div>

				<div className={styles.comment}>
					<div className={styles.user}>
						<Image src='/p1.jpeg' alt='John Doe' width={50} height={50} className={styles.image} />
						<div className={styles.userInfo}>
							<span className={styles.userName}>John Doe</span>
							<span className={styles.date}>01.02.2015</span>
						</div>
					</div>
					<div className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, mollitia. Lorem ipsum, dolor sit amet
						consectetur adipisicing elit. Eum, sed in! Est inventore et nihil sunt laudantium pariatur vel
						officia?
					</div>
				</div>

				<div className={styles.comment}>
					<div className={styles.user}>
						<Image src='/p1.jpeg' alt='John Doe' width={50} height={50} className={styles.image} />
						<div className={styles.userInfo}>
							<span className={styles.userName}>John Doe</span>
							<span className={styles.date}>01.02.2015</span>
						</div>
					</div>
					<div className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, mollitia. Lorem ipsum, dolor sit amet
						consectetur adipisicing elit. Eum, sed in! Est inventore et nihil sunt laudantium pariatur vel
						officia?
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comments;
