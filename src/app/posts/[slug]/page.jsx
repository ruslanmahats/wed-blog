import Aside from '@/components/Aside/Aside';
import Comments from '@/components/Comments/Comments';
import Image from 'next/image';
import styles from './postPage.module.scss';

const getData = async (slug) => {
	const res = await fetch(`${process.env.API_HOST}/api/posts/${slug}`, { cache: 'no-store' });

	if (!res.ok) {
		throw new Error('Failed');
	}

	return res.json();
};

const PostPage = async ({ params }) => {
	const { slug } = params;

	const { post } = await getData(slug);
	const postMarkup = { __html: `${post?.desc}` };

	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.infoTextContainer}>
					<h1 className={styles.infoTitle}>{post?.title}</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image src={`${post?.user.image}`} alt='User Image' fill className={styles.userImage} />
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.userName}>{post?.user.name}</span>
							<span className={styles.date}>{post?.createdAt.substring(0, 10)}</span>
						</div>
					</div>
				</div>
				<div className={styles.infoImageContainer}>
					<Image src={post?.img || '/p1.jpeg'} alt='Post Image' fill className={styles.infoImage} />
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.data}>
					<div className={styles.postViews}>Post views: {post?.views}</div>
					<div className={styles.description} dangerouslySetInnerHTML={postMarkup} />
					<Comments postSlug={slug} />
				</div>
				<Aside />
			</div>
		</div>
	);
};

export default PostPage;
