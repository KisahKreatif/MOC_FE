import Image from 'next/image'
import DashboardMember from "../.."
import Styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import filter from '../../../../../src/assets/svg/filter.svg'
import myLoader from '../../../../../src/helpers/loadImage'
import { fetchComissionPoduct } from '../../../../../store/reducers/comissions'

const ComissionFisik = () => {
    const dispatch = useDispatch()
    const comissions = useSelector(({ comissions }: any) => comissions.Products)

    useEffect(() => {
        dispatch(fetchComissionPoduct())
    }, [])

    return (
        <DashboardMember>
            <div className="py-8 px-16">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="w-2 bg-yellow-500"></div>
                        <p className="text-2xl font-bold">KOMISI FISIK</p>
                    </div>
                    <div className="flex gap-4">
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
                    <table className={`${Styles.table}`} >
                        <tr className={`${Styles.thead}`} >
                            <th>No</th>
                            <th>User</th>
                            <th>Nama Produk</th>
                            <th>Tanggal Transaksi</th>
                            <th>Total Komisi</th>
                            <th>Status</th>
                        </tr>
                        {comissions && comissions?.map((el: any, i: any) => (
                            <tr key={el.id} className={`${Styles.tbody} cursor-pointer`} >
                                <td>{i + 1}.</td>
                                <td className="flex gap-4 items-center" >
                                    {el?.user?.profile_photo_url && (
                                        <div className="w-8 h-8 rounded-full">
                                            <Image
                                                loader={myLoader}
                                                src={el?.user?.profile_photo_url}
                                                width={50}
                                                height={50}
                                                alt="profile"
                                                className="rounded-full"
                                            />
                                        </div>
                                    )}
                                    <p>{el?.user?.name}</p>
                                </td>
                                <td>{el?.product?.name}</td>
                                <td>
                                    {el?.created_at && (
                                        <p>{new Date(el.created_at).toLocaleDateString()}</p>
                                    )}
                                </td>
                                <td>{el?.commission}</td>
                                <td>
                                    <div className={`${Styles.badgePrimary} rounded-md py-2`}>
                                        <p className="text-xs text-center">Menunggu Pembayaran</p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </DashboardMember>
    )
}

export default ComissionFisik
