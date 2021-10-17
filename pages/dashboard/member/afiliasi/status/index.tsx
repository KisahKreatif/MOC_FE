import Image from 'next/image'
import DashboardMember from "../.."
import Styles from './styles.module.scss'
import filter from '../../../../../src/assets/svg/filter.svg'
import WhatsApp from '../../../../../src/assets/images/chat-with-us.png'

const StatusAfiliasi = () => {
    return (
        <DashboardMember>
            <div className="py-8 px-16">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="w-2 bg-yellow-500"></div>
                        <p className="text-2xl font-bold">STATUS AFILIASI</p>
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
                    <table className={`${Styles.table} w-full`} >
                        <tr className={`${Styles.thead}`} >
                            <th>No</th>
                            <th>Nama Pembeli</th>
                            <th>Nama Barang</th>
                            <th>WhatsApp</th>
                            <th>Harga</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr className={`${Styles.tbody} cursor-pointer`} >
                            <td>1.</td>
                            <td className="" >
                                <div className="flex gap-4 items-center">
                                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                    <p>Danuar Riyaldi</p>
                                </div>
                            </td>
                            <td>Premium Membership</td>
                            <td className="cursor-pointer" >
                                <Image
                                    src={WhatsApp}
                                    width={150}
                                    height={40}
                                    className="object-cover"
                                />
                            </td>
                            <td>940 Transaksi</td>
                            <td>940 Transaksi</td>
                            <td>
                                <div className={`${Styles.badgePrimary} rounded-md py-2 px-4`}>
                                    <p className="text-xs text-center">Expaired</p>
                                </div>
                            </td>
                            <td>
                                <div className={`${Styles.badgeSecondary} rounded-md py-2 px-4`}>
                                    <p className="text-xs text-center">Detail</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </DashboardMember>
    )
}

export default StatusAfiliasi
