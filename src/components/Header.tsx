import styles from './Header.module.css';
import feedLogo from '../assets/feed-logo.svg';

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={feedLogo} alt="Feed logo" />
            </header>
        </div>
    );
}