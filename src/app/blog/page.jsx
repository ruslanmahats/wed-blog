import Aside from '@/components/Aside/Aside';
import CardList from '@/components/CardList/CardList';
import styles from './blogPage.module.scss';

const BlogPage = ({ searchParams }) => {
	const page = parseInt(searchParams.page) || 1;
	const { cat } = searchParams;

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{cat} Blog</h1>
			<div className={styles.content}>
				<CardList page={page} cat={cat} />
				<Aside />
			</div>
		</div>
	);
};

export default BlogPage;
