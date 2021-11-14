import Image from 'next/image'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider, { Settings } from "react-slick"
import banner from '../../../../src/assets/images/banner.jpg'
import banner2 from '../../../../src/assets/images/banner-2.jpg'
import Styles from './styles.module.scss'
import DashboardMember from '..'
import { NextPage } from 'next'
import wrapper from '../../../../store'
import { fetchBanners } from '../../../../store/reducers/banner'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import myLoader from '../../../../src/helpers/loadImage'
import { fetchNews } from '../../../../store/reducers/news'
import { fetchCurrentUser } from '../../../../store/reducers/user'

const Home: NextPage = () => {
    const dispatch = useDispatch()
    const settings: Settings = {
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }

    const banners = useSelector(({ banners }: any) => banners.Banners)
    const news = useSelector(({ news }: any) => news.News)
    const user = useSelector(({ user }: any) => user.CurrentUser)

    useEffect(() => {
        dispatch(fetchBanners())
        dispatch(fetchNews('', true))
        const token = localStorage.getItem('access_token')
        if (token) dispatch(fetchCurrentUser(token))
    }, [])

    return (
        <DashboardMember>
            <div className="py-8 px-24">
                <div className="banner">
                    <Slider {...settings}>
                        {banners && banners?.map((item: any) => (
                            <div key={item.id} className="">
                                <Image
                                    loader={myLoader}
                                    src={item.img}
                                    width={100}
                                    height={50}
                                    alt="banner"
                                    layout="responsive"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="news mt-12">
                    <div className="title flex gap-2">
                        <div className={`${Styles.TitleDivider} w-2`}></div>
                        <p className="text-xl font-bold">BERITA PENTING</p>
                    </div>

                    <div className={`${Styles.newsContent} mt-8 rounded-lg p-8 bg-gray-100`}>
                        {news && news?.map((el: any) => (
                            <div
                                key={el.id}
                                className=""
                            >
                                <div
                                    className={`mt-8 flex gap-4 items-center`}
                                >
                                    <div className="">
                                        {el?.img && (
                                            <Image
                                                loader={myLoader}
                                                src={el?.img}
                                                width={200}
                                                height={100}
                                                alt="banner"
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="">
                                        <p className="text-lg">{el?.judul}</p>
                                        <p className="text-xl">{el?.deskripsi}</p>
                                    </div>
                                </div>
                                <div className="h-px bg-gray-300 mt-2"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="dashboard mt-12">
                    <div>
                        <div className="title flex gap-2">
                            <div className={`${Styles.TitleDivider} w-2`}></div>
                            <div className="flex gap-2 items center">
                                <p className="text-xl font-bold">DASHBOARD</p>
                                <div className="cursor-pointer py-1 text-sm px-4 bg-red-600">
                                    Reseller
                                </div>
                                <div className="cursor-pointer py-1 text-sm px-4 bg-green-600">
                                    Affiliate
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 ml-4">
                            <p className="text-lg">Tanggal daftar : 31-Jan-2021, Masa Aktif User: Life Time</p>
                        </div>
                        <div className="h-px bg-gray-300 mt-2"></div>
                    </div>
                    <div className={`${Styles.dashboard} p-4 mt-4`}>
                        <div className="flex gap-4">
                            <div className="w-1/3 h-full">
                                <div className={`${Styles.dashboardContent} p-4 h-64 rounded-lg flex-none`}>
                                    <div className="flex gap-4">
                                        <div className={`${Styles.TitleDivider} w-2`}></div>
                                        <p className={`${Styles.title} text-2xl`}>KOMISI</p>
                                    </div>
                                    <div className="h-full flex items-center justify-center" >
                                        <p className="text-6xl font-bold">0</p>
                                    </div>
                                </div>
                                <div className={`${Styles.dashboardContent} mt-4 h-36 p-4 rounded-lg flex-none`}>
                                    <div className="flex gap-4">
                                        <div className={`${Styles.TitleDivider} w-2`}></div>
                                        <p className={`${Styles.title} text-xl`}>Total omzet</p>
                                    </div>
                                    <div className="h-full flex items-center justify-center" >
                                        <p className="text-2xl font-bold">0</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div>
                                    <div className="flex gap-4">
                                        <div className={`${Styles.TitleDivider} w-2`}></div>
                                        <p className="text-xl">Data Hari Ini</p>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2 mt-4">
                                        <div className={`${Styles.dashboardContent} p-2 col-span-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>POINT</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">{user?.point}</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles.dashboardContent} p-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>Invitation</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">0</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles.dashboardContent} p-2 col-span-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>Omzet</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">0</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4" >
                                    <div className="flex gap-4">
                                        <div className={`${Styles.TitleDivider} w-2`}></div>
                                        <p className="text-xl">Data Bulan Ini</p>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2 mt-4">
                                        <div className={`${Styles.dashboardContent} p-2 col-span-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>POINT</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">0</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles.dashboardContent} p-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>Invitation</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">0</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles.dashboardContent} p-2 col-span-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>Omzet</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">0</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4" >
                                    <div className="flex gap-4">
                                        <div className={`${Styles.TitleDivider} w-2`}></div>
                                        <p className="text-xl">Data Semua</p>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2 mt-4">
                                        <div className={`${Styles.dashboardContent} p-2 col-span-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>POINT</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">0</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles.dashboardContent} p-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>Invitation</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">0</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles.dashboardContent} p-2 col-span-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>Omzet</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">0</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardMember>
    )
}

Home.getInitialProps = wrapper.getInitialPageProps(store => () => {
    store.dispatch(fetchBanners())
    store.dispatch(fetchNews('', true))
})

export default Home
