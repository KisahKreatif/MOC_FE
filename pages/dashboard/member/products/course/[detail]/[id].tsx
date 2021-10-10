import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import DashboardMember from "../../.."
import ImageProduct from '../../../../../../src/assets/images/course-product.png'
import filter from '../../../../../../src/assets/svg/filter.svg'
import star from '../../../../../../src/assets/svg/star.svg'
import Styles from './styles.module.scss'

const ProdukFisik = () => {
    const router = useRouter()

    const [data, setData] = useState([1, 2, 3, 4])

    const goTo = (routeName: any) => {
        router.push(routeName)
    }

    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <p className={`${Styles.allProduct} text-xl font-bold`}>All Product</p>
                        <p className="text-xl">(Course)</p>
                        <p className="text-xl font-bold">{'>'} 7 Days Private Premium Access</p>
                    </div>
                </div>
                <div className="mt-8">
                    <div className={`${Styles.card} grid grid-cols-1 md:grid-cols-3 gap-4 rounded-xl p-4`}>
                        <div className="flex flex-col justify-between">
                            <div className="">
                                <Image
                                    src={ImageProduct}
                                    width={100}
                                    height={100}
                                    alt="icon"
                                    className="object-cover"
                                    layout="responsive"
                                />
                            </div>
                            <div className="flex p-4 gap-4 ">
                                <div className="">
                                    <Image
                                        src={ImageProduct}
                                        width={100}
                                        height={100}
                                        alt="icon"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="">
                                    <Image
                                        src={ImageProduct}
                                        width={100}
                                        height={100}
                                        alt="icon"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="">
                                    <Image
                                        src={ImageProduct}
                                        width={100}
                                        height={100}
                                        alt="icon"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <p className="text-4xl font-bold">7 Days Private Premium Access</p>
                            <div className="flex gap-2">
                                <Image
                                    src={star}
                                    width={15}
                                    height={15}
                                    alt="Icon"
                                />
                                <p className="text-lg">5.0</p>
                            </div>
                            <p className="text-2xl font-bold">Rp 1.755.000</p>
                            <div className="h-px mt-4 bg-gray-300"></div>
                            <div className="mt-4">
                                <p className="font-bold text-lg">Course yang diperoleh:</p>
                                <ul className="mt-4">
                                    <li className="mt-2 text-lg">1. Product Knowledge</li>
                                    <li className="mt-2 text-lg">2. 7 Days Private Mentoring</li>
                                    <li className="mt-2 text-lg">3. Moc Membership</li>
                                    <li className="mt-2 text-lg">4. Master Secrets Hack</li>
                                </ul>
                            </div>
                            <div className="h-px mt-4 bg-gray-300"></div>
                            <div className="mt-4 flex justify-between">
                                <div className="">
                                    <ul>
                                        <li className="mt-2 flex gap-4">
                                            <p className="w-48">Tanggal Publish</p>
                                            <p>:</p>
                                            <p>24-May-2021</p>
                                        </li>
                                        <li className="mt-2 flex gap-4">
                                            <p className="w-48">Availability</p>
                                            <p>:</p>
                                            <p>In stock</p>
                                        </li>
                                        <li className="mt-2 flex gap-4">
                                            <p className="w-48">Batas Pemakaian</p>
                                            <p>:</p>
                                            <p>365 hari</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className={`${Styles.btn} w-44 px-4 py-2 self-end rounded-lg cursor-pointer`}>
                                    <p className="text-lg text-center">Beli Sekarang</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex gap-4 items-center">
                        <div className={`${Styles.divider} w-1 h-8`}></div>
                        <p className={`text-xl font-bold`}>Produk Lainnya</p>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
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
            </div>
        </DashboardMember>
    )
}

export default ProdukFisik
