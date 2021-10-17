import Image from 'next/image'
import DashboardMember from "../"
import Styles from './styles.module.scss'
import Reward from '../../../../src/assets/images/reward.png'

const MyReward = () => {
    return (
        <DashboardMember>
            <div className="py-8 px-16">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="w-2 bg-yellow-500"></div>
                        <p className="text-2xl font-bold">MY REWARD</p>
                    </div>
                </div>
                <div className={`mt-8`}>
                    <table className={`${Styles.table} w-full`} >
                        <thead>
                            <tr className={`${Styles.thead}`} >
                                <th>No</th>
                                <th>Reward</th>
                                <th>Photo Reward</th>
                                <th>Deskripsi</th>
                                <th>Point</th>
                                <th>Jangka Waktu</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={`${Styles.tbody} cursor-pointer`} >
                                <td>1.</td>
                                <td>SmartPhone</td>
                                <td>
                                    <Image
                                        src={Reward}
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td>SmartPhone</td>
                                <td>SmartPhone</td>
                                <td>SmartPhone</td>
                                <td>
                                    <div className={`${Styles.badgePrimary} rounded-md py-2 w-24`}>
                                        <p className="text-xs text-center">Tukar</p>
                                    </div>
                                </td>
                            </tr>
                            <tr className={`${Styles.tbody} cursor-pointer`} >
                                <td>2.</td>
                                <td>SmartPhone</td>
                                <td>
                                    <Image
                                        src={Reward}
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td>SmartPhone</td>
                                <td>SmartPhone</td>
                                <td>SmartPhone</td>
                                <td>
                                    <div className={`${Styles.badgeSecondary} rounded-md py-2 w-24`}>
                                        <p className="text-xs text-center">Sudah dipakai</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardMember>
    )
}

export default MyReward
