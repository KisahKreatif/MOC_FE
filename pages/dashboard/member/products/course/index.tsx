import Image from "next/image"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import DashboardMember from "../.."
import ImageProduct from '../../../../../src/assets/images/course-product.png'
import filter from '../../../../../src/assets/svg/filter.svg'
import star from '../../../../../src/assets/svg/star.svg'
import Styles from './styles.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { NextPage } from "next"
import { fetchCourses } from "../../../../../store/reducers/course"
import wrapper from "../../../../../store"
import myLoader from "../../../../../src/helpers/loadImage"

const Course: NextPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    const courses = useSelector(({ courses }: any) => courses.Courses)
    const [search, setSearch] = useState('')
    const [filterOpc, setFilter] = useState(false)

    useEffect(() => {
        dispatch(fetchCourses('', true))
        console.log(courses, "<< courses");

    }, [])

    useEffect(() => {
        dispatch(fetchCourses(search, false))
    }, [search])

    const goTo = (routeName: any) => {
        router.push(routeName)
    }

    const sort = (sort: string) => {
        dispatch(fetchCourses('', true, sort))
        setFilter(false)
    }

    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className={`${Styles.divider} w-1 h-8`}></div>
                        <p className={`text-xl font-bold`}>All Product</p>
                        <p className="text-xl">(Course)</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="">
                            <input type="text" name="search" id="search" placeholder="search" className="w-full h-8 text-black px-2 rounded-md bg-white" value={search} onChange={e => setSearch(e.currentTarget.value)} />
                        </div>
                        <div className="relative">
                            <div
                                className={`${Styles.bgPrimary} shadow-lg rounded-md flex gap-4 cursor-pointer py-2 px-4`}
                                onClick={() => setFilter(!filterOpc)}
                            >
                                <Image
                                    src={filter}
                                    width={20}
                                    height={20}
                                    alt="icon"
                                />
                                <p className={Styles.filter}>Filter</p>
                            </div>
                            {filterOpc && (
                                <div className="absolute right-0 p-4 rounded-md bg-white w-40">
                                    <ul>
                                        <li onClick={() => sort('latest')} className="cursor-pointer text-black">Terbaru</li>
                                        <li onClick={() => sort('highest')} className="cursor-pointer text-black mt-2">Harga Tertinggi</li>
                                        <li onClick={() => sort('lowest')} className="cursor-pointer text-black mt-2">Harga Terendah</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {courses && courses?.map((el: any) => (
                        <div
                            key={el.id}
                            className={`${Styles.card} p-4 rounded-lg cursor-pointer`}
                            onClick={() => goTo(`/dashboard/member/products/course/detail/${el.id}`)}
                        >
                            {el?.image && (
                                <Image
                                    loader={myLoader}
                                    src={el?.image}
                                    width={100}
                                    height={100}
                                    alt="icon"
                                    className="object-cover"
                                    layout="responsive"
                                />
                            )}
                            <div className="mt-4">
                                <p className="text-xl font-bold">{el?.name}</p>
                                <div className="py-2">
                                    {el?.paket[0]?.is_member == 1 && (
                                        <div className={`${Styles.badge} py-2 rounded-md w-28 text-center text-xs`}>Free Member</div>
                                    )}
                                </div>
                                <div className="py-1">
                                    <p className={`text-md`}>E-course</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className={`${Styles.price} text-lg font-bold`}>Rp {el?.paket?.length > 0 ? el?.paket[0]?.price : '0'}</p>
                                    <div className="flex gap-1">
                                        <Image
                                            src={star}
                                            width={20}
                                            height={20}
                                            alt="icon"
                                        />
                                        <p>5.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </DashboardMember>
    )
}

Course.getInitialProps = wrapper.getInitialPageProps(store => () => {
    store.dispatch(fetchCourses('', true))
})

export default Course
