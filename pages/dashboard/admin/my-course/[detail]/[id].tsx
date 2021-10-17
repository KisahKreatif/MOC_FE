import { useState } from "react"
import Image from 'next/image'
import Header from "../../../../../src/components/Head"
import Navbar from "../../../../../src/components/Navbar"
import Styles from './styles.module.scss'
import ILSending from '../../../../../src/assets/svg/Sending.svg'
import ILChecklist from '../../../../../src/assets/images/checklist.png'

const Messages = () => {
    const [sideBar, setSideBar] = useState(false)
    const [selected, setSelected] = useState(null)

    return (
        <div className={Styles.page}>
            <Header page="My Course" />
            <Navbar setSideBar={setSideBar} sideBar={sideBar} routeName="/dashboard/member/home" />
            <div className={`${Styles.profile} border-b border-gray-600`}>
                <div className="flex px-8 py-4 gap-4 items-center w-full">
                    <div className="w-64">
                        <p className={`${Styles.title} font-bold text-xl`}>Moc Membership</p>
                    </div>
                    <div className="w-full">
                        <p className="text-white text-xs">Progress</p>
                        <div className="mt-2 relative">
                            <div className="h-4 w-full rounded-sm bg-gray-300"></div>
                            <div className="h-4 w-1/4 absolute top-0 left-0 rounded-sm bg-blue-600 z-20 text-white text-center text-xs">11%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">

                <div className={`p-4 overflow-y-auto h-screen sticky top-0 border-r border-gray-600 ${Styles.sidebar}`}>
                    <div className={`${Styles.bab} text-center py-2 rounded-md w-64 font-bold`}>BAB: Langkah memulainya</div>
                    <ul className="mt-4">
                        <li className={`flex gap-4 items-center`}>
                            <div className="w-6">
                                <Image
                                    src={ILChecklist}
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className={`${Styles.badge} w-64 px-4 py-2 rounded-md font-bold`}>Dapatkan Hasil Optimal dari Execution Plan</div>
                        </li>
                        <li className={`flex gap-4 mt-4 items-center`}>
                            <div className="w-6">
                                <Image
                                    src={ILChecklist}
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className={`bg-gray-100 w-64 text-black px-4 py-2 rounded-md`}>Tutorial Aplikasi Bisnis Master Online Community (MOC) </div>
                        </li>
                        <li className={`flex gap-4 mt-4 items-center`}>
                            <div className="w-6">
                            </div>
                            <div className={`bg-gray-100 w-64 text-black px-4 py-2 rounded-md`}>Tutorial Aplikasi Bisnis Master Online Community (MOC) </div>
                        </li>
                        <li className={`flex gap-4 mt-4 items-center`}>
                            <div className="w-6">
                            </div>
                            <div className={`bg-gray-100 w-64 text-black px-4 py-2 rounded-md`}>Tutorial Aplikasi Bisnis Master Online Community (MOC) </div>
                        </li>
                        <li className={`flex gap-4 mt-4 items-center`}>
                            <div className="w-6">
                            </div>
                            <div className={`bg-gray-100 w-64 text-black px-4 py-2 rounded-md`}>Tutorial Aplikasi Bisnis Master Online Community (MOC) </div>
                        </li>
                    </ul>

                    <div className={`${Styles.bab} mt-4 text-center py-2 rounded-md w-64 font-bold`}>BAB: Langkah memulainya</div>
                    <ul className="mt-4">
                        <li className={`flex gap-4 items-center`}>
                            <div className="w-6">
                                <Image
                                    src={ILChecklist}
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className={`${Styles.badge} w-64 px-4 py-2 rounded-md font-bold`}>Dapatkan Hasil Optimal dari Execution Plan</div>
                        </li>
                        <li className={`flex gap-4 mt-4 items-center`}>
                            <div className="w-6">
                                <Image
                                    src={ILChecklist}
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className={`bg-gray-100 w-64 text-black px-4 py-2 rounded-md`}>Tutorial Aplikasi Bisnis Master Online Community (MOC) </div>
                        </li>
                        <li className={`flex gap-4 mt-4 items-center`}>
                            <div className="w-6">
                            </div>
                            <div className={`bg-gray-100 w-64 text-black px-4 py-2 rounded-md`}>Tutorial Aplikasi Bisnis Master Online Community (MOC) </div>
                        </li>
                        <li className={`flex gap-4 mt-4 items-center`}>
                            <div className="w-6">
                            </div>
                            <div className={`bg-gray-100 w-64 text-black px-4 py-2 rounded-md`}>Tutorial Aplikasi Bisnis Master Online Community (MOC) </div>
                        </li>
                        <li className={`flex gap-4 mt-4 items-center`}>
                            <div className="w-6">
                            </div>
                            <div className={`bg-gray-100 w-64 text-black px-4 py-2 rounded-md`}>Tutorial Aplikasi Bisnis Master Online Community (MOC) </div>
                        </li>
                    </ul>
                </div>

                <div className="flex-grow w-3/4 p-4">
                    <div className="flex flex-col justify-between h-full">
                        <div className="p-4 bg-gray-100 rounded-lg text-black">
                            <p className="text-xl font-bold">Dapatkan Hasil Optimal dari Execution Plan</p>

                            <p>Sebelum memulai langkah Anda menjalankan Bisnis Online di Master Online Community. Saya sangat percaya Tujuan Utama Anda untuk bergabung di Master Online Community adalah untuk lebih Berhasil mengembangkan Bisnis Online Anda dan menjadi “Orang yang lebih Sukses” apapun latar belakang dan kondisi Anda saat ini. Dan Saya sangat percaya jika Anda sudah punya Tujuan Hidup yang ingin Anda capai di tahun ini, tentunya Anda mau berkomitmen dan berani keluar dari Zona Nyaman Anda untuk menjadi lebih Berhasil. Setuju atau Setuju banget Jika jawabannya YA SETUJU BANGET Pastikan Anda tidak melewatkan step by step Program Mentoring ini, karna jika Anda melewati beberapa step dan tidak mengerjakan Program Mentoring Anda dengan baik dan sempurna, kemungkinan besar Anda adalah Orang yang suka “Menunda” akan suatu Perubahan dan Anda akan lebih lambat berhasil di Master Online Community. Dan Saya sangat Percaya Anda adalah Orang yang sangat berkomitmen akan Tujuan Hidup yang ingin Anda capai, Anda kenal Identitas Terbaik dalam diri Anda, dan karna itulah Anda akan mengikuti, menonton dan mengisi semua Program Mentoring yang dibuat khusus untuk Anda agar berhasil di Bisnis Online Master Online Community Selamat mengambil sebuah Komitmen dan Saya Percaya seperti Team Bisnis kami juga yang sudah berhasil di Bisnis Online MOC, semua memulai sama seperti Anda dengan berbagai latar belakang, profesi,tujuan hidup apapun dan akhirnya Berhasil, jadi Anda punya Potensi sama ataupun jauh lebih besar untuk berhasil sama seperti mereka. Selamat mengikuti Program Mentoring kami untuk membantu Anda mencapai Penghasilan Besar dan Membangun Team Bisnis Anda untuk mencapai Kebebasan Finansial dan Waktu untuk Hidup Anda melalui Bisnis Master Online Community Founder Master Online Community</p>
                        </div>

                        <div className="flex justify-end">
                            <div className="cursor-pointer px-4 py-2 rounded-md bg-green-600 w-48 text-center text-white">Tandai telah dibaca</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Messages
