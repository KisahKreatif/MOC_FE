import { useState } from "react"
import Image from 'next/image'
import Header from "../../../src/components/Head"
import Navbar from "../../../src/components/Navbar"
import Styles from './styles.module.scss'
import Product1 from '../../../src/assets/images/product-1.png'
import Product2 from '../../../src/assets/images/product-2.png'
import DashboardMember from "../member"

const Messages = () => {
    const [sideBar, setSideBar] = useState(false)
    const [selected, setSelected] = useState(null)


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
                        <div className={`${Styles.bgWhite} p-4 rounded-lg flex gap-4 items-center`}>
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
                    </div>
                    <div className="w-1/4"></div>
                </div>
            </div>
        </DashboardMember>
    )
}

export default Messages
