import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"
import DashboardMember from "../../.."
import Styles from './styles.module.scss'
import swal from 'sweetalert'
import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from "../../../../../../store/reducers/product"
import { NextPage } from "next"
import wrapper from "../../../../../../store"
import myLoader from "../../../../../../src/helpers/loadImage"

interface Form {
    name: string,
    desc: string,
    berat: number,
    length: number,
    width: number,
    height: number,
    point_pembeli: number,
    point_sponsor: number,
    commission: number,
    variants: FormVariant
}

interface FormVariant {
    name: string,
    price: number
}

const EditProdukFisik: NextPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { id } = router.query

    const [form, setForm] = useState<Form | any>({ name: '', desc: '', berat: 0, length: 0, width: 0, height: 0, point_pembeli: 0, point_sponsor: 0, commission: 0 })
    const [variants, setVariants] = useState<any[]>([])
    const [image, setImage] = useState<object | any>({})
    const [loading, setLoading] = useState(false)
    const [formVarian, setVarian] = useState(false)
    const [formVariant, setVariant] = useState<FormVariant>({ name: '', price: 0 })

    const product = useSelector(({ products }: any) => products.Product)
    const loadingFetch = useSelector(({ products }: any) => products.Loading)

    useEffect(() => {
        if (id) dispatch(fetchProduct(id))
    }, [id])

    useEffect(() => {
        if (product && Object.keys(product).length > 0) {
            setForm({ name: product?.name, desc: product?.desc, berat: product?.berat, length: product?.length, width: product?.width, height: product?.height, point_pembeli: product?.point_pembeli, point_sponsor: product?.point_sponsor, commission: product?.commission })
        }
    }, [product])

    useEffect(() => {
        if (product?.variants) setVariants(product?.variants)
    }, [id, product?.variants])

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (!form.name || !form.desc || variants.length < 1 || Object.keys(image).length < 1) {
                throw { message: 'Field required' }
            }
            const formData = new FormData()

            if (Object.keys(image).length > 0) {
                Object.keys(image).map(key => {
                    if (image[key].size > 2000000) {
                        throw { status: 400, message: 'file to large, maximum size 2MB' }
                    }
                    formData.append('image', image[key])
                })
            }


            Object.keys(form).map(key => {
                formData.append(key, form[key])
            })
            form.variants = variants

            formData.append('variants', JSON.stringify(variants))

            const res = await axios.post(`${process.env.apiUrl}/product/fisik/${id}`, formData)

            if (res?.status === 200) {
                swal('Success add article')
                setForm({ name: '', desc: '', berat: 0, length: 0, width: 0, height: 0, point_pembeli: 0, point_sponsor: 0, commission: 0 })
                setImage({})
                setVariants([])
            }
            else swal('Oops!!! something wrong')

        } catch (error: any) {
            swal(`Oops!! something wrong error = ${error.message}`)
        }
        setLoading(false)
    }

    const goTo = (routeName: any) => {
        router.push(routeName)
    }

    const onchange = (e: React.FormEvent<HTMLInputElement>): void => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value

        setForm({ ...form, [name]: value })
    }

    const photoUpload = (e: any) => {
        let file = e.target.files;

        if (file) {
            setImage(file)
        }
    }

    const onchange2 = (e: React.FormEvent<HTMLInputElement>): void => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value

        setVariant({ ...formVariant, [name]: value })
    }

    const onSubmit2 = (e: React.SyntheticEvent) => {
        e.preventDefault()

        const conc = variants.concat(formVariant)
        setVariants(conc)
        setVariant({ name: '', price: 0 })
        setVarian(false)
    }

    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex gap-4">
                    <div className={`${Styles.divider} w-2`}></div>
                    <p className="text-2xl font-bold">ADD PRODUCT</p>
                </div>
                <div className="flex gap-4">
                    <div className={`${Styles.form} w-2/3 p-4 md:p-8 rounded-lg mt-4`}>
                        <form onSubmit={onSubmit}>

                            <label htmlFor="">Nama Produk</label>
                            <input type="text" name="name" id="name" className="p-2 my-4 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Nama Produk" value={form?.name} onChange={onchange} /><br />

                            <label htmlFor="">Berat</label>
                            <input type="number" name="berat" id="berat" className="p-2 my-4 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Panjang" value={form?.berat} onChange={onchange} /><br />

                            <label htmlFor="">Panjang</label>
                            <input type="number" name="length" id="length" className="p-2 my-4 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Panjang" value={form?.length} onChange={onchange} /><br />

                            <label htmlFor="">Lebar</label>
                            <input type="number" name="width" id="width" className="p-2 my-4 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Lebar" value={form?.width} onChange={onchange} /><br />

                            <label htmlFor="">Tinggi</label>
                            <input type="number" name="height" id="height" className="p-2 my-4 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Tinggi" value={form?.height} onChange={onchange} /><br />

                            <label htmlFor="">Point Pembeli</label>
                            <input type="number" name="point_pembeli" id="point_pembeli" className="p-2 my-4 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Point Pembeli" value={form?.point_pembeli} onChange={onchange} /><br />

                            <label htmlFor="">Point Sponsor</label>
                            <input type="number" name="point_sponsor" id="point_sponsor" className="p-2 my-4 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Point Sponsor" value={form?.point_sponsor} onChange={onchange} /><br />

                            <label htmlFor="">Komisi</label>
                            <input type="number" name="commission" id="commission" className="p-2 my-4 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Komisi" value={form?.commission} onChange={onchange} /><br />

                            <label htmlFor="">Deskripsi Produk</label>
                            <input type="text" name="desc" id="desc" className="p-2 my-4 h-24 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Deskripsi product" value={form?.desc} onChange={onchange} /><br />

                            {product?.image && (
                                <div className="py-2">
                                    <Image
                                        loader={myLoader}
                                        src={product?.image}
                                        width={200}
                                        height={200}
                                        className="object-cover"
                                        layout="responsive"
                                    />
                                </div>
                            )}

                            <input
                                type="file"
                                name="image"
                                id="image"
                                className="mt-4"
                                aria-label="File browser example"
                                accept=".jpef, .png, .jpg"
                                onChange={photoUpload}
                            />

                            {loading ? (
                                <div className="mt-4 p-2 text-center bg-gray-300 roundedmd w-full font-bold">
                                    Loading...
                                </div>
                            ) : (
                                <input type="submit" value="Submit" className="p-2 w-full bg-white rounded-md font-bold text-black mt-4 cursor-pointer" />
                            )}

                        </form>
                    </div>
                    <div className={`${Styles.form} w-1/3 p-2 md:p-8 rounded-lg mt-4 h-full relative`}>
                        <div
                            className="bg-yellow-300 text-white font-bold text-center py-2 rounded-md w-24 cursor-pointer"
                            onClick={() => setVarian(!formVarian)}>
                            Add
                        </div>
                        {formVarian && (
                            <div className="absolute w-full top-20 left-0 p-2 bg-white rounded-md">
                                <form onSubmit={onSubmit2}>
                                    <input type="text" name="name" id="name" className="border-2 border-gray-300 rounded-md text-black w-full" value={formVariant.name} onChange={onchange2} /> <br />
                                    <input type="number" name="price" id="price" className="border-2 border-gray-300 rounded-md mt-2 text-black w-full" value={formVariant.price} onChange={onchange2} /> <br />
                                    <input type="submit" value="Add" className="px-4 py-2 mt-2 bg-gray-600 text-white rounded-sm cursor-pointer" />
                                </form>
                            </div>
                        )}
                        <table className={`${Styles.tableVariant} mt-4 overflow-x-auto block`}>
                            <thead>
                                <tr>
                                    <th className="w-1/4 p-2 text-left">No</th>
                                    <th className="w-1/4 p-2 text-left">Nama Varian</th>
                                    <th className="w-1/4 p-2 text-left">Harga</th>
                                    <th className="w-1/4 p-2 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {variants?.map((item, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}.</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <div className="flex gap-2">
                                                <div className="cursor-pointer p-2 bg-black text-white">Ubah</div>
                                                <div className="cursor-pointer p-2 bg-white text-black">Hapus</div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardMember>
    )
}

EditProdukFisik.getInitialProps = wrapper.getInitialPageProps(store => ({ query }) => {
    if (query?.id) store.dispatch(fetchProduct(query.id))
})

export default EditProdukFisik
