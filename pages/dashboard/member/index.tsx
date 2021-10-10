import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from "react"
import Header from "../../../src/components/Head"
import Styles from './styles.module.scss'
import Logo from '../../../src/assets/images/logo/logo.png';
import Bar from '../../../src/assets/svg/Bar.svg';
import Cart from '../../../src/assets/svg/Cart-Outline.svg';
import Bell from '../../../src/assets/svg/Bell_pin.svg';
import Square from '../../../src/assets/svg/Full.svg';
import Chat from '../../../src/assets/svg/Chat.svg';
import Widget from '../../../src/assets/svg/Widget_alt.svg';
import Shop from '../../../src/assets/svg/Shop.svg';
import OutBox from '../../../src/assets/svg/Img_out-box.svg';
import BlankAlt from '../../../src/assets/svg/Blank_alt.svg';
import File from '../../../src/assets/svg/File.svg';
import Gift from '../../../src/assets/svg/Gift.svg';
import Box from '../../../src/assets/svg/Box.svg';
import group_share from '../../../src/assets/svg/group_share.svg';
import chevrontD from '../../../src/assets/svg/chevront-D.svg';
import { useRouter } from "next/router"

const DashboardMember = ({ children }: any) => {
    const router = useRouter()
    const [sideBar, setSideBar] = useState(false)
    const [childProduct, setChildProduct] = useState(false)

    const goTo = (routeName: any) => {
        router.push(routeName)
    }

    return (
        <div className={Styles.page}>
            <Header page="Dashboard Member" />

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
                        onClick={() => goTo('/dashboard/member/home')}
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

            <div className={` ${sideBar ? 'flex' : ''}`}>
                <div className={`${sideBar ? `p-4 flex overflow-y-auto sticky top-16 ${Styles.sidebar}` : Styles.sidebarHide}`}>
                    <ul className="" >
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/messages">
                                <a className="flex gap-4 items-center" >
                                    <Image
                                        src={Chat}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex" >Pesan</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/member/leader-board">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={Widget}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">LeaderBoard</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`mt-4`}>
                            <div
                                className={`${Styles.sideNav} px-4 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}
                                onClick={() => setChildProduct(!childProduct)}
                            >
                                <Image
                                    src={Shop}
                                    alt="Icon"
                                    width={30}
                                    height={30}
                                />
                                <p className="hidden md:flex">All Produk</p>
                            </div>
                            <ul className={`${childProduct ? Styles.childProduct : `hidden`} ml-4`} >
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/member/products/course')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p >Course</p>
                                </li>
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/member/products/produk-fisik')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p>Produk</p>
                                </li>
                            </ul>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/member/leader-board">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={group_share}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">Afiliasi</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/member/leader-board">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={Box}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">My Order</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/member/leader-board">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={Gift}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">My Reward</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/member/leader-board">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={File}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">History Reward</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/member/leader-board">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={BlankAlt}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">My Course</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/member/leader-board">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={OutBox}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">Media Promosi</p>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={`${sideBar ? "flex-grow" : ""}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}


export default DashboardMember
