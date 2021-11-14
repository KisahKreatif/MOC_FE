import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import DashboardMember from "../../.."
import ImageProduct from '../../../../../../src/assets/images/product-1.png'
import ILClose from '../../../../../../src/assets/svg/ILClose.svg'
import bca from '../../../../../../src/assets/images/bca.png'
import copy from '../../../../../../src/assets/images/copy.png'
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
import { fetchTransaction } from "../../../../../../store/reducers/transaction"

const Delivery: NextPage = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)

    const transaction = useSelector(({ transaction }: any) => transaction.Transaction)

    useEffect(() => {
        if (router.query?.type && id) {
            const token = localStorage.getItem('access_token')
            dispatch(fetchTransaction(router.query.type, +id, token))
        }
        console.log(transaction, "<< transaction");
    }, [id])

    const goTo = (routeName: any) => {
        router.push(routeName)
    }


    return (
        <DashboardMember>
            <div className="p-8 relative">
                <div className="flex gap-4 items-center">
                    <div className={`${Styles.bgYellow} w-2 h-8`}></div>
                    <p className="text-xl font-bold text-white">Detail Pembayaran</p>
                </div>
                <div className="md:flex md:gap-4 mt-8">
                    {router.query?.type == 'marketplace' ? (
                        <>
                            <div className={`${Styles.bgWhite} p-4 md:w-3/4 rounded-md`}>
                                <div className="flex justify-between pb-4 border-b-2 border-gray-300">
                                    <p className="text-gray-400">Total Harga (1 barang)</p>
                                    <p className="text-black font-bold">Rp {transaction?.product?.variants[0]?.price}</p>
                                </div>
                                <div className="flex justify-between py-4 border-b-2 border-gray-300">
                                    <p className="text-black text-lg font-bold">Total Bayar</p>
                                    <p className="text-yellow-600 text-lg font-bold">Rp {transaction?.product?.variants[0]?.price}</p>
                                </div>

                                <div className="mt-4">
                                    <p className="text-black text-lg font-bold">Barang yang dibeli</p>

                                    <div className="mt-2 flex justify-between items-center">
                                        <p className="text-lg text-gray-400">No Resi</p>
                                        <p className="text-lg text-black">{transaction?.resi}</p>
                                    </div>
                                    <div className="mt-2 flex justify-between items-center">
                                        <p className="text-lg text-gray-400">Marketplace</p>
                                        <p className="text-lg text-black">{transaction?.marketplace}</p>
                                    </div>
                                    <div className="mt-2 flex justify-between items-center">
                                        <p className="text-lg text-gray-400">Olshop</p>
                                        <p className="text-lg text-black">{transaction?.olshop}</p>
                                    </div>

                                </div>
                            </div>
                            <div className={`${Styles.bgYellow} p-4 md:w-1/4 rounded-md h-full cursor-pointer text-white font-bold text-center`}>
                                Lihat Orderan Saya
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={`${Styles.bgWhite} p-4 md:w-1/2 rounded-md`}>
                                <div className="flex gap-4 items-center">
                                    <div className={`${Styles.bgYellow} w-2 h-8`}></div>
                                    <p className="text-xl font-bold text-black">Lakukan Transfer Ke Rekening MOC</p>
                                </div>
                                <div className="flex p-4 gap-4 justify-between items-center">
                                    <div className="w-full">
                                        <Image
                                            src={bca}
                                            width={237}
                                            height={74}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-xl font-bold text-black">Transfer Bank BCA</p>
                                        <div className="p-2 rounded-md bg-gray-300 h-12 flex justify-between gap-4 mt-2">
                                            <p className={`${Styles.blue} font-bold text-xl`}>6303988888</p>
                                            <Image
                                                src={copy}
                                                width={30}
                                                height={30}
                                                className="cursor-pointer"
                                            />
                                        </div>
                                        <p className="mt-2 text-black">atas nama YOSUA</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${Styles.bgWhite} p-4 md:w-1/2 rounded-md`}>
                                <div className="flex gap-4 items-center">
                                    <div className={`${Styles.bgYellow} w-2 h-8`}></div>
                                    <p className="text-xl font-bold text-black">Silahkan Transfer Dengan Nominal</p>
                                </div>
                                <p className="text-lg mt-4 ml-4 font-bold text-black">Total Bayar</p>
                                <div className="flex ml-4 gap-4 justify-between">
                                    <div className="mt-2 w-full">
                                        <div className="p-2 h-12 flex items-center rounded-md bg-gray-300 flex gap-4 justify-between">
                                            <p className={`font-bold text-xl text-black`}>Rp {transaction?.price ? Number(transaction?.price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') : 0}</p>
                                            <Image
                                                src={copy}
                                                width={30}
                                                height={30}
                                                className="cursor-pointer"
                                            />
                                        </div>
                                        <p className="mt-2 text-black text-sm">Pastikan nominal sesuai hingga 1 digit terakhir</p>
                                    </div>
                                    <div className="mt-2 w-full">
                                        <div
                                            className={`${Styles.bgYellow} w-full h-12 flex items-center justify-center py-2 px-4 rounded-md cursor-pointer text-white font-bold`}
                                            onClick={() => setModal(true)}
                                        >
                                            Lihat Detail
                                        </div>

                                        <div
                                            className={`border-2 mt-4 ${Styles.borderYellow} ${Styles.yellow} w-full h-12 flex items-center justify-center py-2 px-4 rounded-md cursor-pointer font-bold`}
                                            onClick={() => router.push(`/dashboard/member/my-order/product`)}
                                        >
                                            Lihat My Order
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {router.query?.type !== 'marketplace' && (
                    <div className="mt-8">
                        <div className="flex gap-4 items-center">
                            <div className={`${Styles.bgYellow} w-2 h-8`}></div>
                            <p className="text-xl font-bold text-white">Cara Bayar</p>
                        </div>
                        <div className="">
                            <p className="text-white mt-4">1. Transfer Jumlah yang harus dibayar melalui ATM atau M-Banking Anda</p>
                            <p className="text-white mt-4">2. Jika sudah di transfer klik tombol <input type="file" name="image" id="image" /> , lalu unggah bukti transfer tagihan pembayaran anda dan klik tombol save</p>
                            <p className="text-white mt-4">3. Pastikan pembayaran Anda sudah BERHASIL dan UNGGAH BUKTI BAYAR untuk mempercepat proses verifikasi</p>
                        </div>
                    </div>
                )}

                <div className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center ${modal ? Styles.modal : "hidden"}`}>
                    <div className={`${Styles.modalContent} md:w-3/5 p-4 rounded-xl bg-gray-100`}>
                        <div className="flex justify-between">
                            <div className=""></div>
                            <p className="text-xl font-bold">Detail Pembayaran</p>
                            <Image
                                src={ILClose}
                                width={20}
                                height={20}
                                className="cursor-pointer"
                                onClick={() => setModal(false)}
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <div className="">
                                    <p className="text-lg text-gray-400">Total Harga [1 barang]</p>
                                </div>
                                <div className="">
                                    <p className="text-lg text-black">Rp {transaction?.price ? Number(transaction?.price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') : 0}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div className="">
                                    <p className="text-lg text-gray-400">Total Ongkos Kirim</p>
                                </div>
                                <div className="">
                                    <p className="text-lg text-black">Rp {transaction?.delivery?.ongkir ? Number(transaction?.delivery?.ongkir).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') : 0}</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-2">
                                <div className="">
                                    <p className="text-lg text-gray-400">Kode Unik</p>
                                </div>
                                <div className="">
                                    <p className="text-lg text-red-600">+Rp{transaction?.price ? String(transaction?.price).substring(String(transaction?.price).length - 3, transaction?.price) : '-'}</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-2">
                                <div className="">
                                    <p className="text-lg text-gray-400">Status Pembayaran</p>
                                </div>
                                <div className="">
                                    <p className="text-lg text-black">{transaction?.status == 'pembayaran' ? 'Menunggu Pembayaran' : transaction?.status}</p>
                                </div>
                            </div>

                            <div className="h-px w-full bg-gray-300 mt-4"></div>

                            <div className="flex justify-between items-center py-4">
                                <div className="">
                                    <p className="text-xl text-black font-bold">Total Bayar</p>
                                </div>
                                <div className="">
                                    <p className={`${Styles.yellow} font-bold text-xl`}>Rp {transaction?.price ? Number(transaction?.price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') : 0}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardMember>
    )
}

// Delivery.getInitialProps = wrapper.getInitialPageProps(store => ({ query }) => {
//     if (query?.id && query.type) store.dispatch(fetchTransaction(query.type, query.id))
// })

export default Delivery
