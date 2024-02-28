import AsideCard from './AsideCard/AsideCard';
import AsideCategoryList from './AsideCategoryList/AsideCategoryList';
import AsideContainer from './AsideContainer/AsideContainer';
import { categories } from '@/components/CategoryList/categoryListObj';
import styles from './Aside.module.scss';

const Aside = () => {
	return (
		<aside className={styles.container}>
			<AsideContainer title='Most Popular' subTitle={"What's Hot"}>
				{categories.map((item) => (
					<AsideCard catName={item.name} catId={item.id} key={item.id} />
				))}
			</AsideContainer>

			<AsideContainer title='Categories' subTitle='Discover by topic'>
				<AsideCategoryList categories={categories} />
			</AsideContainer>

			<AsideContainer title='Editors Pick' subTitle='Chosen by the editor'>
				{categories.map((item) => (
					<AsideCard imageUrl={'/p1.jpeg'} catName={item.name} catId={item.id} key={item.id} />
				))}
			</AsideContainer>
		</aside>
	);
};

export default Aside;
