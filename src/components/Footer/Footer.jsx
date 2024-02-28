import Image from 'next/image';
import Link from 'next/link';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image src='/logo.png' alt='WedBlog' width={50} height={50} className={styles.image} />
					<span className={styles.logoText}>WedBlog</span>
				</div>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel maxime dolorum architecto a vero
					esse eveniet, quis aliquam excepturi, ipsum minus deserunt! Repellendus nobis consectetur facilis non
					laudantium quo. Nesciunt, consequatur harum distinctio tenetur fuga quisquam hic corrupti.
				</p>
				<div className={styles.socials}>
					<SocialLinks iconSize={18} />
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href='/' className={styles.link}>
						Homepage
					</Link>
					<Link href='/' className={styles.link}>
						Blog
					</Link>
					<Link href='/' className={styles.link}>
						About
					</Link>
					<Link href='/' className={styles.link}>
						Contact
					</Link>
				</div>

				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href='/' className={styles.link}>
						Style
					</Link>
					<Link href='/' className={styles.link}>
						Fashion
					</Link>
					<Link href='/' className={styles.link}>
						Coding
					</Link>
					<Link href='/' className={styles.link}>
						Travel
					</Link>
				</div>

				<div className={styles.list}>
					<span className={styles.listTitle}>Socials</span>
					<Link href='/' className={styles.link}>
						Facebook
					</Link>
					<Link href='/' className={styles.link}>
						Instagram
					</Link>
					<Link href='/' className={styles.link}>
						Tiktok
					</Link>
					<Link href='/' className={styles.link}>
						Youtube
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
