import DashboardAdmin from "../../../.."
import Styles from './styles.module.scss';
import swal from 'sweetalert'
import axios from 'axios'
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubCourses } from "../../../../../../../store/reducers/course";

const SubCourse = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { id } = router.query
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [addBabCourse, setAddBabCourse] = useState<any>({})
    const [babs, setBabs] = useState<any[]>([])

    const sub = useSelector(({ courses }: any) => courses.SubCourses);

    useEffect(() => {
        if (id) dispatch(fetchSubCourses(id))
    }, [id])

    const addBab = (e: any) => {
        e.preventDefault()
        const arr = babs.concat(addBabCourse)
        setBabs(arr)
        setAddBabCourse({ name: '', value: '', sequence: '' })
    }

    const submit = async () => {
        setLoading(true)
        try {
            let response: any

            const insert = await babs?.map(async (el: any) => {
                const data = {
                    babcourse_id: id,
                    name: el.name,
                    value: el.value,
                    sequence: el.sequence
                }

                const res = await axios.post(`${process.env.apiUrl}/sub-course`, data)
                response = res.data
            })

            await Promise.all(insert)

            if (response?.meta?.code == 200) {
                swal('Success add sub')
                setModal(false)
                setBabs([])
                setAddBabCourse({ id: id, name: '', value: '', sequence: '' })
                dispatch(fetchSubCourses(id))
            }
        } catch (error: any) {
            swal(`Oops!! something wrong ${error.message}`)
        }
        setLoading(false)
    }

    const deleteBab = async (babId: any) => {
        setLoading(true)
        const res = await axios.delete(`${process.env.apiUrl}/sub-course/${babId}`)
        if (res.data?.meta?.code === 200) {
            swal('Success delete bab')
            dispatch(fetchSubCourses(id))
        } else swal('Delete failed')

        setLoading(false)
    }

    const onChange = (e: any) => {
        const name = e.target.name
        const value = e.target.value

        setAddBabCourse({ ...addBabCourse, [name]: value })
    }

    return (
        <DashboardAdmin>
            <div className="p-4 md:p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className={`${Styles.bgPrimary} h-8 w-2`}></div>
                        <p className="text-xl font-bold">KELOLA BAB</p>
                    </div>

                    <div onClick={() => setModal(true)} className={`${Styles.bgSecondary} cursor-pointer px-4 py-2 rounded-md`}>
                        Add BAB
                    </div>
                </div>
                <table className={`${Styles.table} mt-4`} >
                    <thead>
                        <tr className={`${Styles.thead}`} >
                            <th>No</th>
                            <th>Sequence</th>
                            <th>Judul</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sub && sub?.map((el: any, i: any) => (
                            <tr key={el.id}>
                                <td>{i + 1}</td>
                                <td>{el?.sequence}</td>
                                <td>{el?.name}</td>
                                <td>
                                    <div className="flex gap-4 items-center">
                                        <div className="cursor-pointer rounded-md px-4 py-2 bg-yellow-600">
                                            Demo
                                        </div>
                                        <div className="cursor-pointer rounded-md px-4 py-2 bg-green-600">
                                            Edit
                                        </div>
                                        {loading ? (
                                            <div className="rounded-md px-4 py-2 bg-red-600">
                                                Loading
                                            </div>
                                        ) : (
                                            <div
                                                onClick={() => deleteBab(el.id)}
                                                className="cursor-pointer rounded-md px-4 py-2 bg-red-600">
                                                Delete
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {modal && (
                <div className={`${Styles.bgTransparent} fixed z-100 top-0 left-0 w-full h-full flex justify-center items-center`}>
                    <div className="p-4 rounded-md bg-white w-96">
                        <form onSubmit={addBab}>
                            <div className="flex gap-4">
                                <div className="">
                                    <label htmlFor="" className="text-black font-bold">Nama</label><br />
                                    <input type="text" name="name" id="name" className="text-black p-2 border-2 border-gray-300 w-full" required onChange={onChange} value={addBabCourse?.name} /> <br /><br />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="text-black font-bold">Sequence</label><br />
                                    <input type="number" name="sequence" id="sequence" className="text-black p-2 border-2 border-gray-300 w-full" required onChange={onChange} value={addBabCourse?.sequence} /> <br /><br />
                                </div>
                            </div>

                            <label htmlFor="" className="text-black font-bold">Value</label><br />
                            <textarea name="value" id="value" className="text-black p-2 border-2 h-34 border-gray-300 w-full" required onChange={onChange} value={addBabCourse?.value} /> <br /><br />


                            <input type="submit" value="Add" className="cursor-pointer px-4 py-2 bg-yellow-600 font-bold" />
                        </form>

                        <div className="p-4">
                            <ul>
                                {babs?.length > 0 && babs?.map((el: any, i: any) => (
                                    <li className="text-black" key={i}>{el?.name}</li>
                                ))}
                            </ul>

                            <div className="flex gap-4 justify-end mt-2">
                                <div
                                    onClick={() => {
                                        setModal(false)
                                        setAddBabCourse({})
                                    }}
                                    className="cursor-pointer px-4 py-2 bg-gray-600 rounded-md font-bold"
                                >Cancel</div>
                                {babs?.length > 0 && (
                                    <>
                                        {loading ? (
                                            <div className="px-4 py-2 bg-green-600 rounded-md font-bold">Loading</div>
                                        ) : (
                                            <div onClick={submit} className="cursor-pointer px-4 py-2 bg-green-600 rounded-md font-bold">Submit</div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </DashboardAdmin>
    )
}

export default SubCourse