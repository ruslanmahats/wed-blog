'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Comments.module.scss';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const Comments = ({ postSlug }) => {
	const [desc, setDesc] = useState('');
	const { status } = useSession();

	const fetcher = async (url) => {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(data.message);
		}

		const data = await res.json();

		setDesc('');
		return data;
	};

	const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher);

	const handleSubmit = async () => {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({ desc, postSlug }),
		});
		mutate();
	};

	const comments = data.map((item) => (
		<div className={styles.comment} key={item.id}>
			<div className={styles.user}>
				<Image
					src={item.user.image || '/p1.jpeg'}
					alt={item.user.name}
					width={50}
					height={50}
					className={styles.image}
				/>
				<div className={styles.userInfo}>
					<span className={styles.userName}>{item.user.name}</span>
					<span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
				</div>
			</div>
			<div className={styles.desc}>{item.desc}</div>
		</div>
	));

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Comments</h1>
			{status === 'authenticated' ? (
				<div className={styles.write}>
					<textarea
						placeholder='write a comment'
						className={styles.input}
						onChange={(e) => setDesc(e.target.value)}
						value={desc}
					/>
					<button className={styles.button} onClick={handleSubmit}>
						Send
					</button>
				</div>
			) : (
				<Link href='/login' className={styles.link}>
					Login to write a comment
				</Link>
			)}
			<div className={styles.comments}>{isLoading ? 'Loading comments...' : comments}</div>
		</div>
	);
};

export default Comments;
