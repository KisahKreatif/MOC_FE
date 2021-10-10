import Image from "next/image"
import DashboardMember from ".."
import Styles from './styles.module.scss'
import filter from '../../../../src/assets/svg/filter.svg'

const LeaderBoard = () => {
    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className={`${Styles.divider} w-2`}></div>
                        <p className={`text-xl font-bold`}>LEADERBOARD</p>
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
                <div className="mt-8">
                    <table className={`${Styles.table}`} >
                        <tr className={`${Styles.thead}`} >
                            <th>No</th>
                            <th>Nama</th>
                            <th>Rank</th>
                            <th>Jumlah Transaksi</th>
                        </tr>
                        <tr className={`${Styles.tbody} cursor-pointer`} >
                            <td>1.</td>
                            <td className="flex gap-4 items-center" >
                                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                <p>Danuar Riyaldi</p>
                            </td>
                            <td>
                                <div className="flex gap-2">
                                    <div className={`${Styles.badgePrimary} rounded-md py-2 px-4`}>
                                        <p className="text-xs">Master Seller</p>
                                    </div>
                                    <div className={`${Styles.badgeSecondary} rounded-md py-2 px-4`}>
                                        <p className="text-xs">Bronze</p>
                                    </div>
                                </div>
                            </td>
                            <td>940 Transaksi</td>
                        </tr>
                        <tr className={`${Styles.tbody} cursor-pointer`} >
                            <td>2.</td>
                            <td className="flex gap-4 items-center" >
                                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                <p>Danuar Riyaldi</p>
                            </td>
                            <td>
                                <div className="flex gap-2">
                                    <div className={`${Styles.badgePrimary} rounded-md py-2 px-4`}>
                                        <p className="text-xs">Master Seller</p>
                                    </div>
                                    <div className={`${Styles.badgeSecondary} rounded-md py-2 px-4`}>
                                        <p className="text-xs">Bronze</p>
                                    </div>
                                </div>
                            </td>
                            <td>940 Transaksi</td>
                        </tr>
                        <tr className={`${Styles.tbody} cursor-pointer`} >
                            <td>3.</td>
                            <td className="flex gap-4 items-center" >
                                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                <p>Danuar Riyaldi</p>
                            </td>
                            <td>
                                <div className="flex gap-2">
                                    <div className={`${Styles.badgePrimary} rounded-md py-2 px-4`}>
                                        <p className="text-xs">Master Seller</p>
                                    </div>
                                    <div className={`${Styles.badgeSecondary} rounded-md py-2 px-4`}>
                                        <p className="text-xs">Bronze</p>
                                    </div>
                                </div>
                            </td>
                            <td>940 Transaksi</td>
                        </tr>
                    </table>
                </div>
            </div>
        </DashboardMember>
    )
}

export default LeaderBoard
