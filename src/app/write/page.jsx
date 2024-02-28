'use client';

import 'react-quill/dist/quill.bubble.css';

import Image from 'next/image';
import ReactQuill from 'react-quill';
import styles from './writePage.module.scss';
import { useState } from 'react';

const WritePage = () => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');

	return (
		<div className={styles.container}>
			<input type='text' placeholder='Title' className={styles.input} />
			<div className={styles.editor}>
				<button className={styles.button} onClick={() => setOpen(!open)}>
					<Image src='/plus.png' alt='' width={16} height={16} className={styles.image} />
				</button>
				{open && (
					<div className={styles.add}>
						<button className={styles.addButton}>
							<Image src='/image.png' alt='' width={16} height={16} className={styles.image} />
						</button>
						<button className={styles.addButton}>
							<Image src='/external.png' alt='' width={16} height={16} className={styles.image} />
						</button>
						<button className={styles.addButton}>
							<Image src='/video.png' alt='' width={16} height={16} className={styles.image} />
						</button>
					</div>
				)}
				<ReactQuill
					theme='bubble'
					value={value}
					onChange={setValue}
					placeholder='Tell your story...'
					className={styles.textArea}
				/>
			</div>
			<button className={styles.publish}>Publish</button>
		</div>
	);
};

export default WritePage;