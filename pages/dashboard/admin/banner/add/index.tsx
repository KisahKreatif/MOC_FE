import Image from 'next/image'
import DashboardAdmin from '../..'
import Styles from './styles.module.scss'
import UserPic from '../../../../../src/assets/images/user.jpg'
import Banner from '../../../../../src/assets/images/banner.jpg'
import React, { useState } from 'react'
import swal from 'sweetalert'
import axios from 'axios'

const AddBanner = () => {
    const [link, setLink] = useState('')
    const [loading, setLoading] = useState(false)
    const [img, setImg] = useState<any>({})

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setLink(e.currentTarget.value)
    }

    const onChangeFile = (e: any) => {
        let file = e.target.files

        if (file) {
            setImg(file)
        }
    }

    const onSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData()

            Object.keys(img).map(el => {
                formData.append('img', img[el])
            })

            formData.append('link', link)

            const res = await axios.post(`${process.env.apiUrl}/banner`, formData)

            if (res?.status === 200) {
                swal('Success add banner')
                setLink('')
                setImg({})
            } else throw { message: 'Server not response' }
        } catch (error: any) {
            swal(`Oopps!! sonething error ${error.message}`)
        }
        setLoading(false)
    }

    return (
        <DashboardAdmin>
            <div className="p-8">
                <div className="flex gap-4">
                    <div className={`${Styles.bgYellow} w-2`}></div>
                    <p className="text-xl font-bold">ADD BANNER</p>
                </div>

                <div className="flex">
                    <div className={`w-full py-8`}>
                        {/* <Image
                            src={Banner}
                            width={100}
                            height={50}
                            layout="responsive"
                            className="object-cover rounded-md"
                        /> */}
                        <div className="text-black mt-8">
                            <form onSubmit={onSubmit}>
                                <div className="">
                                    <label htmlFor="" className="text-white font-bold">Link</label> <br />
                                    <input type="text" name="name" id="name" className={`${Styles.bgWhite} ${Styles.colorYellow} py-2 px-4 rounded-md w-full`} value={link} onChange={onChange} />
                                </div>

                                <div className="mt-8">
                                    <label htmlFor="" className="text-white font-bold">Upload banner</label> <br />
                                    <input type="file" name="name" id="name" className={`${Styles.bgWhite} ${Styles.colorYellow} py-2 px-4 rounded-md md:w-1/2`} onChange={onChangeFile} />
                                </div>

                                <input type="submit" value="Save" className="cursor-pointer mt-8 bg-white px-8 py-2 font-bold text-black rounded-md" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardAdmin>
    )
}

export default AddBanner
