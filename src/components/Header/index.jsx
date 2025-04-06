import { useRouter } from 'next/router';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';

export default function Index({ useBlackHeader = false }){
    
    const router = useRouter();

    const backgroundColor = useBlackHeader ? '#141516' : '';


    return(
        <div className="header" style={{backgroundColor}}>
            <div className="logo" onClick={() => {router.push('/')}}>
                <p className="copyright">©</p>
                <div className="name">
                    <p className="codeBy">Eric</p>
                    <p className="dennis">Lee</p>
                    <p className="snellenberg">Looplight</p>
                </div>
            </div>
            <div className="nav">
                {/* <Magnetic>
                    <div className="el">
                        <Link href='/delivery'>Delivery</Link>
                        <div className="indicator"></div>
                    </div>
                </Magnetic> */}
                {/* <Magnetic>
                    <div className="el">
                        <Link href='/about'>About</Link>
                        <div className="indicator"></div>
                    </div>
                </Magnetic> */}
                <Magnetic>
                    <div className="el">
                        <Link href='/contact'>Contact</Link>
                        <div className="indicator"></div>
                    </div>
                </Magnetic>
            </div>
        </div>
    )
}