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
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarts } from '../../../store/reducers/cart'

const DashboardMember = ({ children }: any) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [sideBar, setSideBar] = useState(false)
    const [childProduct, setChildProduct] = useState(false)
    const [childAfliasi, setChildAfliasi] = useState(false)
    const [childOrder, setChildOrder] = useState(false)
    const [sideNavAbsolute, setSideNavAbsolute] = useState(false)
    const [profile, setProfile] = useState(false)
    const [notification, setNotification] = useState(false)
    const carts = useSelector(({ carts }: any) => carts.Carts)

    useEffect(() => {
        const role = localStorage.getItem('role')
        const access_token = localStorage.getItem('access_token')
        if (!access_token) {
            router.push('/auth/login')
        }
        if (role !== 'member') {
            if (role === 'admin') {
                router.push('/dashboard/admin/home')
            }
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token) dispatch(fetchCarts(token))
    }, [])

    const goTo = (routeName: any) => {
        if (routeName === '/dashboard/member/my-order/course') {
            setSideNavAbsolute(true)
        } else setSideNavAbsolute(false)
        console.log(sideNavAbsolute, "<< sideNavAbsolute");

        router.push(routeName)
    }

    const logout = () => {
        localStorage.clear()
        router.push('/auth/login')
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
                                <Link href="/dashboard/cart">
                                    <a className="relative">
                                        <Image
                                            src={Cart}
                                            width={30}
                                            height={30}
                                            alt="MOC Logo"
                                        />
                                        <div className="absolute w-full h-full -top-4 right-0 flex justify-end">
                                            <div className="w-4 h-4 rounded-full bg-red-600 z-20 text-xs text-center">
                                                {carts?.length}
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li className="relative">
                                <Image
                                    src={Bell}
                                    width={30}
                                    height={30}
                                    alt="MOC Logo"
                                    className="cursor-pointer"
                                    onClick={() => setNotification(!notification)}
                                />
                                {notification && (
                                    <div className="absolute shadow-lg right-0 w-96 p-2 rounded-md bg-white text-black">
                                        <ul>
                                            <li className="border-b-2 p-2 border-gray-300">
                                                <p className="font-bold">Admin MOC</p>
                                                <p className="text-sm">Selamat Bergabung dengan keluarga MOC Member</p>
                                                <div className="flex justify-end mt-4">
                                                    <p className="text-sm text-gray-400">4 menit yang lalu</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="cursor-pointer mt-4 bg-yellow-400 rounded-md p-2 text-white text-center font-bold">
                                            Cek semua notifikasi
                                        </div>
                                    </div>
                                )}
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
                                    <div onClick={() => setProfile(!profile)} className="flex gap-4 items-center cursor-pointer">
                                        <p className="text-sm">Member</p>
                                        <Image
                                            src={chevrontD}
                                            width={10}
                                            height={10}
                                            alt="Icons"
                                        />
                                    </div>
                                </div>
                                <div className={`${profile ? `${Styles.profile}` : `${Styles.profileHide}`} absolute top-16 left-0 w-full bg-white text-black p-2 rounded-b-md`}>
                                    <ul className={profile ? '' : 'hidden'}>
                                        <li className="cursor-pointer mt-2">Profile</li>
                                        <li className="cursor-pointer mt-2" onClick={logout}>Logout</li>
                                    </ul>
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
                                    onClick={() => goTo('/dashboard/member/afiliasi/link')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p className="text-sm">Link</p>
                                </li>
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/member/afiliasi/komisi-course')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p className="text-sm">Komisi Course</p>
                                </li>
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/member/afiliasi/komisi-fisik')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p className="text-sm">Komisi Fisik</p>
                                </li>
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/member/afiliasi/status')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p className="text-sm">Status</p>
                                </li>
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/member/afiliasi/facebook-pixel')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p className="text-sm">Facebook Pixel</p>
                                </li>
                            </ul>
                        </li>
                        <li className={`mt-4`}>
                            <div
                                className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer flex gap-4 items-center`}
                                onClick={() => setChildOrder(!childOrder)}
                            >
                                <Image
                                    src={Box}
                                    alt="Icon"
                                    width={30}
                                    height={30}
                                />
                                <p className="hidden md:flex">My Order</p>
                            </div>
                            <ul className={`${childOrder ? Styles.childProduct : `hidden`} ml-4`} >
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/member/my-order/course')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p >Course</p>
                                </li>
                                <li
                                    className={`${Styles.allProduct} flex gap-4 items-center px-4 py-2 mt-4 rounded-lg cursor-pointer`}
                                    onClick={() => goTo('/dashboard/member/my-order/product')}
                                >
                                    <div className={`${Styles.strip} h-1 w-6`}></div>
                                    <p>Product</p>
                                </li>
                            </ul>
                        </li>
                        <li className={`${Styles.sideNav} px-4 py-2 mt-4 rounded-lg cursor-pointer`}>
                            <Link href="/dashboard/member/my-reward">
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
                            <Link href="/dashboard/member/my-course">
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
                            <Link href="/dashboard/member/promotion-media">
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

                <div className={`${sideBar ? "w-4/5" : ""}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}


export default DashboardMember
