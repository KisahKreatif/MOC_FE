import Image from 'next/image'
import { useState } from 'react'
import DashboardMember from "../.."
import Styles from './styles.module.scss'
import filter from '../../../../../src/assets/svg/filter.svg'
import ILClose from '../../../../../src/assets/svg/ILClose.svg'
import bca from '../../../../../src/assets/images/bca.png'

const MyOrderProduct = () => {
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)

    return (
        <DashboardMember>
            <div className="py-8 px-16">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="w-2 bg-yellow-500"></div>
                        <p className="text-2xl font-bold">MY ORDER (PRODUCT)</p>
                    </div>
                    <div className="flex gap-4">
                        <input type="text" name="search" className={`${Styles.input} px-4 py-2 rounded-lg`} placeholder="Cari Produk" />
                        <div className={`${Styles.input} flex gap-4 cursor-pointer py-2 px-4`}>
                            <Image
                                src={filter}
                                width={20}
                                height={20}
                                alt="icon"
                            />
                            <p className={Styles.filter}>Filter</p>
                        </div>
                    </div>
                </div>
                <div className={`mt-8`}>
                    <table className={`${Styles.table} overflow-x-auto block`} >
                        <thead>
                            <tr className={`${Styles.thead}`} >
                                <th className="w-1/4">No</th>
                                <th scope="col" className="w-1/2">Nama Produk</th>
                                <th className="w-1/4">Jenis Produk</th>
                                <th className="w-1/4">Point Pembeli</th>
                                <th className="w-1/4">Kuantiti</th>
                                <th className="w-1/2">Detail Pengiriman</th>
                                <th className="w-full">Kupon</th>
                                <th className="w-1/4">Tanggal Beli</th>
                                <th className="w-1/4">Tanggal Tiba</th>
                                <th className="w-1/4">Total Harga</th>
                                <th className="w-1/4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={`${Styles.tbody}`} >
                                <td>1.</td>
                                <td>Danuar Riyaldi</td>
                                <td>Produk 1</td>
                                <td>940 Transaksi</td>
                                <td>940 Transaksi</td>
                                <td>
                                    <div
                                        className={`${Styles.badgePrimary} rounded-md py-2 px-2 cursor-pointer`}
                                        onClick={() => {
                                            setModal2(false)
                                            setModal(true)
                                        }}
                                    >
                                        <p className="text-xs text-center">Detail Pengiriman</p>
                                    </div>
                                    <div
                                        className={`${Styles.badgeSecondary} rounded-md py-2 px-2 mt-2 cursor-pointer`}
                                        onClick={() => {
                                            setModal(true)
                                            setModal2(true)
                                        }}
                                    >
                                        <p className="text-xs text-center">Detail Penerima</p>
                                    </div>
                                </td>
                                <td>940 Transaksi</td>
                                <td>940 Transaksi</td>
                                <td>940 Transaksi</td>
                                <td>940 Transaksi</td>
                                <td>
                                    <div className={`${Styles.statusBtn} rounded-md py-2 px-4 cursor-pointer`}>
                                        <p className="text-xs text-center">Pesanan ditolak</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center ${modal ? Styles.modal : "hidden"}`}>
                {modal2 ? (
                    <div className={`${Styles.modalContent} p-4 rounded-xl bg-gray-100`}>
                        <div className="flex gap-8 md:gap-96 justify-between items-center">
                            <div className="flex gap-2">
                                <div className="w-1 bg-yellow-600"></div>
                                <p className="text-xl font-bold">Detail Penerima</p>
                            </div>
                            <Image
                                src={ILClose}
                                width={20}
                                height={20}
                                onClick={() => setModal(false)}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="mt-8">
                            <ul>
                                <li className="flex gap-4"><p className="w-48">Nama Penerima</p> <p className="font-bold">: Danuar</p></li>
                                <li className="flex gap-4"><p className="w-48">No. Hp Penerima</p> <p className="font-bold">: JNT</p></li>
                                <li className="flex gap-4"><p className="w-48">Alamat Pengiriman</p> <p className="font-bold w-96">: Jl. Waspada Raya, RT.9/RW.10, Pademangan Bar, Kec. Pademangan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14420</p></li>
                                <li className="flex gap-4"><p className="w-48">Provinsi</p> <p className="font-bold">: Banten</p></li>
                                <li className="flex gap-4"><p className="w-48">Kabupaten</p> <p className="font-bold">: 08-07-2021</p></li>
                                <li className="flex gap-4"><p className="w-48">Kecamatan</p> <p className="font-bold">: 08-07-2021</p></li>
                                <li className="flex gap-4"><p className="w-48">Kode Pos</p> <p className="font-bold">: 08-07-2021</p></li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className={`${Styles.modalContent} p-4 rounded-xl bg-gray-100`}>
                        <div className="flex gap-8 md:gap-96 justify-between items-center">
                            <div className="flex gap-2">
                                <div className="w-1 bg-yellow-600"></div>
                                <p className="text-xl font-bold">Detail Pengiriman</p>
                            </div>
                            <Image
                                src={ILClose}
                                width={20}
                                height={20}
                                onClick={() => setModal(false)}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="mt-8">
                            <ul>
                                <li className="flex gap-4"><p className="w-48">Penerima</p> <p className="font-bold">: Danuar</p></li>
                                <li className="flex gap-4"><p className="w-48">Ekspedisi</p> <p className="font-bold">: JNT</p></li>
                                <li className="flex gap-4"><p className="w-48">Jenis Pengiriman</p> <p className="font-bold">: Cepat Sampai</p></li>
                                <li className="flex gap-4"><p className="w-48">No resi</p> <p className="font-bold">: 435346346</p></li>
                                <li className="flex gap-4"><p className="w-48">Tanggal Tiba</p> <p className="font-bold">: 08-07-2021</p></li>
                            </ul>
                        </div>
                    </div>
                )}

            </div>
        </DashboardMember>
    )
}

export default MyOrderProduct
