import Link from 'next/link';
import styles from './AsideCategoryList.module.scss';

const AsideCategoryList = ({ categories }) => {
	return (
		<div className={styles.container}>
			{categories.map((item) => {
				const lowerCaseName = item.name.toLowerCase();
				return (
					<Link
						key={item.id}
						href={`/blog?cat=${lowerCaseName}`}
						className={`${styles.category} ${styles['cat_' + item.id]}`}>
						{item.name}
					</Link>
				);
			})}
		</div>
	);
};

export default AsideCategoryList;
