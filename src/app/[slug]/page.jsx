import Aside from '@/components/Aside/Aside';
import Comments from '@/components/Comments/Comments';
import Image from 'next/image';
import styles from './postPage.module.scss';

const PostPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.infoTextContainer}>
					<h1 className={styles.infoTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image src='/p1.jpeg' alt='User Image' fill className={styles.userImage} />
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.userName}>John Doe</span>
							<span className={styles.date}>01.01.2024</span>
						</div>
					</div>
				</div>
				<div className={styles.infoImageContainer}>
					<Image src='/p1.jpeg' alt='Post Image' fill className={styles.infoImage} />
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.description}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed assumenda sequi, doloribus magni
							labore incidunt repudiandae officiis nisi odit totam culpa sunt porro neque consequuntur sint, ex
							itaque repellendus dignissimos. Omnis ducimus ex architecto a sed tenetur tempora laborum
							repudiandae iste adipisci, officiis animi quae possimus magni asperiores error necessitatibus
							exercitationem fugiat illum deserunt. Quae rem optio ab fugit soluta.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed assumenda sequi, doloribus magni
							labore incidunt repudiandae officiis nisi odit totam culpa sunt porro neque consequuntur sint, ex
							itaque repellendus dignissimos. Omnis ducimus ex architecto a sed tenetur tempora laborum
							repudiandae iste adipisci, officiis animi quae possimus magni asperiores error necessitatibus
							exercitationem fugiat illum deserunt. Quae rem optio ab fugit soluta.
						</p>
						<h3>Lorem ipsum dolor sit amet</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed assumenda sequi, doloribus magni
							labore incidunt repudiandae officiis nisi odit totam culpa sunt porro neque consequuntur sint, ex
							itaque repellendus dignissimos. Omnis ducimus ex architecto a sed tenetur tempora laborum
							repudiandae iste adipisci, officiis animi quae possimus magni asperiores error necessitatibus
							exercitationem fugiat illum deserunt. Quae rem optio ab fugit soluta.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed assumenda sequi, doloribus magni
							labore incidunt repudiandae officiis nisi odit totam culpa sunt porro neque consequuntur sint, ex
							itaque repellendus dignissimos. Omnis ducimus ex architecto a sed tenetur tempora laborum
							repudiandae iste adipisci, officiis animi quae possimus magni asperiores error necessitatibus
							exercitationem fugiat illum deserunt. Quae rem optio ab fugit soluta.
						</p>
					</div>
					<Comments />
				</div>
				<Aside />
			</div>
		</div>
	);
};

export default PostPage;
