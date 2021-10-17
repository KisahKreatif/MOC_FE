import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import DashboardMember from "../.."
import ImageProduct1 from '../../../../../src/assets/images/product-1.png'
import ImageProduct2 from '../../../../../src/assets/images/product-2.png'
import ImageProduct3 from '../../../../../src/assets/images/product-3.png'
import filter from '../../../../../src/assets/svg/filter.svg'
import star from '../../../../../src/assets/svg/star.svg'
import Styles from './styles.module.scss'

const ProdukFisik = () => {
    const router = useRouter()

    const [data, setData] = useState([{ id: 1, image: ImageProduct1 }, { id: 2, image: ImageProduct2 }, { id: 3, image: ImageProduct3 }, { id: 4, image: ImageProduct1 }, { id: 5, image: ImageProduct2 }, { id: 6, image: ImageProduct3 }])

    const goTo = (routeName: any) => {
        router.push(routeName)
    }

    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className={`${Styles.divider} w-1 h-8`}></div>
                        <p className={`text-xl font-bold`}>All Product</p>
                        <p className="text-xl">(Produk Fisik)</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="">
                            <input type="text" name="search" id="search" placeholder="Cari Produk" className={`${Styles.input} text-white drop-shadow-xl	px-4 py-2 rounded-md`} />
                        </div>
                        <div className={`${Styles.input} drop-shadow-xl	 rounded-md flex gap-4 cursor-pointer py-2 px-4`}>
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

                <div className="flex gap-4 mt-4">
                    <div className={`${Styles.ActiveBadge} px-6 cursor-pointer py-2 rounded-md`}>
                        Skincare
                    </div>
                    <div className={`border-2 border-gray-400 px-6 cursor-pointer py-2 rounded-md`}>
                        Supplement
                    </div>
                    <div className={`border-2 border-gray-400 px-6 cursor-pointer py-2 rounded-md`}>
                        <p>F&B</p>
                    </div>
                    <div className={`border-2 border-gray-400 px-6 cursor-pointer py-2 rounded-md`}>
                        Fashion
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.map((el: any) => (
                        <div
                            key={el}
                            className={`${Styles.card} rounded-lg cursor-pointer`}
                            onClick={() => goTo(`/dashboard/member/products/produk-fisik/detail/${el.id}`)}
                        >
                            <Image
                                src={el.image}
                                width={100}
                                height={100}
                                alt="icon"
                                className="object-cover rounded-t-lg"
                                layout="responsive"
                            />
                            <div className="p-4">
                                <p className="text-xl font-bold">7 Private Acces</p>
                                <div className="py-2">
                                    <div className={`${Styles.badge} py-2 rounded-md w-28 text-center text-xs`}>Free Member</div>
                                </div>
                                <div className="py-1">
                                    <p className={`text-md`}>E-course</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className={`${Styles.price} text-lg font-bold`}>Rp 1.755.000</p>
                                    <div className="flex gap-1">
                                        <Image
                                            src={star}
                                            width={20}
                                            height={20}
                                            alt="icon"
                                        />
                                        <p>5.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </DashboardMember>
    )
}

export default ProdukFisik
