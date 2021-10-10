import Image from 'next/image'
import banner from '../../../../src/assets/images/banner.jpg'
import banner2 from '../../../../src/assets/images/banner-2.jpg'
import Styles from './styles.module.scss'
import DashboardMember from '..'

const Home = () => {
    const news = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <DashboardMember>
            <div className="py-8 px-24">
                <div className="banner">
                    <Image
                        src={banner}
                        width={100}
                        height={50}
                        alt="banner"
                        layout="responsive"
                        className="object-cover"
                    />
                </div>

                <div className="news mt-12">
                    <div className="title flex gap-2">
                        <div className={`${Styles.TitleDivider} w-2`}></div>
                        <p className="text-xl font-bold">BERITA PENTING</p>
                    </div>

                    <div className={`${Styles.newsContent} mt-8 rounded-lg p-8 bg-gray-100`}>
                        {news.map((el: any) => (
                            <div
                                key={el}
                                className=""
                            >
                                <div
                                    className={`${el > 1 ? "mt-8" : ""} flex gap-4 items-center`}
                                >
                                    <div className="">
                                        <Image
                                            src={banner2}
                                            width={200}
                                            height={100}
                                            alt="banner"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="">
                                        <p className="text-lg">Berita {el}</p>
                                        <p className="text-xl">JUALAN ONLINE DAPAT EMAS GRATIS SEBANYAK BANYAKNYA!! </p>
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
                            <div className={`${Styles.dashboardContent} p-4 w-1/3 rounded-lg flex-none`}>
                                <div className="flex gap-4">
                                    <div className={`${Styles.TitleDivider} w-2`}></div>
                                    <p className={`${Styles.title} text-2xl`}>KOMISI</p>
                                </div>
                                <div className="h-full flex items-center justify-center" >
                                    <p className="text-6xl font-bold">24</p>
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
                                                <p className="text-2xl text-center font-bold">70</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles.dashboardContent} p-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>Invitation</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">70</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles.dashboardContent} p-2 col-span-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>Product Sale</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">70</p>
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
                                                <p className="text-2xl text-center font-bold">70</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles.dashboardContent} p-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>Invitation</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">70</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles.dashboardContent} p-2 col-span-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>Product Sale</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">70</p>
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
                                                <p className="text-2xl text-center font-bold">70</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles.dashboardContent} p-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>Invitation</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">70</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles.dashboardContent} p-2 col-span-2 rounded-md flex-none`}>
                                            <div className="">
                                                <p className={`${Styles.title} text-sm`}>Product Sale</p>
                                            </div>
                                            <div className="pb-4">
                                                <p className="text-2xl text-center font-bold">70</p>
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

export default Home
