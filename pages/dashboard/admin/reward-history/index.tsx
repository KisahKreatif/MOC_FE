import { useEffect, useState } from 'react'
import Image from 'next/image'
import DashboardMember from ".."
import Styles from './styles.module.scss'
import Reward from '../../../../src/assets/images/reward.png'
import ILClose from '../../../../src/assets/svg/ILClose.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRewardHistory } from '../../../../store/reducers/rewards'

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
                <div className="flex gap-4">
                    <div className="w-2 bg-yellow-500"></div>
                    <p className="text-2xl font-bold">HISTORY REWARD</p>
                </div>
                <div className="mt-8 flex justify-end">
                    <div
                        className={`${Styles.bgYellow} cursor-pointer px-4 py-2 rounded-md`}
                        onClick={() => setModal(true)}
                    >
                        Add
                    </div>
                </div>
                <div className={`mt-8`}>
                    <table className={`${Styles.table} w-full`} >
                        <thead>
                            <tr className={`${Styles.thead}`} >
                                <th>No</th>
                                <th>Nama Pembeli</th>
                                <th>Produk</th>
                                <th>Harga Point</th>
                                <th>Kode Transaksi</th>
                                <th>Tanggal</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rewards && rewards?.map((el: any, i: any) => (
                                <tr key={el.id} className={`${Styles.tbody} cursor-pointer`} >
                                    <td>{i + 1}.</td>
                                    <td>{el?.user?.name}</td>
                                    <td>{el?.reward?.judul}</td>
                                    <td>{el?.reward?.harga_point}</td>
                                    <td>{el?.id}</td>
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

                <div className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center ${modal ? Styles.modal : "hidden"}`}>
                    <div className={`${Styles.modalContent} md:w-1/3 p-4 rounded-xl bg-gray-200`}>
                        {modal1 ? (
                            <>
                                <div className="flex justify-between items-center">
                                    <p className={`${Styles.yellow} text-xl font-bold`}>Edit Reward</p>
                                    <Image
                                        src={ILClose}
                                        width={20}
                                        height={20}
                                        onClick={() => setModal(false)}
                                        className="cursor-pointer"
                                    />
                                </div>
                                <div className="mt-4">
                                    <form>
                                        <input type="text" name="" id="" className={`${Styles.yellow} bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />

                                        <input type="file" name="" id="" className={`${Styles.yellow} bg-white rounded-md w-full py-2 px-4 mt-4`} />

                                        <textarea name="" id="" className={`${Styles.yellow} h-24 mt-4 bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />

                                        <input type="text" name="" id="" className={`${Styles.yellow} mt-4 bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />

                                        <input type="date" name="" id="" className={`${Styles.yellow} mt-4 bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />


                                        <input type="submit" value="Submit" className="text-white font-bold mt-4 px-8 py-3 bg-black rounded-md cursor-pointer" />
                                    </form>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex justify-between items-center">
                                    <p className={`${Styles.yellow} text-xl font-bold`}>Detail Reward</p>
                                    <Image
                                        src={ILClose}
                                        width={20}
                                        height={20}
                                        onClick={() => setModal(false)}
                                        className="cursor-pointer"
                                    />
                                </div>
                                <div className="mt-8 flex justify-center">
                                    <Image
                                        src={Reward}
                                        width={150}
                                        height={150}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mt-4">
                                    <form>
                                        <input type="text" name="" id="" className={`${Styles.yellow} bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />

                                        <textarea name="" id="" className={`${Styles.yellow} h-24 mt-4 bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />

                                        <input type="text" name="" id="" className={`${Styles.yellow} mt-4 bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />

                                        <input type="text" name="" id="" className={`${Styles.yellow} mt-4 bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />

                                        <input type="submit" value="Submit" className="text-white font-bold mt-4 px-8 py-3 bg-black rounded-md" />
                                    </form>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </DashboardMember>
    )
}

export default MyReward
