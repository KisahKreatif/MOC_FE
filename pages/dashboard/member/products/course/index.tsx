import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import DashboardMember from "../.."
import ImageProduct from '../../../../../src/assets/images/course-product.png'
import filter from '../../../../../src/assets/svg/filter.svg'
import star from '../../../../../src/assets/svg/star.svg'
import Styles from './styles.module.scss'

const ProdukFisik = () => {
    const router = useRouter()

    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

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
                        <p className="text-xl">(Course)</p>
                    </div>
                    <div className="">
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
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.map((el: any) => (
                        <div
                            key={el}
                            className={`${Styles.card} p-4 rounded-lg cursor-pointer`}
                            onClick={() => goTo(`/dashboard/member/products/course/detail/${el}`)}
                        >
                            <Image
                                src={ImageProduct}
                                width={100}
                                height={100}
                                alt="icon"
                                className="object-cover"
                                layout="responsive"
                            />
                            <div className="mt-4">
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
