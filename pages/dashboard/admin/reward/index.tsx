import { useState } from 'react'
import Image from 'next/image'
import DashboardMember from ".."
import Styles from './styles.module.scss'
import Reward from '../../../../src/assets/images/reward.png'
import ILClose from '../../../../src/assets/svg/ILClose.svg'
import swal from 'sweetalert'
import myLoader from '../../../../src/helpers/loadImage'

const MyReward = () => {
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)

    const [form, setForm] = useState<any>({})
    const [image, setImage] = useState<any>({})

    const onChange = (e: any) => {
        const name = e.target.name
        const value = e.target.value

        setForm({ ...form, [name]: value })
    }

    const onChangeFile = (e: any) => {
        const file = e.target.files[0]
        setImage(file)
    }

    const onSubmit = async (e: any) => {
        e.preventDefault()
        try {
            console.log(form, "<< form");
        } catch (error: any) {
            swal(`Something error ` + error.message)
        }
    }

    return (
        <DashboardMember>
            <div className="py-8 px-16">
                <div className="flex gap-4">
                    <div className="w-2 bg-yellow-500"></div>
                    <p className="text-2xl font-bold">REWARD</p>
                </div>
                <div className="mt-8 flex justify-end">
                    <div
                        className={`${Styles.bgYellow} cursor-pointer px-4 py-2 rounded-md`}
                        onClick={() => {
                            setModal(true)
                            setModal1(true)
                        }}
                    >
                        Add
                    </div>
                </div>
                <div className={`mt-8`}>
                    <table className={`${Styles.table} w-full`} >
                        <thead>
                            <tr className={`${Styles.thead}`} >
                                <th>No</th>
                                <th>Judul</th>
                                <th>Foto</th>
                                <th>Deskripsi</th>
                                <th>Point</th>
                                <th>Jangka Waktu</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={`${Styles.tbody} cursor-pointer`} >
                                <td>2.</td>
                                <td>SmartPhone</td>
                                <td>
                                    <Image
                                        src={Reward}
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td>SmartPhone</td>
                                <td>SmartPhone</td>
                                <td>SmartPhone</td>
                                <td>
                                    <div className="flex gap-4">
                                        <div
                                            className={`${Styles.badgePrimary} cursor-pointer rounded-md py-2 w-24`}
                                            onClick={() => {
                                                setModal(true)
                                                setModal1(true)
                                            }}
                                        >
                                            <p className="text-xs text-center">Edit</p>
                                        </div>
                                        <div
                                            className={`${Styles.badgeSecondary} cursor-pointer rounded-md py-2 w-24`}
                                            onClick={() => {
                                                setModal1(false)
                                                setModal(true)
                                            }}
                                        >
                                            <p className="text-xs text-center">Detail</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center ${modal ? Styles.modal : "hidden"}`}>
                    <div className={`${Styles.modalContent} md:w-1/3 p-4 rounded-xl bg-gray-200`}>
                        {modal1 ? (
                            <>
                                <div className="flex justify-between items-center">
                                    <p className={`${Styles.yellow} text-xl font-bold`}>Add / Edit Reward</p>
                                    {form?.image && (
                                        <Image
                                            loader={myLoader}
                                            src={form?.image}
                                            width={20}
                                            height={20}
                                            onClick={() => setModal(false)}
                                            className="cursor-pointer"
                                        />
                                    )}
                                </div>
                                <div className="mt-4">
                                    <form onSubmit={onSubmit}>
                                        <input type="text" name="judul" id="judul" className={`${Styles.yellow} bg-white rounded-md w-full py-2 px-4`} onChange={onChange} value={form?.judul} placeholder="Judul" />

                                        <input type="file" name="image" id="image" onChange={onChangeFile} className={`${Styles.yellow} bg-white rounded-md w-full py-2 px-4 mt-4`} placeholder="Deskripsi" />

                                        <textarea name="desc" id="desc" onChange={onChange} value={form?.desc} className={`${Styles.yellow} h-24 mt-4 bg-white rounded-md w-full py-2 px-4`} placeholder="Deskripsi" />

                                        <input type="text" name="harga_point" id="harga_point" className={`${Styles.yellow} mt-4 bg-white rounded-md w-full py-2 px-4`} onChange={onChange} value={form?.harga_point} placeholder="Harga Point" />

                                        <input type="date" name="batas" id="batas" className={`${Styles.yellow} mt-4 bg-white rounded-md w-full py-2 px-4`} onChange={onChange} value={form?.batas} placeholder="Batas" />


                                        <input type="submit" value="Submit" className="text-white font-bold mt-4 px-8 py-3 bg-black rounded-md cursor-pointer" />
                                    </form>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex justify-between items-center">
                                    <p className={`${Styles.yellow} text-xl font-bold`}>Detail Reward</p>
                                    <Image
                                        src={ILClose}
                                        width={20}
                                        height={20}
                                        onClick={() => setModal(false)}
                                        className="cursor-pointer"
                                    />
                                </div>
                                <div className="mt-8 flex justify-center">
                                    <Image
                                        src={Reward}
                                        width={150}
                                        height={150}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mt-4">
                                    <form>
                                        <input type="text" name="" id="" className={`${Styles.yellow} bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />

                                        <textarea name="" id="" className={`${Styles.yellow} h-24 mt-4 bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />

                                        <input type="text" name="" id="" className={`${Styles.yellow} mt-4 bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />

                                        <input type="text" name="" id="" className={`${Styles.yellow} mt-4 bg-white rounded-md w-full py-2 px-4`} placeholder="Smartphone" />

                                        <input type="submit" value="Submit" className="text-white font-bold mt-4 px-8 py-3 bg-black rounded-md" />
                                    </form>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </DashboardMember>
    )
}

export default MyReward
