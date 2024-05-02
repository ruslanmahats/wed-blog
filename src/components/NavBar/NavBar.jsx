import AuthLinks from '../AuthLinks/AuthLinks'
import Link from 'next/link'
import SocialLinks from '../SocialLinks/SocialLinks'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './NavBar.module.scss'

const NavBar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.social}>
				<SocialLinks iconSize={24} />
			</div>
			<div className={styles.logo}>
				<Link href='/'>WedBlog</Link>
			</div>
			<div className={styles.links}>
				<ThemeToggle />
				<Link href='/' className={styles.link}>
					Home
				</Link>
				<Link href='/' className={styles.link}>
					Contact
				</Link>
				<Link href='/' className={styles.link}>
					About
				</Link>
				<AuthLinks />
			</div>
		</div>
	)
}

export default NavBar
