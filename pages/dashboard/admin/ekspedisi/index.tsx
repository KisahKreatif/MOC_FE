import { useState } from 'react'
import Image from 'next/image'
import DashboardMember from ".."
import Styles from './styles.module.scss'
import Reward from '../../../../src/assets/images/reward.png'
import ILClose from '../../../../src/assets/svg/ILClose.svg'

const Expedition = () => {
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)

    return (
        <DashboardMember>
            <div className="py-8 px-16">
                <div className="flex gap-4">
                    <div className="w-2 bg-yellow-500"></div>
                    <p className="text-2xl font-bold">KELOLA EKSPEDISI</p>
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
                                <th>Nama</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={`${Styles.tbody} cursor-pointer`} >
                                <td>1.</td>
                                <td>SmartPhone</td>
                                <td>
                                    <div className="flex gap-4">
                                        <div
                                            className={`${Styles.badgePrimary} cursor-pointer rounded-md py-2 w-24`}
                                            onClick={() => {
                                                setModal(true)
                                                setModal1(true)
                                            }}
                                        >
                                            <p className="text-xs text-center">Edit</p>
                                        </div>
                                        <div
                                            className={`${Styles.badgeSecondary} cursor-pointer rounded-md py-2 w-24`}
                                            onClick={() => {
                                                setModal1(false)
                                                setModal(true)
                                            }}
                                        >
                                            <p className="text-xs text-center">Detail</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center ${modal ? Styles.modal : "hidden"}`}>
                    <div className={`${Styles.modalContent} md:w-1/3 p-4 rounded-xl bg-gray-200`}>
                        {modal1 ? (
                            <>
                                <div className="flex justify-between items-center">
                                    <p className={`${Styles.yellow} text-xl font-bold`}>Edit Ekspedisi</p>
                                </div>
                                <div className="mt-4">
                                    <form>
                                        <input type="text" name="" id="" className={`${Styles.yellow} bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />

                                        <div className="flex justify-end gap-4">
                                            <input type="submit" value="Save" className={`${Styles.bgYellow} text-black font-bold mt-4 px-8 py-2 bg-black rounded-md cursor-pointer`} />
                                            <div
                                                className={`${Styles.yellow} text-white font-bold mt-4 px-8 py-2 bg-black rounded-md cursor-pointer`}
                                                onClick={() => setModal(false)}
                                            >
                                                Cancel
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex justify-between items-center">
                                    <p className={`${Styles.yellow} text-xl font-bold`}>Detail Ekspedisi</p>
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

export default Expedition
