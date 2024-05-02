'use client'

import { signOut, useSession } from 'next-auth/react'
import { useRef, useState } from 'react'

import Link from 'next/link'
import styles from './AuthLinks.module.scss'

const AuthLinks = () => {
	const [open, setOpen] = useState(false)
	const { status } = useSession()
	const logOutRef = useRef()

	const onClickHandler = () => {
		setOpen(!open)
	}

	const logOutHandler = () => {
		signOut()
	}

	return (
		<>
			{status !== 'loading' ? (
				status !== 'authenticated' ? (
					<Link href='/login' className={styles.link}>
						Login
					</Link>
				) : (
					<>
						<Link href='/write' className={styles.link}>
							Write
						</Link>
						<span ref={logOutRef} onClick={logOutHandler} className={styles.link}>
							LogOut
						</span>
					</>
				)
			) : null}

			<div className={styles.burger} onClick={() => onClickHandler()}>
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
							<span
								ref={logOutRef}
								onClick={() => {
									onClickHandler()
									logOutHandler()
								}}
								className={styles.link}>
								LogOut
							</span>
						</>
					)}
				</div>
			)}
		</>
	)
}

export default AuthLinks
