import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import DashboardMember from "../../.."
import ImageProduct from '../../../../../../src/assets/images/product-1.png'
import ImageProduct1 from '../../../../../../src/assets/images/product-3.png'
import ILClose from '../../../../../../src/assets/svg/ILClose.svg'
import bca from '../../../../../../src/assets/images/bca.png'
import star from '../../../../../../src/assets/svg/star.svg'
import plus from '../../../../../../src/assets/svg/plus.svg'
import Styles from './styles.module.scss'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct, fetchProducts } from "../../../../../../store/reducers/product"
import myLoader from "../../../../../../src/helpers/loadImage"
import { NextPage } from "next"
import wrapper from "../../../../../../store"
import axios from "axios"
import swal from 'sweetalert'

const ProdukFisik: NextPage = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch()

    const [data, setData] = useState([1, 2, 3, 4])
    const [modal, setModal] = useState(false)
    const [count, setCount] = useState(1)
    const [subTotal, setSubTotal] = useState(1)
    const [variant, setVariant] = useState<any>({})

    const product = useSelector(({ products }: any) => products.Product)
    const products = useSelector(({ products }: any) => products.Products)

    useEffect(() => {
        if (id) dispatch(fetchProduct(id))

        dispatch(fetchProducts('', true))
    }, [id])

    const addToCart = async () => {
        try {
            if (Object.keys(variant).length < 1) throw { message: 'Anda belum memilih varian dari product ini' }
            const token = localStorage.getItem('access_token');
            const data = {
                product_id: product.id,
                varian_id: variant.id,
                quantity: count,
                sub_total: variant.price * count,
                product_type: 'product'
            }
            if (token) {
                const res = await axios.post(`${process.env.apiUrl}/cart`, data, { headers: { authorization: token } })

                if (res.data?.meta?.code == 200) {
                    setModal(true)
                } else swal(`server not response`)
            }
        } catch (error: any) {
            swal(`Something wrong ${error?.message}`)
        }
    }

    const goTo = (routeName: any) => {
        router.push(routeName)
    }

    return (
        <DashboardMember>
            <div className="p-8 relative">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <p className={`${Styles.allProduct} text-xl font-bold`}>All Product</p>
                        <p className="text-xl font-bold">{'>'} {product?.name}</p>
                    </div>
                </div>
                <div className="mt-8 flex gap-4">
                    <div className={`${Styles.card} w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4 rounded-xl p-4`}>
                        <div className="flex flex-col justify-between">
                            <div className="">
                                {product?.image && (
                                    <Image
                                        loader={myLoader}
                                        src={product.image}
                                        width={100}
                                        height={100}
                                        alt="icon"
                                        className="object-cover rounded-lg"
                                        layout="responsive"
                                    />
                                )}
                            </div>
                            <div className="flex p-4 gap-4 ">
                                <div className="">
                                    {product?.image && (
                                        <Image
                                            loader={myLoader}
                                            src={product.image}
                                            width={100}
                                            height={100}
                                            alt="icon"
                                            className="object-cover rounded-lg"
                                        // layout="responsive"
                                        />
                                    )}
                                </div>
                                <div className="">
                                    {product?.image && (
                                        <Image
                                            loader={myLoader}
                                            src={product.image}
                                            width={100}
                                            height={100}
                                            alt="icon"
                                            className="object-cover rounded-lg"
                                        // layout="responsive"
                                        />
                                    )}
                                </div>
                                <div className="">
                                    {product?.image && (
                                        <Image
                                            loader={myLoader}
                                            src={product.image}
                                            width={100}
                                            height={100}
                                            alt="icon"
                                            className="object-cover rounded-lg"
                                        // layout="responsive"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="mt-4">
                                <ul>
                                    <li className="mt-2 flex gap-4">
                                        <p className="w-24 text-xs">Tanggal Publish</p>
                                        <p>:</p>
                                        <p className="text-xs">24-May-2021</p>
                                    </li>
                                    <li className="mt-2 flex gap-4">
                                        <p className="w-24 text-xs">Availability</p>
                                        <p>:</p>
                                        <p className="text-xs">In stock</p>
                                    </li>
                                    <li className="mt-2 flex gap-4">
                                        <p className="w-24 text-xs">Batas Pemakaian</p>
                                        <p>:</p>
                                        <p className="text-xs">365 hari</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <p className="text-4xl font-bold">{product?.name}</p>
                            <div className="flex gap-2">
                                <Image
                                    src={star}
                                    width={15}
                                    height={15}
                                    alt="Icon"
                                />
                                <p className="text-lg">5.0</p>
                            </div>
                            {product?.variants && product?.variants?.map((el: any) => (
                                <div
                                    key={el.id}
                                    className="flex mt-2 gap-4 items-center"
                                >
                                    <div
                                        className={`${variant?.id == el.id ? 'bg-yellow-400' : 'bg-gray-600'} w-4 h-4 cursor-pointer rounded-full`}
                                        onClick={() => setVariant(el)}
                                    ></div>
                                    <p className={`${Styles.yellow} text-2xl font-bold`}>Rp {el?.price}</p>
                                    <p>/ {el?.name}</p>
                                </div>
                            ))}
                            <div className="h-px mt-4 bg-gray-300"></div>
                            <div className="mt-4">
                                <p className="font-bold text-lg">Detail Produk:</p>
                                <p className="w-96 text-justify">{product?.desc}</p>
                                {/* <ul className="mt-4">
                                    <li className="mt-2">1) Krim tabir surya yang melindungi kulit dari paparan Sinar UV</li>
                                    <li className="mt-2">2) Anti oksidan dan anti radikal bebas</li>
                                    <li className="mt-2">3) Stimulus oksigen</li>
                                    <li className="mt-2">4) Mencerahkan dan melembutkan kulit</li>
                                    <li className="mt-2">5) Mencegah dan membantu membersihkan jerawat</li>
                                </ul> */}
                                <p className={`${Styles.yellow} font-bold`}>Lihat selengkapnya</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${Styles.card} w-1/4 h-full p-4 rounded-xl`}>
                        <p className="font-bold">Atur jumlah dan catatan</p>
                        <div className="mt-4">
                            <div className="px-2 py-2 border-2 rounded-lg border-gray-300 flex items-center justify-between">
                                <div
                                    className="h-1 w-8 bg-gray-300 cursor-pointer"
                                    onClick={() => setCount(count - 1)}
                                ></div>
                                <p className="font-bold text-xl">{count}</p>
                                <Image
                                    src={plus}
                                    width={30}
                                    height={30}
                                    className="cursor-pointer"
                                    onClick={() => setCount(count + 1)}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <p>Stock</p>
                                <p className="font-bold">90</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <p>Subtotal</p>
                                <p className="font-bold">Rp {variant?.price ? variant.price * count : ''}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div
                                className="px-4 py-2 rounded-md cursor-pointer text-center border-2 border-yellow-300"
                                onClick={addToCart}
                            >
                                <p className={`${Styles.yellow} font-bold`}>+Keranjang</p>
                            </div>

                            <div
                                className={`${Styles.bgYellow} px-4 mt-2 py-2 rounded-md cursor-pointer text-center`}
                                onClick={() => {
                                    if (Object.keys(variant).length < 1) swal('Anda belum memilih varian dari product ini')
                                    else router.push({
                                        pathname: `/dashboard/member/products/produk-fisik/delivery/[id]`,
                                        query: { id: id, type: 'product', total: variant.price * count, quantity: count, product: JSON.stringify(product) }
                                    })
                                }}
                            >
                                <p className={`text-white font-bold`}>Beli Sekarang</p>
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
                        {products && products?.map((el: any) => (
                            <div
                                key={el.id}
                                className={`${Styles.card} rounded-lg cursor-pointer`}
                                onClick={() => goTo(`/dashboard/member/products/produk-fisik/detail/${el.id}`)}
                            >
                                {el?.image && (
                                    <Image
                                        loader={myLoader}
                                        src={el?.image}
                                        width={100}
                                        height={100}
                                        alt="icon"
                                        className="object-cover rounded-t-lg"
                                        layout="responsive"
                                    />
                                )}
                                <div className="p-4">
                                    <p className="text-xl font-bold">{el?.name}</p>
                                    <p className={`font-bold`}>Produk Fisik</p>
                                    <div className="py-2">
                                        <div className={`${Styles.badge} py-2 rounded-md w-28 text-center text-xs`}>Harga Varian</div>
                                    </div>
                                    {el?.variants?.map((item: any) => (
                                        <div
                                            key={item.id}
                                            className="py-1 flex justify-between items-center"
                                        >
                                            <p className={`text-md`}>{item?.name}</p>
                                            <p className={`${Styles.price} text-lg font-bold`}>Rp {item?.price}</p>
                                        </div>
                                    ))}
                                    <div className="flex gap-1 justify-end">
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
                        ))}
                    </div>
                </div>

                <div className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center ${modal ? Styles.modal : "hidden"}`}>
                    <div className={`${Styles.modalContent} p-4 rounded-xl bg-gray-100`}>
                        <div className="flex justify-end">
                            <Image
                                src={ILClose}
                                width={20}
                                height={20}
                                className="cursor-pointer"
                                onClick={() => setModal(false)}
                            />
                        </div>
                        <p className="text-xl text-center font-bold">Berhasil ditambahkan kekeranjang</p>
                        <div className="mt-4 p-4 shadow-lg rounded-lg flex items-center gap-4 md:gap-8">
                            <Image
                                src={ImageProduct}
                                width={50}
                                height={50}
                            />
                            <div className="">
                                <p className="font-bold">{product?.name}</p>
                                <p className={`${Styles.yellow} font-bold`}>Rp {variant?.price}</p>
                            </div>
                            <div
                                className={`${Styles.bgYellow} px-4 py-2 rounded-lg font-bold text-white cursor-pointer`}
                                onClick={() => goTo("/dashboard/cart")}
                            >
                                Lihat Keranjang
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardMember>
    )
}

ProdukFisik.getInitialProps = wrapper.getInitialPageProps(store => ({ query }) => {
    if (query.id) store.dispatch(fetchProduct(query.id))

    fetchProducts('', true)
})

export default ProdukFisik
