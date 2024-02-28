import Image from 'next/image';
import Link from 'next/link';
import styles from './AsideCard.module.scss';

const AsideCard = ({
	title = 'Lorem ipsum dolor sit amet',
	catName = 'catPlaceholder',
	catId,
	userName = 'userPlaceholder',
	date = '00.00.0000',
	linkUrl = '#',
	imageUrl = null,
	imageWidth = 40,
	imageHeight = 40,
	imageFill = true,
}) => {
	return (
		<Link href={linkUrl} className={styles.container}>
			{imageUrl ? (
				<div className={styles.imageContainer}>
					{imageFill ? (
						<Image src={imageUrl} alt={title} fill={imageFill} className={styles.image} />
					) : (
						<Image src={imageUrl} alt={title} width={imageWidth} height={imageHeight} className={styles.image} />
					)}
				</div>
			) : null}
			<div className={styles.textContainer}>
				<span className={`${styles.category} ${styles['cat_' + catId]}`}>{catName}</span>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.detail}>
					{userName && <span className={styles.userName}>{userName}</span>}
					{date && <span className={styles.date}> - {date}</span>}
				</div>
			</div>
		</Link>
	);
};

export default AsideCard;
