import Aside from '@/components/Aside/Aside';
import CardList from '@/components/CardList/CardList';
import styles from './blogPage.module.scss';

const BlogPage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Wedding Blog</h1>
			<div className={styles.content}>
				<CardList />
				<Aside />
			</div>
		</div>
	);
};

export default BlogPage;
