import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"
import DashboardMember from "../../.."
import ImageProduct from '../../../../../../src/assets/images/course-product.png'
import ILClose from '../../../../../../src/assets/svg/ILClose.svg'
import bca from '../../../../../../src/assets/images/bca.png'
import star from '../../../../../../src/assets/svg/star.svg'
import Styles from './styles.module.scss'
import { NextPage } from "next"
import wrapper from "../../../../../../store"
import { fetchCourse } from "../../../../../../store/reducers/course"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import myLoader from "../../../../../../src/helpers/loadImage"
import swal from 'sweetalert'
import axios from "axios"

interface Form {
    name: string,
    desc: string,
}

const EditCourse: NextPage = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch()

    const [data, setData] = useState([1, 2, 3, 4])
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState<Form | any>({ name: '', desc: '' })
    const [image, setImage] = useState<object | any>({})


    const course = useSelector(({ courses }: any) => courses.Course);

    useEffect(() => {
        if (id) dispatch(fetchCourse(id))
    }, [id])

    useEffect(() => {
        if (course && Object.keys(course).length > 0) setForm({ name: course.name, desc: course.desc })
    }, [course])

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (!form.name || !form.desc) {
                throw { message: 'Field required' }
            }
            let formData: any

            if (Object.keys(image).length > 0) {
                formData = new FormData()
                Object.keys(image).map(key => {
                    if (image[key].size > 2000000) {
                        throw { status: 400, message: 'file to large, maximum size 2MB' }
                    }
                    formData.append('image', image[key])
                })
                Object.keys(form).map(key => {
                    formData.append(key, form[key])
                })
            } else formData = form



            const res = await axios.post(`${process.env.apiUrl}/product/course/${id}`, formData)

            if (res?.status === 200) {
                swal(`Success add article`)
                setForm({ name: '', desc: '' })
                setImage({})
                router.push('/dashboard/admin/products/course')
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
                    <p className="text-2xl font-bold">EDIT COURSE</p>
                </div>
                <div className="flex gap-4">
                    <div className={`${Styles.form} w-2/3 p-4 md:p-8 rounded-lg mt-4`}>
                        <form onSubmit={onSubmit}>

                            <label htmlFor="">Nama</label>
                            <input type="text" name="name" id="name" className="p-2 my-4 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Nama course" value={form?.name} onChange={onchange} /><br />

                            <label htmlFor="">Deskripsi</label>
                            <input type="text" name="desc" id="desc" className="p-2 my-4 h-24 border-2 border-gray-300 rounded-md w-full text-black" placeholder="Deskripsi course" value={form?.desc} onChange={onchange} /><br />

                            {course?.image && (
                                <div className="py-2">
                                    <Image
                                        loader={myLoader}
                                        src={course?.image}
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
                </div>
            </div>
        </DashboardMember>
    )
}

EditCourse.getInitialProps = wrapper.getInitialPageProps(store => ({ query }) => {
    if (query?.id) store.dispatch(fetchCourse(query.id))
})

export default EditCourse
