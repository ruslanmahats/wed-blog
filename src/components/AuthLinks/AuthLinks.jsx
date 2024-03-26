'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRef, useState } from 'react';

import Link from 'next/link';
import styles from './AuthLinks.module.scss';

const AuthLinks = () => {
	const [open, setOpen] = useState(false);
	const { status } = useSession();
	const logOutRef = useRef();

	const onClickHandler = (e) => {
		setOpen(!open);
		if (e.target === logOutRef.current) {
			signOut();
		}
	};

	return (
		<>
			{status === 'unauthenticated' ? (
				<Link onClick={onClickHandler} href='/login' className={styles.link}>
					Login
				</Link>
			) : (
				<>
					<Link onClick={onClickHandler} href='/write' className={styles.link}>
						Write
					</Link>
					<span onClick={onClickHandler} className={styles.link}>
						LogOut
					</span>
				</>
			)}
			<div className={styles.burger} onClick={(e) => onClickHandler(e)}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</div>
			{open && (
				<div className={styles.responsiveMenu}>
					<Link onClick={onClickHandler} href='/'>
						Homepage
					</Link>
					<Link onClick={onClickHandler} href='/'>
						About
					</Link>
					<Link onClick={onClickHandler} href='/'>
						Contact
					</Link>
					{status !== 'authenticated' ? (
						<Link onClick={onClickHandler} href='/login' className={styles.link}>
							Login
						</Link>
					) : (
						<>
							<Link onClick={onClickHandler} href='/write' className={styles.link}>
								Write
							</Link>
							<span ref={logOutRef} onClick={onClickHandler} className={styles.link}>
								LogOut
							</span>
						</>
					)}
				</div>
			)}
		</>
	);
};

export default AuthLinks;
