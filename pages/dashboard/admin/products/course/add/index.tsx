import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"
import DashboardMember from "../../.."
import Styles from './styles.module.scss'
import swal from 'sweetalert'
import axios from "axios"

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

const AddProdukFisik = () => {
    const router = useRouter()

    const [form, setForm] = useState<Form | any>({ name: '', desc: '', berat: 0, length: 0, width: 0, height: 0, point_pembeli: 0, point_sponsor: 0, commission: 0, category: '' })
    const [image, setImage] = useState<object | any>({})
    const [loading, setLoading] = useState(false)

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (!form.name || !form.desc || Object.keys(image).length < 1) {
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

            const res = await axios.post(`${process.env.apiUrl}/product/course`, formData)

            if (res?.status === 200) {
                swal('Success add course')
                setForm({ name: '', desc: '' })
                setImage({})
                // router.push('/dashboard/admin/product/course')
            }
            else swal('Oops!!! something wrong')

        } catch (error: any) {
            swal(`Oops!! something wrong error = ${error.message}`)
        }
        setLoading(false)
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


    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex gap-4">
                    <div className={`${Styles.divider} w-2`}></div>
                    <p className="text-2xl font-bold">ADD COURSE</p>
                </div>
                <div className="flex gap-4">
                    <div className={`${Styles.form} w-full p-4 md:p-8 rounded-lg mt-4`}>
                        <form onSubmit={onSubmit}>

                            <label htmlFor="">Nama</label>
                            <input type="text" name="name" id="name" className="p-2 my-4 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Nama Course" value={form?.name} onChange={onchange} /><br />

                            <label htmlFor="">Deskripsi</label>
                            <input type="text" name="desc" id="desc" className="p-2 my-4 h-24 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Deskripsi course" value={form?.desc} onChange={onchange} /><br />


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
                </div>
            </div>
        </DashboardMember>
    )
}

export default AddProdukFisik
