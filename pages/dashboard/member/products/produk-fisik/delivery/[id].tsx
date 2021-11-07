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

const Delivery: NextPage = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const [slide, setSlide] = useState(false)
    const [variant, setVariant] = useState<any>({})
    const [provinces, setProvinces] = useState<any[]>([])
    const [cities, setCities] = useState<any[]>([])
    const [districts, setDistricts] = useState<any[]>([])
    const [province, setProvince] = useState<any>({ id: 0 })
    const [city, setCity] = useState<any>({ id: 0 })
    const [district, setDistrict] = useState<any>({ id: 0 })
    const [couriers, setCouriers] = useState<any[]>([])
    const [courier, setCourier] = useState<any>({ id: 0 })
    const [type, setType] = useState<any>({ id: 0 })
    const [form, setForm] = useState<any>({})

    const product = useSelector(({ products }: any) => products.Product)

    useEffect(() => {
        (async () => {
            const data = await axios.get(`${process.env.apiUrl}/address/province`)
            if (data?.data?.data) {
                setProvinces(data.data.data)
            }

            const dataCourier = await axios.get(`${process.env.apiUrl}/courier`)
            if (dataCourier?.data?.data) {
                setCouriers(dataCourier.data.data)
            }
        })()
    }, [])

    useEffect(() => {
        if (id && router.query?.type == 'product') {
            dispatch(fetchProduct(id))
        }
    }, [id])


    const goTo = (routeName: any) => {
        router.push(routeName)
    }

    const getCity = async (e: any) => {
        setProvince({ id: e.currentTarget.value })
        const getCity = await axios.get(`${process.env.apiUrl}/address/city/${e.currentTarget.value}`)
        // if (getCity?.data?.data) swal(`${JSON.stringify(getCity.data.data)}`)
        if (getCity?.data?.data) setCities(getCity.data.data)
    }

    const getDist = async (e: any) => {
        setCity({ id: e.currentTarget.value })
        const getDist = await axios.get(`${process.env.apiUrl}/address/district/${e.currentTarget.value}`)
        if (getDist?.data?.data) setDistricts(getDist.data.data)
    }

    const onChange = (e: any) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value

        setForm({ ...form, [name]: value })
    }

    const submit = async () => {
        try {
            const query = JSON.parse(JSON.stringify(router.query))
            const getProduct = JSON.parse(query.product)

            let data: any = {
                province_id: province.id,
                city_id: city.id,
                subdistrict_id: district.id,
                kurir: courier.id,
                name: form.name,
                alamat: form.address,
                no_hp: form.phone,
                email: form.email,
                kode_pos: form.zipcode,
                jenis: type.id,
                product_id: id,
                price: +query.total,
                coupon: form.coupon,
                quantity: +query.quantity,
                point_pembeli: getProduct.point_pembeli,
                point_sponsor: getProduct.point_sponsor,
                commission: getProduct.commission
            }

            const token = localStorage.getItem('access_token')
            if (slide) {
                data = {
                    nama_penerima: form.nama_penerima,
                    no_hp: form.no_hp,
                    marketplace: form.marketplace,
                    olshop: form.olshop,
                    resi: form.resi,
                    product_id: id,
                }

                if (token) {
                    if (router.query?.type == 'cart') {
                        const products = getProduct?.map((el: any) => el.product)
                        data.products = products
                        data.carts = getProduct
                    } else {
                        const res = await axios.post(`${process.env.apiUrl}/transaction-marketplace`, data, { headers: { authorization: token } })

                        if (res?.data?.meta?.code == 200 && res?.data?.data?.id) router.push({ pathname: `/dashboard/member/products/produk-fisik/transaction/${res.data.data.id}`, query: { type: 'marketplace' } })
                        else throw { message: '!Oops something wrrong' }
                    }
                }
            } else {
                if (token) {
                    if (router.query?.type == 'cart') {
                        const products = getProduct?.map((el: any, i: any) => el.product)
                        data.products = JSON.stringify(products)
                        data.carts = JSON.stringify(getProduct)

                        console.log(data, "<< data");

                        const res = await axios.post(`${process.env.apiUrl}/cart/checkout`, data, { headers: { authorization: token } })

                        console.log(res.data, '<<< res data');

                    } else {
                        const res = await axios.post(`${process.env.apiUrl}/transaction`, data, { headers: { authorization: token } })

                        if (res?.data?.meta?.code == 200 && res?.data?.data?.id) router.push({ pathname: `/dashboard/member/products/produk-fisik/transaction/${res.data.data.id}`, query: { type: 'non' } })
                        else throw { message: '!Oops something wrrong' }
                    }
                }
            }

        } catch (error: any) {
            swal(`Error = ${error?.message}`)
        }
    }

    return (
        <DashboardMember>
            <div className="p-8 relative">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center w-3/4">
                        <div className={`${Styles.divider} w-2 h-6`}></div>
                        <p className={`text-xl font-bold`}>Pengiriman</p>
                    </div>
                    <div className="w-1/4 flex justify-between">
                        <p className="font-bold">Market Place</p>
                        <div className="rounded-2xl w-20 bg-gray-100 h-8 flex relative">
                            <div onClick={() => setSlide(false)} className="cursor-pointer w-8 h-8 rounded-full bg-gray-100 absolute left-0 top-0 z-10"></div>
                            <div className={`${Styles.slide} w-8 h-8 rounded-full absolute top-0 z-20 ${slide ? 'right-0 bg-yellow-400' : 'left-0 bg-gray-400'}`}></div>
                            <div onClick={() => setSlide(true)} className="cursor-pointer w-8 h-8 rounded-full bg-gray-100 absolute right-0 top-0 z-10"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex gap-4">
                    <div className={`${Styles.card} w-3/4 rounded-xl p-4`}>
                        {!slide ? (
                            <div className="grid md:grid-cols-2 md:gap-4">
                                <div className="">
                                    <label htmlFor="" className="font-bold">Provinsi</label><br />
                                    <select name="province" id="province" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={province.id} onChange={getCity}>
                                        <option>Pilih provinsi</option>
                                        {provinces?.map((item: any) => (
                                            <option
                                                key={item.id}
                                                value={item.province_id}
                                            >
                                                {item.name}
                                            </option>
                                        ))}
                                    </select><br /><br />

                                    <label htmlFor="" className="font-bold">Kota/Kabupaten</label><br />
                                    <select name="city" id="city" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={city.id} onChange={getDist}>
                                        <option>Pilih kota</option>
                                        {cities && cities?.map((item: any) => (
                                            <option
                                                key={item.id}
                                                value={item.city_id}
                                            >
                                                {item.name}
                                            </option>
                                        ))}
                                    </select><br /><br />

                                    <label htmlFor="" className="font-bold">Kecamatan</label><br />
                                    <select name="district" id="district" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={district.id} onChange={e => setDistrict({ id: e.currentTarget.value })}>
                                        <option>Pilih kecamatan</option>
                                        {districts && districts?.map((item: any) => (
                                            <option
                                                key={item.id}
                                                value={item.subdistrict_id}
                                            >
                                                {item.name}
                                            </option>
                                        ))}
                                    </select><br /><br />

                                    <label htmlFor="" className="font-bold">Kelurahan</label><br />
                                    <input type="text" name="province" id="province" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={form.province} onChange={onChange} /><br /><br />

                                    <label htmlFor="" className="font-bold">Kode Pos</label><br />
                                    <input type="text" name="zipcode" id="zipcode" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={form.zipcode} onChange={onChange} />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="font-bold">Alamat Lengkap</label><br />
                                    <textarea name="address" id="address" className="px-2 mt-2 w-full h-28 border-2 border-gray-300 bg-white rounded-md" placeholder="Jl. Panjang ....." value={form.address} onChange={onChange} /><br /><br />

                                    <label htmlFor="" className="font-bold">Nama Penerima</label><br />
                                    <input type="text" name="name" id="name" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={form.name} onChange={onChange} /><br /><br />

                                    <label htmlFor="" className="font-bold">Nomor HandPhone</label><br />
                                    <input type="text" name="phone" id="phone" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={form.phone} onChange={onChange} /><br /><br />

                                    <label htmlFor="" className="font-bold">Email</label><br />
                                    <input type="text" name="email" id="email" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={form.email} onChange={onChange} />
                                </div>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 md:gap-4">
                                <div className="">
                                    <label htmlFor="" className="font-bold">Nama Penerima</label><br />
                                    <input type="text" name="nama_penerima" id="nama_penerima" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={form.nama_penerima} onChange={onChange} /><br /><br />

                                    <label htmlFor="" className="font-bold">Nomor HandPhone</label><br />
                                    <input type="text" name="no_hp" id="no_hp" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={form.no_hp} onChange={onChange} /><br /><br />

                                    <label htmlFor="" className="font-bold">Market Place</label><br />
                                    <input type="text" name="marketplace" id="marketplace" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={form.marketplace} onChange={onChange} /><br /><br />

                                    <label htmlFor="" className="font-bold">Olshop</label><br />
                                    <input type="text" name="olshop" id="olshop" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={form.olshop} onChange={onChange} /><br /><br />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="font-bold">Resi</label><br />
                                    <input type="text" name="resi" id="resi" className="px-2 mt-2 w-full h-8 border-2 border-gray-300 bg-white rounded-md" value={form.resi} onChange={onChange} /><br /><br />
                                </div>
                            </div>
                        )}

                    </div>

                    <div className="w-1/4 flex flex-col justify-between">
                        {!slide ? (
                            <div className="">
                                <div className={`${Styles.card} p-4 rounded-xl`}>
                                    <div className="">
                                        <p className="font-bold">Pilih Pengiriman</p>
                                        <select name="type" id="type" className="px-4 py-2 mt-2 rounded-lg w-full border-2 border-gray-300" value={type.id} onChange={e => setType({ id: e.currentTarget.value })}>
                                            <option value="">Pilih pengiriman</option>
                                            <option value="REG">Regular (2 - 4 Hari)</option>
                                            <option value="SIUNT">Sameday (1 Hari)</option>
                                            <option value="EZ">Sameday (1 Hari)</option>
                                            <option value="BEST">Sameday (1 Hari)</option>
                                            <option value="CTCYES">Sameday (1 Hari)</option>
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <p className="font-bold">Pilih Kurir</p>
                                        <select name="courier" id="courier" className="px-4 py-2 mt-2 rounded-lg w-full border-2 border-gray-300" value={courier.id} onChange={e => setCourier({ id: e.currentTarget.value })}>
                                            <option value="">Pilih kurir</option>
                                            {couriers && couriers?.map((item: any) => (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="font-bold">Kode Kupon</p>
                                    <input type="text" name="coupon" id="coupon" className="w-full px-4 py-2 rounded-md bg-gray-400 mt-2 text-black" value={form.coupon} onChange={onChange} />
                                </div>
                            </div>
                        ) : (
                            <div className=""></div>
                        )}

                        <div className="mt-4">
                            <div
                                className={`${Styles.bgYellow} px-4 mt-2 py-2 rounded-md cursor-pointer text-center`}
                                onClick={submit}
                            >
                                <p className={`text-white font-bold`}>Lanjut</p>
                            </div>
                        </div>
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

Delivery.getInitialProps = wrapper.getInitialPageProps(store => ({ query }) => {
    if (query.id) store.dispatch(fetchProduct(query.id))
})

export default Delivery
