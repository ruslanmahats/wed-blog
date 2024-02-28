import Image from 'next/image';
import { socialLinks } from './socialLinksObj';
import styles from './SocialLinks.module.scss';

const SocialLinks = ({ iconSize }) => {
	return (
		<div className={styles.container}>
			{socialLinks.map((item) => (
				<Image
					src={`/${item.name.toLowerCase()}.png`}
					alt={item.name}
					width={iconSize}
					height={iconSize}
					key={item.name}
				/>
			))}
		</div>
	);
};

export default SocialLinks;
