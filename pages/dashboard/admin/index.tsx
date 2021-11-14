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
import group_share from '../../../src/assets/svg/group_share.svg';
import chevrontD from '../../../src/assets/svg/chevront-D.svg';
import UserBox from '../../../src/assets/svg/User_box.svg';
import FolderAlt from '../../../src/assets/svg/Folder_alt.svg';
import SignInsqure from '../../../src/assets/svg/Sign_in_squre.svg';
import Ticket from '../../../src/assets/svg/Ticket.svg';
import Copy from '../../../src/assets/svg/Copy.svg';
import Retangles from '../../../src/assets/svg/Retangles.svg';
import Star1 from '../../../src/assets/svg/Star1.svg';
import Server from '../../../src/assets/svg/Server.svg';
import ScanAlt from '../../../src/assets/svg/Scan_alt.svg';
import SortListAlt from '../../../src/assets/svg/Sort_list_alt.svg';
import Chart from '../../../src/assets/svg/Chart.svg';
import Send from '../../../src/assets/svg/Send1.svg';
import { useRouter } from "next/router";

const DashboardAdmin = ({ children }: any) => {
    const router = useRouter()
    const [sideBar, setSideBar] = useState(true)
    const [childTransaction, setChildTransaction] = useState(false)
    const [childAfliasi, setChildAfliasi] = useState(false)
    const [sideNavAbsolute, setSideNavAbsolute] = useState(false)
    const [childProduct, setChildProduct] = useState(false)
    const [profile, setProfile] = useState(false)

    useEffect(() => {
        const role = localStorage.getItem('role')
        const access_token = localStorage.getItem('access_token')
        if (!access_token) {
            router.push('/auth/login')
        }
        if (role !== 'admin') {
            if (role === 'member') {
                router.push('/dashboard/member/home')
            }
        }
    }, [])

    const goTo = (routeName: any) => {
        if (routeName === '/dashboard/admin/my-order/course') {
            console.log('here');
            setSideNavAbsolute(true)
        } else setSideNavAbsolute(false)

        router.push(routeName)
    }

    const logout = () => {
        localStorage.clear()
        router.push('/auth/login')
    }

    return (
        <div className={Styles.page}>
            <Header page="Dashboard Admin" />

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
                        onClick={() => goTo('/dashboard/admin/home')}
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
                            <li className="flex gap-2 items-center relative" >
                                <div className="w-px h-8 bg-gray-400"></div>
                                <div className="w-12 h-12 rounded-full bg-gray-100"></div>
                                <div style={{ color: "#FF9F1C" }}>
                                    <p className="text-md font-bold">Testing Account</p>
                                    <div className="flex gap-4 items-center cursor-pointer" onClick={() => setProfile(!profile)}>
                                        <p className="text-sm">Admin</p>
                                        <Image
                                            src={chevrontD}
                                            width={10}
                                            height={10}
                                            alt="Icons"
                                        />
                                    </div>
                                </div>
                                <div className={`${profile ? `${Styles.profile}` : `${Styles.profileHide}`} absolute top-16 left-0 w-full bg-white text-black p-2 rounded-b-md`}>
                                    {profile && (
                                        <ul>
                                            <li className="cursor-pointer mt-2">Profile</li>
                                            <li className="cursor-pointer mt-2" onClick={logout}>Logout</li>
                                        </ul>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className={` ${sideBar ? 'flex' : ''}`}>
                <div className={`${sideBar ? `sticky w-66 z-40 p-4 overflow-y-auto top-16 flex ${Styles.sidebar}` : `${Styles.sidebarHide} hidden`}`}>
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
                            <Link href="/dashboard/admin/leader-board">
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
                                className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer flex gap-4 items-center`}
                                onClick={() => setChildAfliasi(!childAfliasi)}
                            >
                                <Image
                                    src={group_share}
                                    alt="Icon"
                                    width={30}
                                    height={30}
                                />
                                <p className="hidden md:flex">Afiliasi</p>
                            </div>
                            <ul className={`${childAfliasi ? Styles.childProduct : `hidden`} ml-4`} >
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/admin/afiliasi/link')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p className="text-sm">Link</p>
                                </li>
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/admin/afiliasi/komisi-course')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p className="text-sm">Komisi Course</p>
                                </li>
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/admin/afiliasi/komisi-fisik')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p className="text-sm">Komisi Fisik</p>
                                </li>
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/admin/afiliasi/status')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p className="text-sm">Status</p>
                                </li>
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/admin/afiliasi/facebook-pixel')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p className="text-sm">Facebook Pixel</p>
                                </li>
                            </ul>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/admin/user-list">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={UserBox}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">List User</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/admin/news">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={FolderAlt}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">Kelola Berita</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/admin/banner">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={SignInsqure}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">Kelola Banner</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/admin/coupon">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={Ticket}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">Kelola Kupon</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`mt-4`}>
                            <div
                                className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer flex gap-4 items-center`}
                                onClick={() => setChildTransaction(!childTransaction)}
                            >
                                <Image
                                    src={group_share}
                                    alt="Icon"
                                    width={30}
                                    height={30}
                                />
                                <p className="hidden md:flex">Transaksi</p>
                            </div>
                            <ul className={`${childTransaction ? Styles.childProduct : `hidden`} ml-4`} >
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/admin/transaction/product')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p className="text-sm">Produk Fisik</p>
                                </li>
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/admin/transaction/course')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p className="text-sm">Course</p>
                                </li>
                            </ul>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/admin/manage-bank">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={Retangles}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">Kelola Bank</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/admin/reward">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={Star1}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">Reward</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/admin/reward-history">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={Server}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">History Reward</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/admin/withdraw">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={ScanAlt}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">Pencairan Dana</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/admin/withdraw-history">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={SortListAlt}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">Riwayat Pencairan Dana</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/admin/ekspedisi">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={Send}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">Kelola Ekspedisi</p>
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
                                <p className="hidden md:flex">Kelola Produk</p>
                            </div>
                            <ul className={`${childProduct ? Styles.childProduct : `hidden`} ml-4`} >
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/admin/products/course')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p >Course</p>
                                </li>
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/admin/products/produk-fisik')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p>Produk</p>
                                </li>
                            </ul>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/admin/paket">
                                <a className="flex gap-4 items-center">
                                    <Image
                                        src={ScanAlt}
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="hidden md:flex">Paket</p>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={`${sideBar ? "w-4/5" : ""}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}


export default DashboardAdmin
