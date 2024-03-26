import Image from 'next/image';
import Link from 'next/link';
import styles from './CategoryList.module.scss';

const getData = async () => {
	const res = await fetch(`${process.env.API_HOST}/api/categories`, { cache: 'no-store' });

	if (!res.ok) {
		throw new Error('Failed');
	}

	const data = await res.json();

	return data;
};

const CategoryList = async () => {
	const categories = await getData();

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
