import Image from 'next/image'
import DashboardMember from "../.."
import Styles from './styles.module.scss'
import filter from '../../../../../src/assets/svg/filter.svg'
import WhatsApp from '../../../../../src/assets/images/chat-with-us.png'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComissionFacebookPixel } from '../../../../../store/reducers/comissions'
import myLoader from '../../../../../src/helpers/loadImage'

const FacebookPixel = () => {
    const dispatch = useDispatch()
    const comissions = useSelector(({ comissions }: any) => comissions.FacebookPixel)

    useEffect(() => {
        dispatch(fetchComissionFacebookPixel())
    }, [])

    return (
        <DashboardMember>
            <div className="py-8 px-16">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="w-2 bg-yellow-500"></div>
                        <p className="text-2xl font-bold">FACEBOOK PIXEL</p>
                    </div>
                </div>
                <div className={`mt-8`}>
                    <table className={`${Styles.table} w-full`} >
                        <tr className={`${Styles.thead}`} >
                            <th>No</th>
                            <th>Nama Produk</th>
                            <th>Action</th>
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
                                <td>
                                    <div className={`${Styles.badgePrimary} rounded-md py-2 w-24`}>
                                        <p className="text-xs text-center">Edit</p>
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

export default FacebookPixel
