import AsideCard from './AsideCard/AsideCard';
import AsideCategoryList from './AsideCategoryList/AsideCategoryList';
import AsideContainer from './AsideContainer/AsideContainer';
import { getCategories } from '../CategoryList/getCategories';
import styles from './Aside.module.scss';

const Aside = async () => {
	const categories = await getCategories();

	return (
		<aside className={styles.container}>
			<AsideContainer title='Most Popular' subTitle={"What's Hot"}>
				{categories?.length > 0 && categories.map((item) => <AsideCard catName={item.title} key={item.id} />)}
			</AsideContainer>

			<AsideContainer title='Categories' subTitle='Discover by topic'>
				<AsideCategoryList categories={categories} />
			</AsideContainer>

			<AsideContainer title='Editors Pick' subTitle='Chosen by the editor'>
				{categories?.length > 0 &&
					categories.map((item) => <AsideCard imageUrl={'/p1.jpeg'} catName={item.title} key={item.id} />)}
			</AsideContainer>
		</aside>
	);
};

export default Aside;
