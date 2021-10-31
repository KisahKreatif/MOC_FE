import Image from 'next/image'
import { useState } from 'react'
import DashboardMember from "../.."
import Styles from './styles.module.scss'
import filter from '../../../../../src/assets/svg/filter.svg'
import ILClose from '../../../../../src/assets/svg/ILClose.svg'
import bca from '../../../../../src/assets/images/bca.png'

const ProductTransaction = () => {
    const [modal, setModal] = useState(false)

    return (
        <DashboardMember>
            <div className="py-8 px-16">
                <div className="flex">
                    <div className="flex gap-4">
                        <div className="w-2 bg-yellow-500"></div>
                        <p className="text-2xl font-bold">TRANSAKSI PRODUK FISIK</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <div className={`${Styles.input} flex gap-4 cursor-pointer py-2 px-4 rounded-md shadow-lg`}>
                        <Image
                            src={filter}
                            width={20}
                            height={20}
                            alt="icon"
                        />
                        <p className={Styles.filter}>Filter</p>
                    </div>
                    <input type="text" name="search" className={`bg-white px-4 py-2 rounded-lg`} placeholder="Search" />
                </div>
                <div className={`mt-8`}>
                    <table className={`${Styles.table} overflow-x-auto block`} >
                        <thead>
                            <tr className={`${Styles.thead}`} >
                                <th className="w-1/4">No</th>
                                <th scope="col" className="w-1/2">Pembeli</th>
                                <th className="w-1/4">Nama Barang</th>
                                <th className="w-1/4">Kode Transaksi</th>
                                <th className="w-1/4">WhatsApp</th>
                                <th className="w-1/2">Kupon</th>
                                <th className="w-1/4">Ekspedisi</th>
                                <th className="w-full">Jenis Pengiriman</th>
                                <th className="w-1/4">No Resi</th>
                                <th className="w-1/4">Harga</th>
                                <th className="w-1/4">Kuantiti</th>
                                <th className="w-1/4">Waktu</th>
                                <th className="w-1/4">Status</th>
                                <th className="w-1/4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={`${Styles.tbody}`} >
                                <td>1.</td>
                                <td>Danuar Riyaldi</td>
                                <td>Produk 1</td>
                                <td>940 Transaksi</td>
                                <td className="text-red-600 cursor-pointer" >Chat</td>
                                <td>940 Transaksi</td>
                                <td>940 Transaksi</td>
                                <td>940 Transaksi</td>
                                <td>940 Transaksi</td>
                                <td>940 Transaksi</td>
                                <td>940 Transaksi</td>
                                <td>940 Transaksi</td>
                                <td>
                                    <div className={`${Styles.statusBtn} rounded-md py-2 px-4 cursor-pointer`}>
                                        <p className="text-xs text-center">Expaired</p>
                                    </div>
                                </td>
                                <td className="flex gap-4">
                                    <div
                                        className={`bg-white rounded-md py-2 px-4 cursor-pointer`}
                                    >
                                        <p className="text-xs text-center text-black font-bold">Detail</p>
                                    </div>
                                    <div
                                        className={`${Styles.actionBtn} rounded-md py-2 px-4 cursor-pointer`}
                                    >
                                        <p className="text-xs text-center font-bold">Refund</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center ${modal ? Styles.modal : "hidden"}`}>
                <div className={`${Styles.modalContent} p-4 rounded-xl bg-gray-100`}>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <div className="w-1 bg-yellow-600"></div>
                            <p className="text-xl font-bold">Silahkan Transfer Ke Rekening Bank </p>
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
                        <div className="flex gap-8 items-center">
                            <Image
                                src={bca}
                                width={100}
                                height={30}
                            />
                            <div className="">
                                <p className="text-lg font-bold">Transfer Bank BCA</p>
                                <p>6303988888</p>
                                <p className="text-sm">a.n YOSUA</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-lg">Jumlah yang harus dibayar</p>
                            <div className="px-4 py-2 bg-gray-300 text-xl rounded-lg mt-2 md:w-1/2 font-bold">Rp 420.000</div>
                        </div>
                        <div className="mt-6">
                            <div className="h-px bg-gray-300"></div>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <div className="w-1 bg-yellow-600"></div>
                            <p className="text-xl font-bold">Cara Bayar</p>
                        </div>

                        <div className="mt-4">
                            <ul className="flex flex-col gap-4">
                                <li className="w-96 md:w-full">1. Transfer <span className="font-bold">Jumlah yang harus dibayar</span> melalui ATM atau M-Banking Anda</li>
                                <li className="w-96 md:w-full">2. Jika sudah di transfer klik tombol <span className="px-2 py-2 bg-yellow-400 text-xs rounded-md font-bold" style={{ color: '#ffff' }}>Upload bukti bayar</span> , lalu unggah bukti transfer tagihan pembayaran anda dan klik tombol save</li>
                                <li className="w-96 md:w-full">3. Transfer Jumlah yang harus dibayar melalui ATM atau M-Banking Anda</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardMember>
    )
}

export default ProductTransaction
