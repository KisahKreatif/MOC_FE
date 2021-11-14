import DashboardAdmin from '..'
import Styles from './styles.module.scss'
import Image from 'next/image'
import filter from '../../../../src/assets/svg/filter.svg'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPakets } from '../../../../store/reducers/paket'
import myLoader from '../../../../src/helpers/loadImage'
import { fetchCourses } from '../../../../store/reducers/course'
import swal from 'sweetalert'
import axios from 'axios'

const Paket = () => {
    const dispatch = useDispatch()

    const router = useRouter()
    const [search, setSearch] = useState<any>('')
    const [searchCourse, setSearchCourse] = useState<any>('')
    const [select, setSelect] = useState<any>(null)
    const [addCourse, setAddCourse] = useState<any>(false)
    const [selectedCourses, setSelectedCourses] = useState<any[]>([])
    const [loading, setLoading] = useState<any>(false)

    const pakets = useSelector(({ paket }: any) => paket?.Pakets)
    const courses = useSelector(({ courses }: any) => courses.Courses);

    useEffect(() => {
        dispatch(fetchPakets())
    }, [])

    useEffect(() => {
        if (searchCourse.length > 3) dispatch(fetchCourses(searchCourse, false))
    }, [searchCourse])

    const goTo = (path: string) => {
        router.push(path)
    }

    const onSelectCourse = (course: any) => {
        course['paket_id'] = select

        const arr = selectedCourses.concat(course)
        setSelectedCourses(arr)
    }

    const submit = async () => {
        setLoading(true)
        try {
            if (selectedCourses?.length > 0) {
                let response: any
                const insert = await selectedCourses.map(async (el: any) => {
                    const data = {
                        course_id: el.id,
                        paket_id: el.paket_id,
                    }
                    const res = await axios.post(`${process.env.apiUrl}/course_paket`, data)
                    response = res.data
                })

                await Promise.all(insert)
                console.log(response, "<< res");

                if (response?.meta?.code == 200) {
                    swal('Success add course')
                    setAddCourse(false)
                } else throw { message: 'Failed add course' }
            }
        } catch (error: any) {
            swal(`Ooops!! something error ${error.message}`)
        }
        setLoading(false)
    }

    return (
        <DashboardAdmin>
            <div className="py-8 px-16">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="w-2 bg-yellow-500"></div>
                        <p className="text-2xl font-bold">PAKET</p>
                    </div>
                    <div className="flex gap-4">
                        <input type="text" name="search" className={`${Styles.input} px-4 py-2 rounded-lg`} placeholder="Search" value={search} onChange={e => setSearch(e.currentTarget.value)} />
                        <div
                            className={`${Styles.input} flex gap-4 cursor-pointer py-2 px-4`}
                            onClick={() => goTo('/dashboard/admin/paket/add')}
                        >
                            <p className={Styles.filter}>Tambah Paket</p>
                        </div>
                    </div>
                </div>
                <div className={`mt-8`}>
                    <table className={`${Styles.table} overflow-x-auto block`} >
                        <thead>
                            <tr className={`${Styles.thead}`} >
                                <th className="w-1/4">No</th>
                                <th scope="col" className="w-1/2">Nama</th>
                                <th className="w-1/4">Deskripsi</th>
                                <th className="w-1/4">Batas Pengguna</th>
                                <th className="w-1/4">Member</th>
                                <th className="w-1/4">Harga</th>
                                <th className="w-1/4">Gambar</th>
                                <th className="w-1/2">Point Pembeli</th>
                                <th className="w-1/2">Point Sponsor</th>
                                <th className="w-full">Komisi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pakets && pakets?.map((el: any, i: any) => (
                                <>
                                    <tr key={el.id} onClick={() => select == el.id ? setSelect(null) : setSelect(el.id)} className={`border-b-2 ${select == el.id ? 'border-gray-600' : 'border-black'} cursor-pointer`}>
                                        <td>{i + 1}</td>
                                        <td>{el?.name}</td>
                                        <td className="overflow-x-auto w-24">{el?.desc}</td>
                                        <td>{el?.batas}</td>
                                        <td>{el?.is_member == 1 ? 'Iya' : 'Tidak'}</td>
                                        <td>{el?.price}</td>
                                        <td>
                                            {el?.image && (
                                                <Image
                                                    loader={myLoader}
                                                    src={el.image}
                                                    width={30}
                                                    height={50}
                                                    className="object-cover"
                                                />
                                            )}
                                        </td>
                                        <td>{el?.point_pembeli}</td>
                                        <td>{el?.point_sponsor}</td>
                                        <td>{el?.commission}</td>
                                    </tr>
                                    {select == el.id && (
                                        <tr key={el.id} className="w-full border-b-2 border-gray-600">
                                            <td></td>
                                            <td className="">
                                                <div className="px-4 py-2 rounded-md bg-white text-black">
                                                    Action
                                                </div>
                                            </td>
                                            <td className="pr-2 border-r-2 border-gray-600">
                                                <div onClick={() => setAddCourse(!addCourse)} className="cursor-pointer text-white">
                                                    Add Course
                                                </div>
                                            </td>
                                            <td className="text-white pr-2 border-r-2 border-gray-600 cursor-pointer">
                                                Sales Page
                                            </td>
                                            <td className="text-white pr-2 border-r-2 border-gray-600 cursor-pointer">
                                                Edit
                                            </td>
                                            <td className="text-white pr-2 border-r-2 border-gray-600 cursor-pointer">
                                                Delete
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    )}
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
            {addCourse && (
                <div className={`${Styles.bgTransparent} fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center`}>
                    <div className={`${Styles.bgPrimary} p-4 md:w-1/2 rounded-md border-2 border-gray-600`}>
                        <p className="text-lg text-left font-bold text-white">Daftar Course</p>

                        <div className="mt-4">
                            <p className="font-bold">Add Course</p>
                            <div className="relative">
                                <input type="text" name="search_course" id="" placeholder="Cari course" className="md:w-96 p-2 runded-md bg-white text-black" onChange={(e) => setSearchCourse(e.target.value)} />
                                {searchCourse?.length > 2 && (
                                    <div className="absolute top-10 left-0 w-full p-4 bg-white">
                                        <ul>
                                            {courses?.length > 0 && courses?.map((el: any, i: any) => {
                                                const find = selectedCourses.length > 0 ? selectedCourses.find(item => item?.id == el.id) : null

                                                if (!find) return (
                                                    <li key={el.id} onClick={() => onSelectCourse(el)} className="flex gap-4 text-black border-b-2 border-gray-600 cursor-pointer">
                                                        <tr>{el?.name}</tr>
                                                        <tr>{((el?.desc).length > 30) ? (((el?.desc).substring(0, 30 - 3)) + '...') : el?.desc}</tr>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <table className={`${Styles.table} overflow-x-auto block mt-4`} >
                                <thead>
                                    <tr className={`${Styles.thead}`} >
                                        <th className="w-1/4">No</th>
                                        <th className="w-1/4">Nama</th>
                                        <th className="w-1/4">Deskripsi</th>
                                        <th className="w-1/4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedCourses?.map((el: any, i: any) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{el?.name}</td>
                                            <td>
                                                <p className="w-96">
                                                    {((el?.desc).length > 30) ? (((el?.desc).substring(0, 30 - 3)) + '...') : el?.desc}
                                                </p>
                                            </td>
                                            <td>
                                                <div className="cursor-pointer px-4 py-2 bg-red-600 font-bold">
                                                    Delete
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tbody>

                                </tbody>
                            </table>
                            <div className="mt-4 flex justify-end gap-4">
                                {loading ? (
                                    <div className="px-4 py-2 rounded-md font-bold bg-gray-600">
                                        Loading....
                                    </div>
                                ) : (
                                    <div
                                        onClick={submit}
                                        className={`${Styles.bgSecondary} cursor-pointer px-4 py-2 rounded-md font-bold`}
                                    >
                                        Save changes
                                    </div>
                                )}
                                <div className={`${Styles.bgPrimary} border-2 border-gray-600 cursor-pointer px-4 py-2 rounded-md font-bold`} onClick={() => setAddCourse(false)}>
                                    Cancel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </DashboardAdmin>
    )
}

export default Paket
