import { useRouter } from 'next/router';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';
import styles from './style.module.scss'

export default function Index({ useBlackHeader = false }){
    
    const router = useRouter();

    const backgroundColor = useBlackHeader ? '#141516' : '';


    return(
        <div className={styles.header} style={{backgroundColor}}>
            <div className={styles.logo} onClick={() => {router.push('/')}}>
                <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                    <p className={styles.codeBy}>Eric</p>
                    <p className={styles.dennis}>Lee</p>
                    <p className={styles.snellenberg}>Looplight</p>
                </div>
            </div>
            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href='/delivery'>Delivery</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href='/about'>About</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href='/contact'>Contact</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            </div>
        </div>
    )
}