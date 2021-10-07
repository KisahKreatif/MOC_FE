import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../src/assets/images/logo/logo.png';
import Bar from '../../../src/assets/svg/Bar.svg';
import Cart from '../../../src/assets/svg/Cart-Outline.svg';
import Bell from '../../../src/assets/svg/Bell_pin.svg';
import Square from '../../../src/assets/svg/Full.svg';
import styles from './styles.module.scss';

const Navbar = () => {
    return (
        <div className={`${styles.navbar} flex items-center justify-between py-4 px-8`}>
            <div className="flex gap-4 items-center">
                <div className="cursor-pointer">
                    <Image
                        src={Bar}
                        width={30}
                        height={30}
                        alt="MOC Bar"
                    />
                </div>
                <div className="logo">
                    <Image
                        src={Logo}
                        width={70}
                        height={50}
                        alt="MOC Logo"
                    />
                </div>
            </div>
            <div className="">
                <nav>
                    <ul className="flex gap-8">
                        <li>
                            <Link href="/">
                                <a>
                                    <Image
                                        src={Cart}
                                        width={30}
                                        height={30}
                                        alt="MOC Logo"
                                    />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <Image
                                        src={Bell}
                                        width={30}
                                        height={30}
                                        alt="MOC Logo"
                                    />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <Image
                                        src={Square}
                                        width={30}
                                        height={30}
                                        alt="MOC Logo"
                                    />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar