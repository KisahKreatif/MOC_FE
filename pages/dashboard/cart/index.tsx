import { useState } from "react"
import Image from 'next/image'
import Header from "../../../src/components/Head"
import Navbar from "../../../src/components/Navbar"
import Styles from './styles.module.scss'
import Product1 from '../../../src/assets/images/product-1.png'
import Product2 from '../../../src/assets/images/product-2.png'
import DashboardMember from "../member"
import plus from '../../../src/assets/svg/plus.svg'

const Messages = () => {
    const [sideBar, setSideBar] = useState(false)
    const [selected, setSelected] = useState(null)
    const [count, setCount] = useState(1)

    return (
        <DashboardMember>
            <div className="p-8">
                <p className="text-xl font-bold">Keranjang</p>
                <div className="mt-4 flex gap-4">
                    <div className="cursor-pointer border-2 border-yellow-300 rounded-md w-6 h-6"></div>
                    <p>Pilih semua produk</p>
                </div>

                <div className="flex gap-4 mt-4">
                    <div className="w-3/4">
                        <div className={`${Styles.bgWhite} p-4 rounded-lg flex justify-between items-center`}>
                            <div className="flex gap-4 items-center">
                                <div className="cursor-pointer border-2 border-yellow-300 rounded-md w-6 h-6"></div>
                                <Image
                                    src={Product1}
                                    width={100}
                                    height={100}
                                    className="object-cover rounded-lg"
                                />
                                <div className="">
                                    <p className="text-xl font-bold text-black">Revolotion Bright 100 ml</p>
                                    <p className={`${Styles.yellow} text-lg font-bold`}>Rp 125.000</p>
                                </div>
                            </div>

                            <div className="">
                                <div className="w-40 px-2 py-2 border-2 rounded-lg border-gray-300 flex items-center justify-between">
                                    <div
                                        className="h-1 w-8 bg-gray-300 cursor-pointer"
                                        onClick={() => count > 0 ? setCount(count - 1) : setCount(count)}
                                    ></div>
                                    <p className="font-bold text-xl text-black">{count}</p>
                                    <Image
                                        src={plus}
                                        width={30}
                                        height={30}
                                        className="cursor-pointer"
                                        onClick={() => setCount(count + 1)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className={`${Styles.bgWhite} p-4 rounded-lg`}>
                            <p className="font-bold text-black">Total</p>
                            <p className={`${Styles.yellow} text-2xl font-bold`}>Rp. 1.200.000</p>
                            <div className={`${Styles.bgYellow} py-2 mt-4 cursor-pointer rounded-lg`}>
                                <p className="text-center font-bold">Checkout ({count})</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardMember>
    )
}

export default Messages
