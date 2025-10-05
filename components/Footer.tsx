import styles from './styles/Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className='inner'>
                <small className={styles.copyRight}>&copy; yudai95</small>
            </div>
        </footer>
    );
};

export default Footer;
