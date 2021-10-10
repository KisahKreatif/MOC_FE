import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../src/assets/images/logo/logo.png';
import Bar from '../../../src/assets/svg/Bar.svg';
import Cart from '../../../src/assets/svg/Cart-Outline.svg';
import Bell from '../../../src/assets/svg/Bell_pin.svg';
import Square from '../../../src/assets/svg/Full.svg';
import chevrontD from '../../../src/assets/svg/chevront-D.svg';
import Styles from './styles.module.scss';
import { useRouter } from 'next/router';

const Navbar = ({ setSideBar, sideBar, routeName }: any) => {
    const router = useRouter()

    return (
        <div className={`${Styles.navbar} sticky top-0 z-50 flex items-center justify-between py-4 px-8`}>
            <div className="flex gap-4 items-center">
                <div className="cursor-pointer" onClick={() => setSideBar(!sideBar)}>
                    <Image
                        src={Bar}
                        width={30}
                        height={30}
                        alt="MOC Bar"
                    />
                </div>
                <div
                    className="logo cursor-pointer"
                    onClick={() => router.push(routeName)}
                >
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
                    <ul className="flex gap-8 items-center">
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
                        <li className="flex gap-2 items-center" >
                            <div className="w-px h-8 bg-gray-400"></div>
                            <div className="w-12 h-12 rounded-full bg-gray-100"></div>
                            <div style={{ color: "#FF9F1C" }}>
                                <p className="text-md font-bold">Testing Account</p>
                                <div className="flex gap-4 items-center cursor-pointer">
                                    <p className="text-sm">Member</p>
                                    <Image
                                        src={chevrontD}
                                        width={10}
                                        height={10}
                                        alt="Icons"
                                    />
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar