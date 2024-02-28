'use client';

import { useContext, useState } from 'react';

import Link from 'next/link';
import { ThemeContext } from '@/context/ThemeContext';
import styles from './AuthLinks.module.scss';

const AuthLinks = () => {
	const [open, setOpen] = useState(false);
	const { theme } = useContext(ThemeContext);
	const status = 'authenticated';

	return (
		<>
			{status === 'notAuthenticated' ? (
				<Link href='/login' className={styles.link}>
					Login
				</Link>
			) : (
				<>
					<Link href='/write' className={styles.link}>
						Write
					</Link>
					<span className={styles.link}>LogOut</span>
				</>
			)}
			<div className={styles.burger} onClick={() => setOpen(!open)}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</div>
			{open && (
				<div className={styles.responsiveMenu}>
					<Link href='/'>Homepage</Link>
					<Link href='/'>About</Link>
					<Link href='/'>Contact</Link>
					{status === 'notAuthenticated' ? (
						<Link href='/login' className={styles.link}>
							Login
						</Link>
					) : (
						<>
							<Link href='/write'>Write</Link>
							<span>LogOut</span>
						</>
					)}
				</div>
			)}
		</>
	);
};

export default AuthLinks;
