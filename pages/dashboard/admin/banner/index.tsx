import Image from "next/image"
import DashboardMember from ".."
import Styles from './styles.module.scss'
import filter from '../../../../src/assets/svg/filter.svg'
import { useRouter } from "next/router"
import { NextPage } from "next"
import wrapper from "../../../../store"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBanners } from '../../../../store/reducers/banner'

const Banner: NextPage = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const data = [1, 2, 3, 4, 5, 6, 7]

    const banners = useSelector(({ banners }: any) => banners.Banners)

    useEffect(() => {
        dispatch(fetchBanners())
    }, [])

    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className={`${Styles.divider} w-2`}></div>
                        <p className={`text-xl font-bold`}>KELOLA BANNER</p>
                    </div>
                    <div className="flex gap-4">
                        <div
                            className={`${Styles.filter} flex gap-4 cursor-pointer py-2 px-4 rounded-md cursor-pointer`}
                            onClick={() => router.push('/dashboard/admin/banner/add')}
                        >
                            <p className={`text-white font-bold`}>Tambah Banner</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex">
                        <p className="text-xl font-bold">
                            Show  <span className={`${Styles.colorYellow}`}>5</span>  Entries
                        </p>
                    </div>
                    <input type="text" name="search" className={`${Styles.input} px-4 py-2 rounded-full w-80`} placeholder="Search" />
                </div>
                <div className="mt-8">
                    <table className={`${Styles.table}`} >
                        <tr className={`${Styles.thead}`} >
                            <th>No</th>
                            <th>Link</th>
                            <th>Gambar</th>
                            <th>Action</th>
                        </tr>
                        {banners && banners?.map((el: any, i: any) => (
                            <tr
                                key={el.id}
                                className={`${Styles.tbody} cursor-pointer`}
                            >
                                <td>{i + 1}.</td>
                                <td>{el?.link}</td>
                                <td className="text-red-600" >Lihat</td>
                                <td>
                                    <div className="flex gap-2">
                                        <div
                                            className={`${Styles.badgePrimary} rounded-md py-2 px-4`}
                                            onClick={() => router.push(`/dashboard/admin/banner/edit/${el.id}`)}
                                        >
                                            <p className="text-xs">Edit</p>
                                        </div>
                                        <div className={`${Styles.badgeSecondary} rounded-md py-2 px-4`}>
                                            <p className="text-xs">Delete</p>
                                        </div>
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

Banner.getInitialProps = wrapper.getInitialPageProps(store => () => {
    store.dispatch(fetchBanners())
})

export default Banner
