import styles from './AsideContainer.module.scss';

const AsideContainer = ({ children, title, subTitle = '' }) => {
	return (
		<div className={styles.container}>
			{subTitle && <h4 className={styles.subTitle}>{subTitle}</h4>}
			{title && <h3 className={styles.title}>{title}</h3>}
			<div className={styles.items}>{children}</div>
		</div>
	);
};

export default AsideContainer;
