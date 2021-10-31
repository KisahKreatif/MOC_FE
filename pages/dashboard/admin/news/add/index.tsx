import Image from 'next/image';
import DashboardAdmin from '../../';
import Styles from './styles.module.scss';
import UserPic from '../../../../../src/assets/images/user.jpg';
import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const AddNews = () => {
    const [form, setForm] = useState<any>({})
    const [image, setImage] = useState<any>({})
    const [loading, setLoading] = useState(false)

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value

        setForm({ ...form, [name]: value })
    }

    const onChange2 = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value

        setForm({ ...form, [name]: value })
    }

    const onChange3 = (e: React.FormEvent<HTMLSelectElement>): void => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value

        setForm({ ...form, [name]: value })
    }

    const onChangeFile = (e: any) => {
        let file = e.target.files;

        if (file) {
            setImage(file)
        }
    }

    const onSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (!form.judul || !form.deskripsi || !form.isi || Object.keys(image).length < 1) {
                throw { message: 'Field required' }
            }
            const formData = new FormData()

            Object.keys(image).map(key => {
                if (image[key].size > 2000000) {
                    throw { status: 400, message: 'file to large, maximum size 2MB' }
                }
                formData.append('img', image[key])
            })


            Object.keys(form).map(key => {
                formData.append(key, form[key])
            })

            const res = await axios.post(`${process.env.apiUrl}/news`, formData)

            if (res?.status === 200) {
                swal('Success add article')
                setForm({ judul: '', deskripsi: '', isi: '', type: '' })
                setImage({})
            }
            else swal('Oops!!! something wrong')
        } catch (error: any) {
            swal(`Oops!! something wrong, ${error.message}`)
        }
        setLoading(false)
    }

    return (
        <DashboardAdmin>
            <div className="p-8">
                <div className="flex gap-4">
                    <div className={`${Styles.bgYellow} w-2`}></div>
                    <p className="text-xl font-bold">TAMBAH BERITA</p>
                </div>

                <div className="mt-8 flex justify-center md:px-24">
                    <div className={`${Styles.bgSecond} w-full px-8 md:px-24 py-8 rounded-lg`}>
                        <div className="mt-8 text-black">
                            <form onSubmit={onSubmit}>
                                <div className="">
                                    <input type="text" name="judul" id="judul" placeholder="judul" className={`${Styles.bgWhite} ${Styles.colorYellow} py-2 px-4 rounded-md w-full`} value={form.judul} onChange={onChange} />
                                </div>

                                <div className="mt-8">
                                    <input type="text" name="deskripsi" id="deskripsi" placeholder="deskripsi" className={`${Styles.bgWhite} ${Styles.colorYellow} py-2 px-4 rounded-md w-full`} value={form.deskripsi} onChange={onChange} />
                                </div>

                                <div className="mt-8">
                                    <input type="file" name="img" id="img" accept=".jpef, .png, .jpg" onChange={onChangeFile} className={`${Styles.bgWhite} ${Styles.colorYellow} py-2 px-4 rounded-md md:w-1/2`} />
                                </div>

                                <div className="mt-8">
                                    <textarea name="isi" id="isi" placeholder="isi" className={`${Styles.bgWhite} ${Styles.colorYellow} py-2 px-4 rounded-xl w-full h-96`} value={form.isi} onChange={onChange2} />
                                </div>

                                <div className="mt-8">
                                    <select name="type" id="type" value={form.type} onChange={onChange3} className={`${Styles.bgWhite} ${Styles.colorYellow} py-2 px-4 rounded-xl w-full`}>
                                        <option value="warning">Warning</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                </div>


                                <div className="mt-8 flex justify-center">
                                    {loading ? (
                                        <div className="py-2 px-8 rounded-md bg-gray-300 text-black font-bold">
                                            Loading
                                        </div>
                                    ) : (
                                        <input type="submit" value="Save" className="bg-white px-8 py-2 font-bold text-black rounded-md" />
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardAdmin>
    )
}

export default AddNews;
