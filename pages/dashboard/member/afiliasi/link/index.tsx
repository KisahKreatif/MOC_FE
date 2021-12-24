import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardMember from "../.."
import { fetchPakets } from '../../../../../store/reducers/paket'
import Styles from './styles.module.scss'
import axios from 'axios'
import swal from 'sweetalert'

const Link = () => {
    const dispatch = useDispatch()

    const pakets = useSelector(({ paket }: any) => paket?.Pakets)

    const [paket, setPaket] = useState<any>(0)
    const [link, setLink] = useState('')
    const [load, setLoad] = useState(false)

    useEffect(() => {
        dispatch(fetchPakets())
    }, [])

    const submit = async (e: any) => {
        e.preventDefault()
        setLoad(true)
        try {
            const token = localStorage.getItem('access_token')
            if (token) {
                const res = await axios.post(`${process.env.apiUrl}/afiliasi/generate`, { paket_id: paket }, {
                    headers: {
                        authorization: token
                    }
                })

                console.log(res.data, "<< response");
                if (res.data?.meta.code == 200) {
                    setLink(res.data.data)
                    swal('Success generate link')
                }
            } else throw { message: 'Token dibutuhkan' }
        } catch (error: any) {
            swal('Something error ' + error.message)
        }
        setLoad(false)
    }

    return (
        <DashboardMember>
            <div className="py-8 px-16">
                <div className="flex gap-4">
                    <div className="w-2 bg-yellow-500"></div>
                    <p className="text-2xl font-bold">LINK AFILIASI</p>
                </div>
                <div className={`${Styles.content} p-8 rounded-lg mt-8`}>
                    <p className="text-xl font-bold">Link Produk</p>
                    <div className="mt-4">
                        <form onSubmit={submit} className="flex gap-4">
                            <select name="produk" id="produk" value={paket} onChange={e => setPaket(e.target.value)} className="w-full bg-gray-600 h-8 rounded-lg px-8">
                                <option>Pilih Paket</option>
                                {pakets && pakets?.length > 0 && pakets?.map((el: any) => (
                                    <option key={el.id} value={el.id}>{el.name}</option>
                                ))}
                            </select>
                            {load ? (
                                <div className="px-4 bg-yellow-500 rounded-lg font-bold">Loading...</div>
                            ) : (
                                <input type="submit" value="Generate" className="cursor-pointer px-4 bg-yellow-500 rounded-lg font-bold" />
                            )}
                        </form>
                    </div>
                    <div className="mt-12">
                        <form action="" className="">
                            <label htmlFor="url" className="font-bold">Halaman Penjualan / Sales Page</label>
                            <div className="flex gap-4 mt-4">
                                <input type="text" name="url" id="url" value={link} disabled className={`${Styles.input} border-2 border-gray-600 px-4 py-2 md:w-96 rounded-lg bg-transparent`} />
                                <input type="submit" value="Copy" className={`${Styles.btnGreen} px-4 rounded-lg font-bold`} />
                            </div>
                        </form>
                    </div>
                    <div className="mt-12">
                        <form action="" className="">
                            <label htmlFor="url" className="font-bold">Halaman Checkout</label>
                            <div className="flex gap-4 mt-4">
                                <input type="text" name="url" id="url" value={link} disabled className={`${Styles.input} border-2 border-gray-600 px-4 py-2 md:w-96 rounded-lg bg-transparent`} />
                                <input type="submit" value="Copy" className={`${Styles.btnGreen} px-4 rounded-lg font-bold`} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardMember>
    )
}

export default Link
