import Image from 'next/image';
import Link from 'next/link';
import { categories } from './categoryListObj';
import styles from './CategoryList.module.scss';

const categoryListArr = categories.map((item) => {
	const lowerCaseName = item.name.toLowerCase();

	return (
		<Link
			key={item.id}
			href={`/blog?cat=${lowerCaseName}`}
			className={`${styles.category} ${styles['cat_' + item.id]}`}>
			<Image src={`/${lowerCaseName}.png`} alt={item.name} width={32} height={32} className={styles.image} />
			{item.name}
		</Link>
	);
});

const CategoryList = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Categories</h1>
			<div className={styles.categories}>{categoryListArr}</div>
		</div>
	);
};

export default CategoryList;
