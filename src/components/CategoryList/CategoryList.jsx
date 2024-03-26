import Image from 'next/image';
import Link from 'next/link';
import { getCategories } from './getCategories';
import styles from './CategoryList.module.scss';

const CategoryList = async () => {
	const categories = await getCategories();

	const categoryListArr = categories?.map((item) => {
		const lowerCaseName = item.title.toLowerCase();

		return (
			<Link
				key={item.id}
				href={`/blog?cat=${lowerCaseName}`}
				className={`${styles.category} ${styles['cat_' + item.title]}`}>
				{item.img && <Image src={item.img} alt={item.title} width={32} height={32} className={styles.image} />}
				{item.title}
			</Link>
		);
	});

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Categories</h1>
			<div className={styles.categories}>{categoryListArr}</div>
		</div>
	);
};

export default CategoryList;
