import Image from "next/image"
import DashboardMember from ".."
import Styles from './styles.module.scss'
import filter from '../../../../src/assets/svg/filter.svg'
import { useRouter } from "next/router"
import { NextPage } from "next"
import wrapper from "../../../../store"
import { fetchNews } from "../../../../store/reducers/news"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import swal from 'sweetalert'
import axios from "axios"
import { useState } from "react"

const News: NextPage = () => {
    const router = useRouter()
    const data = [1, 2, 3, 4, 5, 6, 7]
    const dispatch = useDispatch()

    const [loadingDelete, setLoadingDelete] = useState(false)
    const [search, setSearch] = useState('')

    const news = useSelector(({ news }: any) => news.News)
    const loading = useSelector(({ news }: any) => news.Loading)

    useEffect(() => {
        dispatch(fetchNews('', true))
    }, [])

    useEffect(() => {
        if (search.length > 3) {
            dispatch(fetchNews(search, false))
        }
    }, [search])

    const deleteAction = (id: any) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            // buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    setLoadingDelete(true)
                    await axios.delete(`${process.env.apiUrl}/news/${id}`)
                    dispatch(fetchNews('', true))
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    setLoadingDelete(false)
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className={`${Styles.divider} w-2`}></div>
                        <p className={`text-xl font-bold`}>KELOLA BERITA</p>
                    </div>
                    <div className="flex gap-4">
                        <div
                            className={`${Styles.filter} flex gap-4 cursor-pointer py-2 px-4 rounded-md`}
                            onClick={() => router.push('/dashboard/admin/news/add')}
                        >
                            <p className={`text-white font-bold`}>Tambah Berita</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex">
                        <p className="text-xl font-bold">
                            Show  <span className={`${Styles.colorYellow}`}>{news?.length}</span>  Entries
                        </p>
                    </div>
                    <input type="text" name="search" value={search} onChange={e => setSearch(e.currentTarget.value)} className={`${Styles.input} px-4 py-2 rounded-full w-80 text-black`} placeholder="Search" />
                </div>
                <div className="mt-8">
                    <table className={`${Styles.table}`} >
                        <thead>
                            <tr className={`${Styles.thead}`} >
                                <th>No</th>
                                <th>Judul</th>
                                <th>Isi</th>
                                <th>Tipe</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {news?.map((el: any, i: any) => (
                                <tr
                                    key={el.id}
                                    className={`${Styles.tbody} cursor-pointer`}
                                >
                                    <td>{i + 1}.</td>
                                    <td>{el?.judul}</td>
                                    <td className="text-red-600" >Lihat</td>
                                    <td>{el?.type}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <div
                                                className={`${Styles.badgePrimary} rounded-md py-2 px-4`}
                                                onClick={() => router.push(`/dashboard/admin/news/edit/${el.id}`)}
                                            >
                                                <p className="text-xs">Edit</p>
                                            </div>
                                            {loadingDelete ? (
                                                <div className={`bg-gray-400 text-white font-bold rounded-md py-2 px-4`}>
                                                    <p className="text-xs">Loading....</p>
                                                </div>
                                            ) : (
                                                <div
                                                    className={`${Styles.badgeSecondary} rounded-md py-2 px-4`}
                                                    onClick={() => deleteAction(el.id)}
                                                >
                                                    <p className="text-xs">Delete</p>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardMember>
    )
}

News.getInitialProps = wrapper.getInitialPageProps(store => () => {
    store.dispatch(fetchNews('', true))
})

export default News
