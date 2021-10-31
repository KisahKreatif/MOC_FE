import { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"
import DashboardMember from "../.."
import ImageProduct1 from '../../../../../src/assets/images/product-1.png'
import ImageProduct2 from '../../../../../src/assets/images/product-2.png'
import ImageProduct3 from '../../../../../src/assets/images/product-3.png'
import filter from '../../../../../src/assets/svg/filter.svg'
import star from '../../../../../src/assets/svg/Color_Mode_light.svg'
import Cart from '../../../../../src/assets/svg/Cart-1.svg'
import Styles from './styles.module.scss'
import wrapper from "../../../../../store"
import { fetchProducts } from "../../../../../store/reducers/product"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import myLoader from "../../../../../src/helpers/loadImage"

const ProdukFisik: NextPage = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const products = useSelector(({ products }: any) => products?.Products)
    const loading = useSelector(({ products }: any) => products?.Loading)

    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(fetchProducts('', true))
    }, [])

    useEffect(() => {
        if (search.length > 3) {
            dispatch(fetchProducts(search, false))
        }
    }, [search])

    const goTo = (routeName: any) => {
        router.push(routeName)
    }

    const searchAction = (e: React.FormEvent<HTMLInputElement>): void => {
        setSearch(e.currentTarget.value)
    }

    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className={`${Styles.divider} w-1 h-8`}></div>
                        <p className={`text-xl font-bold`}>PRODUK FISIK</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="">
                            <input type="text" name="search" id="search" value={search} onChange={searchAction} placeholder="Cari Produk" className={`${Styles.input} text-white drop-shadow-xl px-4 py-2 rounded-md`} />
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
                        <div
                            className={`${Styles.input} drop-shadow-xl	 rounded-md flex gap-4 cursor-pointer py-2 px-4`}
                            onClick={() => goTo('/dashboard/admin/products/produk-fisik/add')}
                        >
                            Add Product
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products && products?.map((el: any) => (
                        <div
                            key={el.id}
                            className={`${Styles.card} rounded-lg cursor-pointer`}
                            onClick={() => goTo(`/dashboard/admin/products/produk-fisik/edit/${el.id}`)}
                        >
                            <div className="flex gap-4">
                                <div className="p-4">
                                    {el?.image && (
                                        <Image
                                            loader={myLoader}
                                            src={el.image}
                                            width={300}
                                            height={300}
                                            alt="icon"
                                            className="object-cover"
                                        />
                                    )}
                                    <div className="mt-4">
                                        <p className="text-2xl font-bold">{el?.name}</p>
                                        <div className="py-2 flex gap-4">
                                            <div className={`${Styles.badgePrimary} py-2 rounded-md w-16 text-center text-xs`}>Add</div>
                                            <div className={`${Styles.badgeSecondary} py-2 rounded-md w-16 text-center text-xs`}>Delete</div>
                                            <div className={`${Styles.badgeThird} py-2 rounded-md w-16 text-center text-xs`}>Edit</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 p-4">
                                    <p className="text-sm text-justify">{el?.desc}</p>
                                    {/* <p className="text-sm mt-4">Keunggulan Revolotion Bright :</p>
                                    <ul className="mt-4">
                                        <li className="text-xs py-2">1. Mencerahkan dan memutihkan kulit dalam sekali pemakaian</li>
                                        <li className="text-xs py-2">2. Dapat digunakan untuk seluruh tubuh</li>
                                        <li className="text-xs py-2">3. Membantu menyamarkan bekas luka</li>
                                        <li className="text-xs py-2">4. Menjaga kelembapan kulit</li>
                                        <li className="text-xs py-2">5. Putih Natural</li>
                                        <li className="text-xs py-2">6. Mengencangkan dan melembapkan kulit bagian payudara</li>
                                        <li className="text-xs py-2">7. Tidak Luntur walaupun terkena air atau digosok dengan tangan</li>
                                        <li className="text-xs py-2">8. Memutihkan dan mencerahkan bagian ketiak</li>
                                        <li className="text-xs py-2">9. Wangi tahan lama</li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex gap-4 justify-end items-center">
                                    <p className={``}>Rp 1.755.000</p>
                                    <div className="flex gap-1">
                                        <Image
                                            src={Cart}
                                            width={20}
                                            height={20}
                                            alt="icon"
                                        />
                                        <p>400 Terjual</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <Image
                                            src={star}
                                            width={20}
                                            height={20}
                                            alt="icon"
                                        />
                                        <p>10 point</p>
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

ProdukFisik.getInitialProps = wrapper.getInitialPageProps(store => () => {
    const { dispatch }: any = store
    dispatch(fetchProducts('', true))
})

export default ProdukFisik
