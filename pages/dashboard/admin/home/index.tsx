import Image from 'next/image'
import banner from '../../../../src/assets/images/banner.jpg'
import banner2 from '../../../../src/assets/images/banner-2.jpg'
import Styles from './styles.module.scss'
import DashboardMember from '..'

const Home = () => {
    const news = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex gap-4">
                    <div className={`${Styles.TitleDivider} w-2`}></div>
                    <p className="text-xl font-bold">DASHBOARD</p>
                </div>

                <div className="mt-8 h-px bg-gray-200"></div>

                <div className="p-4 rounded-md bg-gray-100">
                    <div className={`${Styles.saldo} px-4 py-12 rounded-xl`}>
                        <p className="text-xl font-bold">SALDO</p>
                        <p className="text-4xl font-bold">50.000.000.000 </p>
                    </div>

                    <div className="mt-8">
                        <div className="flex gap-2">
                            <div className={`${Styles.TitleDivider} w-1`}></div>
                            <p className="text-lg text-black font-bold">DATA HARI INI</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4 rounded-md">
                            <div className={`${Styles.card} ${Styles.yellow} shadow-lg p-4`}>
                                <p className="font-bold">Transaksi</p>
                                <p className="text-2xl text-center font-bold">70</p>
                            </div>
                            <div className={`${Styles.card} ${Styles.yellow} shadow-lg p-4`}>
                                <p className="font-bold">Pengguna</p>
                                <p className="text-2xl text-center font-bold">70</p>
                            </div>
                            <div className={`${Styles.card} ${Styles.yellow} shadow-lg p-4`}>
                                <p className="font-bold">Omset</p>
                                <p className="text-2xl text-center font-bold">70</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex gap-2">
                            <div className={`${Styles.TitleDivider} w-1`}></div>
                            <p className="text-lg text-black font-bold">DATA BULAN INI</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4 rounded-md">
                            <div className={`${Styles.card} ${Styles.yellow} shadow-lg p-4`}>
                                <p className="font-bold">Transaksi</p>
                                <p className="text-2xl text-center font-bold">70</p>
                            </div>
                            <div className={`${Styles.card} ${Styles.yellow} shadow-lg p-4`}>
                                <p className="font-bold">Pengguna</p>
                                <p className="text-2xl text-center font-bold">70</p>
                            </div>
                            <div className={`${Styles.card} ${Styles.yellow} shadow-lg p-4`}>
                                <p className="font-bold">Omset</p>
                                <p className="text-2xl text-center font-bold">70</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex gap-2">
                            <div className={`${Styles.TitleDivider} w-1`}></div>
                            <p className="text-lg text-black font-bold">DATA SEMUA</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4 rounded-md">
                            <div className={`${Styles.card} ${Styles.yellow} shadow-lg p-4`}>
                                <p className="font-bold">Transaksi</p>
                                <p className="text-2xl text-center font-bold">70</p>
                            </div>
                            <div className={`${Styles.card} ${Styles.yellow} shadow-lg p-4`}>
                                <p className="font-bold">Pengguna</p>
                                <p className="text-2xl text-center font-bold">70</p>
                            </div>
                            <div className={`${Styles.card} ${Styles.yellow} shadow-lg p-4`}>
                                <p className="font-bold">Omset</p>
                                <p className="text-2xl text-center font-bold">70</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </DashboardMember>
    )
}

export default Home
