import Image from "next/image"
import DashboardMember from ".."
import Styles from './styles.module.scss'
import filter from '../../../../src/assets/svg/filter.svg'
import { useRouter } from "next/router"

const Coupon = () => {
    const router = useRouter()
    const data = [1, 2, 3, 4, 5, 6, 7]

    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className={`${Styles.divider} w-2`}></div>
                        <p className={`text-xl font-bold`}>KELOLA KUPON</p>
                    </div>
                    <div className="flex gap-4">
                        <div className={`${Styles.filter} flex gap-4 cursor-pointer py-2 px-4 rounded-md`}>
                            <p className={`text-white font-bold`}>Tambah Kupon</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex">
                        <p className="text-xl font-bold">
                            Show  <span className={`${Styles.colorYellow}`}>5</span>  Entries
                        </p>
                    </div>
                    <input type="text" name="search" className={`${Styles.input} px-4 py-2 rounded-full w-80`} placeholder="Search" />
                </div>
                <div className="mt-8">
                    <table className={`${Styles.table}`} >
                        <tr className={`${Styles.thead}`} >
                            <th>No</th>
                            <th>Kode</th>
                            <th>Pengguna</th>
                            <th>Pengguna per user</th>
                            <th>Nominal</th>
                            <th>Batas</th>
                            <th>Action</th>
                        </tr>
                        {data.map(el => (
                            <tr
                                key={el}
                                className={`${Styles.tbody} cursor-pointer`}
                            >
                                <td>1.</td>
                                <td>Danuar Riyaldi</td>
                                <td>Danuar Riyaldi</td>
                                <td>Danuar Riyaldi</td>
                                <td className="text-red-600" >Lihat</td>
                                <td>Danuar Riyaldi</td>
                                <td>
                                    <div className="flex gap-2">
                                        <div
                                            className={`${Styles.badgePrimary} rounded-md py-2 px-4`}
                                            onClick={() => router.push(`/dashboard/admin/coupon/edit/${el}`)}
                                        >
                                            <p className="text-xs">Edit</p>
                                        </div>
                                        <div className={`${Styles.badgeSecondary} rounded-md py-2 px-4`}>
                                            <p className="text-xs">Delete</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </DashboardMember>
    )
}

export default Coupon
