import Link from 'next/link';
import styles from './AsideCategoryList.module.scss';

const AsideCategoryList = ({ categories }) => {
	return (
		<div className={styles.container}>
			{categories.length > 0 &&
				categories.map((item) => {
					const lowerCaseName = item.title.toLowerCase();
					return (
						<Link
							key={item.id}
							href={`/blog?cat=${lowerCaseName}`}
							className={`${styles.category} ${styles['cat_' + lowerCaseName]}`}>
							{item.title}
						</Link>
					);
				})}
		</div>
	);
};

export default AsideCategoryList;
