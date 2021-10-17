import Image from 'next/image'
import DashboardMember from "../.."
import Styles from './styles.module.scss'
import filter from '../../../../../src/assets/svg/filter.svg'

const ComissionCourse = () => {
    return (
        <DashboardMember>
            <div className="py-8 px-16">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="w-2 bg-yellow-500"></div>
                        <p className="text-2xl font-bold">KOMISI COURSE</p>
                    </div>
                    <div className="flex gap-4">
                        <input type="text" name="search" className={`${Styles.input} px-4 py-2 rounded-lg`} placeholder="Cari Nama" />
                        <div className={`${Styles.input} flex gap-4 cursor-pointer py-2 px-4`}>
                            <Image
                                src={filter}
                                width={20}
                                height={20}
                                alt="icon"
                            />
                            <p className={Styles.filter}>Filter</p>
                        </div>
                    </div>
                </div>
                <div className={`mt-8`}>
                    <table className={`${Styles.table}`} >
                        <tr className={`${Styles.thead}`} >
                            <th>No</th>
                            <th>User</th>
                            <th>Nama Produk</th>
                            <th>Tanggal Transaksi</th>
                            <th>Total Komisi</th>
                            <th>Status</th>
                        </tr>
                        <tr className={`${Styles.tbody} cursor-pointer`} >
                            <td>1.</td>
                            <td className="flex gap-4 items-center" >
                                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                <p>Danuar Riyaldi</p>
                            </td>
                            <td>Produk 1</td>
                            <td>940 Transaksi</td>
                            <td>940 Transaksi</td>
                            <td>
                                <div className={`${Styles.badgePrimary} rounded-md py-2`}>
                                    <p className="text-xs text-center">Menunggu Pembayaran</p>
                                </div>
                            </td>
                        </tr>
                        <tr className={`${Styles.tbody} cursor-pointer`} >
                            <td>1.</td>
                            <td className="flex gap-4 items-center" >
                                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                <p>Danuar Riyaldi</p>
                            </td>
                            <td>Produk 1</td>
                            <td>940 Transaksi</td>
                            <td>940 Transaksi</td>
                            <td>
                                <div className={`${Styles.badgeSecondary} rounded-md py-2`}>
                                    <p className="text-xs text-center">Sudah Bayar</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </DashboardMember>
    )
}

export default ComissionCourse
