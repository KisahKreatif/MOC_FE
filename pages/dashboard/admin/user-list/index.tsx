import { useState } from "react"
import Image from 'next/image';
import DashboardAdmin from '..';
import Styles from './styles.module.scss';
import UserPic from '../../../../src/assets/images/user.jpg';
import ILClose from '../../../../src/assets/svg/ILClose.svg'
import { useRouter } from 'next/router';

const UserList = () => {
    const router = useRouter()
    const data = [1, 2, 3, 4, 5, 6, 7]
    const [modal, setModal] = useState(false)

    return (
        <DashboardAdmin>
            <div className="p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className={`${Styles.bgYellow} w-2`}></div>
                        <p className="text-xl font-bold">LIST USER</p>
                    </div>
                    <div className="flex gap-4">
                        <input type="text" name="search" id="search" placeholder="Search" className={`${Styles.colorYellow} ${Styles.bgWhite} px-4 py-2 rounded-3xl`} />
                        <div className={`${Styles.bgYellow} cursor-pointer px-4 py-2 font-bold rounded-lg`}>
                            Search
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid md:grid-cols-3 grid-cols-1 gap-4">
                    {data.map(el => (
                        <div key={el} className={`${Styles.bgWhite} p-4 rounded-lg`}>
                            <div className="text-center md:py-12">
                                <Image
                                    src={UserPic}
                                    width={120}
                                    height={120}
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div className="mt-2">
                                <p className="text-xl md:text-2xl font-bold text-black">Admin</p>
                                <div className={`${Styles.badge} rounded-md mt-2 px-2 py-2 w-16`}>
                                    <p className={`font-bold text-xs`}>Member</p>
                                </div>
                                <div className="mt-2 flex gap-4">
                                    <p className="text-black">Perolehan poin:</p>
                                    <p className={`${Styles.colorYellow} font-bold`}>1000</p>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <div
                                        className={`${Styles.bgYellow} font-bold px-4 py-2 rounded-md cursor-pointer`}
                                        onClick={() => router.push(`/dashboard/admin/user-list/detail/${el}`)}
                                    >
                                        Edit
                                    </div>
                                    <div
                                        className={`${Styles.bgYellow} font-bold px-4 py-2 rounded-md cursor-pointer`}
                                        onClick={() => setModal(true)}
                                    >
                                        LB
                                    </div>
                                    <div className={`${Styles.bgYellow} font-bold px-4 py-2 rounded-md cursor-pointer`}>
                                        By Pass
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center ${modal ? Styles.modal : "hidden"}`}>
                    <div className={`${Styles.modalContent} p-4 w-96 md:w-1/2 rounded-xl`}>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4">
                                <div className={`${Styles.bgYellow} w-2 h-8`}></div>
                                <p className="text-lg font-bold text-black">Edit Leader Board</p>
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => setModal(false)}
                            >
                                <Image
                                    src={ILClose}
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                        <div className="md:mt-8 mt-4">
                            <form action="">
                                <label htmlFor="" className="font-bold">Peringkat</label><br />
                                <input type="text" name="" id="" className="py-2 w-1/2 mt-4 border-2 border-gray-300 rounded-md" />
                                <div className="w-full h-px bg-gray-300 mt-4"></div>
                                <div className="mt-4 flex justify-end gap-4">
                                    <input type="submit" value="Save change" className={`${Styles.bgYellow} cursor-pointer px-4 py-2 font-bold rounded-md text-white font-bold`} />
                                    <div className={`bg-black cursor-pointer px-4 py-2 font-bold rounded-md text-white font-bold`}>
                                        Close
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </DashboardAdmin>
    )
}

export default UserList;
