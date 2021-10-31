import Image from "next/image"
import DashboardMember from ".."
import Styles from './styles.module.scss'
import filter from '../../../../src/assets/svg/filter.svg'
import { useRouter } from "next/router"

const BankManage = () => {
    const router = useRouter()

    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex gap-4">
                    <div className={`${Styles.divider} w-2`}></div>
                    <p className={`text-xl font-bold`}>KELOLA BANK</p>
                </div>
                <div className="mt-8 md:flex gap-4">
                    <div className="text-center">
                        <p className={`text-xl font-bold`}>BANK PERSONAL</p>

                        <table className={`${Styles.table} mt-4`} >
                            <tr className={`${Styles.thead}`} >
                                <th>No</th>
                                <th>Nama Bank</th>
                                <th>Logo Bank</th>
                                <th>No Rekening</th>
                                <th>Nama Pemilik</th>
                                <th>Action</th>
                            </tr>
                            <tr
                                className={`${Styles.tbody} cursor-pointer`}
                            >
                                <td>1.</td>
                                <td>Danuar Riyaldi</td>
                                <td>Danuar Riyaldi</td>
                                <td>Danuar Riyaldi</td>
                                <td>Danuar Riyaldi</td>
                                <td>
                                    <div className="flex gap-2">
                                        <div
                                            className={`${Styles.badgePrimary} rounded-md py-2 px-4`}
                                            onClick={() => router.push(`/dashboard/admin/coupon/edit/`)}
                                        >
                                            <p className="text-xs">Edit</p>
                                        </div>
                                        <div className={`${Styles.badgeSecondary} rounded-md py-2 px-4`}>
                                            <p className="text-xs">Delete</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="text-center">
                        <p className={`text-xl font-bold`}>PAYMENT GATEWAY</p>

                        <table className={`${Styles.table} mt-4`} >
                            <tr className={`${Styles.thead}`} >
                                <th>No</th>
                                <th>Nama Bank</th>
                                <th>Action</th>
                            </tr>
                            <tr
                                className={`${Styles.tbody} cursor-pointer`}
                            >
                                <td>1.</td>
                                <td>Danuar Riyaldi</td>
                                <td>
                                    <div className="flex gap-2">
                                        <div
                                            className={`${Styles.badgePrimary} rounded-md py-2 px-4`}
                                            onClick={() => router.push(`/dashboard/admin/coupon/edit/`)}
                                        >
                                            <p className="text-xs">Edit</p>
                                        </div>
                                        <div className={`${Styles.badgeSecondary} rounded-md py-2 px-4`}>
                                            <p className="text-xs">Delete</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardMember>
    )
}

export default BankManage
