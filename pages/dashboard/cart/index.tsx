import { useState } from "react"
import Image from 'next/image'
import Header from "../../../src/components/Head"
import Navbar from "../../../src/components/Navbar"
import Styles from './styles.module.scss'
import Product1 from '../../../src/assets/images/product-1.png'
import Product2 from '../../../src/assets/images/product-2.png'
import DashboardMember from "../member"
import plus from '../../../src/assets/svg/plus.svg'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarts } from '../../../store/reducers/cart'
import { NextPage } from 'next'
import wrapper from "../../../store"
import myLoader from "../../../src/helpers/loadImage"
import { useRouter } from "next/router"
import swal from "sweetalert"

const Carts: NextPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    let [price, setPrice] = useState<any>(0)
    const [selected, setSelected] = useState<any[]>([])
    let [quantity, setQuantity] = useState<any>(0)
    const [count, setCount] = useState<any[]>([])
    const carts = useSelector(({ carts }: any) => carts.Carts)

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token) dispatch(fetchCarts(token))
    }, [])


    const onSelect = (item: any) => {
        const find = selected.find((el: any) => el.id === item.id)

        if (find) {
            const arr: any[] = []
            selected.map((el: any) => {
                if (el.id !== item.id) arr.push(el)
            })
            price -= +item.sub_total
            quantity -= +item.quantity
            setPrice(price)
            setQuantity(quantity)
            setSelected(arr)
        } else {
            const concat = selected.concat(item)
            setSelected(concat)

            price += +item.sub_total
            quantity += +item.quantity
            setPrice(price)
            setQuantity(quantity)
        }
    }

    const onSelectAll = () => {
        if (carts?.length < 1) {
            setSelected([])
        } else {
            if (selected.length > 0) {
                setSelected([])
                setPrice(0)
                setQuantity(0)
            } else {
                setSelected(carts)

                let getSubtotal: number = 0
                let getQuantity: number = 0
                carts?.map((el: any) => {
                    getSubtotal += el.sub_total
                    getQuantity += el.quantity
                })
                setPrice(getSubtotal)
                setQuantity(getQuantity)
            }
        }
    }

    const checkout = () => {
        if (!selected || selected?.length < 1) {
            swal('Select product')
        } else {
            router.push({
                pathname: `/dashboard/member/products/produk-fisik/delivery/[id]`,
                query: { id: 'checkout', type: 'cart', total: price, quantity: quantity, product: JSON.stringify(selected) }
            })
        }
    }

    return (
        <DashboardMember>
            <div className="p-8">
                <p className="text-xl font-bold">Keranjang</p>
                <div className="mt-4 flex gap-4">
                    <div
                        onClick={onSelectAll}
                        className={`${selected?.length == carts?.length ? 'bg-yellow-300' : ''} cursor-pointer border-2 border-yellow-300 rounded-md w-6 h-6`}
                    ></div>
                    <p>Pilih semua produk</p>
                </div>

                <div className="flex gap-4 mt-4">
                    <div className="w-3/4">
                        {carts && carts?.map((el: any, i: any) => {
                            return (
                                <div
                                    className={`${Styles.bgWhite} ${i > 0 ? 'mt-4' : ''} p-4 rounded-lg flex justify-between items-center`}
                                    key={el.id}
                                >
                                    <div className="flex gap-4 items-center">
                                        <div
                                            onClick={() => onSelect(el)}
                                            className={`cursor-pointer ${selected.find(item => item.id === el.id ? true : false) ? "bg-yellow-300" : ""} border-2 border-yellow-300 rounded-md w-6 h-6`}
                                        ></div>
                                        {el?.product?.image && (
                                            <Image
                                                src={el.product.image}
                                                loader={myLoader}
                                                width={100}
                                                height={100}
                                                className="object-cover rounded-lg"
                                            />
                                        )}
                                        <div className="">
                                            <p className="text-xl font-bold text-black">{el?.product?.name}</p>
                                            <p className={`${Styles.yellow} text-lg font-bold`}>Rp {el?.sub_total}</p>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="w-40 px-2 py-2 border-2 rounded-lg border-gray-300 flex items-center justify-between">
                                            <div
                                                className="h-1 w-8 bg-gray-300 cursor-pointer"
                                                onClick={() => el?.quantity > 0 ? el?.quantity - 1 : 0}
                                            ></div>
                                            <p className="font-bold text-xl text-black">{el?.quantity}</p>
                                            {el?.quantity && (
                                                <Image
                                                    src={plus}
                                                    width={30}
                                                    height={30}
                                                    className="cursor-pointer"
                                                    onClick={() => el?.quantity + 1}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="w-1/4">
                        <div className={`${Styles.bgWhite} p-4 rounded-lg`}>
                            <p className="font-bold text-black">Total</p>
                            <p className={`${Styles.yellow} text-2xl font-bold`}>Rp. {price > 0 ? price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') : 0}</p>
                            <div
                                className={`${Styles.bgYellow} py-2 mt-4 cursor-pointer rounded-lg`}
                                onClick={checkout}
                            >
                                <p className="text-center font-bold">Checkout ({quantity})</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardMember >
    )
}

// Carts.getInitialProps = wrapper.getInitialPageProps(store => () => {
//     const token = localStorage.getItem('access_token')
//     if (token) store.dispatch(fetchCarts(token))
// })

export default Carts
