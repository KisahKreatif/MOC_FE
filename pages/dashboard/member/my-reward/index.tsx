import Image from 'next/image'
import DashboardMember from "../"
import Styles from './styles.module.scss'
import Reward from '../../../../src/assets/images/reward.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRewardHistory } from '../../../../store/reducers/rewards'
import { useEffect, useState } from 'react'
import myLoader from '../../../../src/helpers/loadImage'

const MyReward = () => {
    const dispatch = useDispatch()
    const rewards = useSelector(({ rewards }: any) => rewards.History)

    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token) {
            dispatch(fetchRewardHistory(token))
        }
    }, [])

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
                            {rewards && rewards?.map((el: any, i: any) => (
                                <tr key={el.id} className={`${Styles.tbody} cursor-pointer`} >
                                    <td>{i + 1}.</td>
                                    <td>{el?.reward?.judul}</td>
                                    <td>{el?.reward?.image && (
                                        <Image
                                            loader={myLoader}
                                            src={el?.reward?.image}
                                            alt='photo'
                                            width={50}
                                            height={50}
                                        />
                                    )}</td>
                                    <td>{el?.reward?.desc}</td>
                                    <td>{el?.reward?.harga_point}</td>
                                    <td>{el?.batas}</td>
                                    <td>
                                        <div
                                            className={`${Styles.badgePrimary} cursor-pointer rounded-md py-2 w-24`}
                                            onClick={() => {
                                                setModal(true)
                                                setModal1(true)
                                            }}
                                        >
                                            <p className="text-xs text-center">Aktif</p>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardMember>
    )
}

export default MyReward
