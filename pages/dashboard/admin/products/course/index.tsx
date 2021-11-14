import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import DashboardMember from "../.."
import ImageProduct from '../../../../../src/assets/images/course-product.png'
import filter from '../../../../../src/assets/svg/filter.svg'
import star from '../../../../../src/assets/svg/star.svg'
import Box from '../../../../../src/assets/svg/Box2.svg'
import ViewEye from '../../../../../src/assets/svg/ViewEye.svg'
import ILSearch from '../../../../../src/assets/svg/Search_alt.svg'
import ILSort from '../../../../../src/assets/svg/Sort.svg'
import Styles from './styles.module.scss'
import { NextPage } from "next"
import wrapper from "../../../../../store"
import { fetchCourses } from "../../../../../store/reducers/course"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import myLoader from "../../../../../src/helpers/loadImage"


const ProductCourse: NextPage = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const [search, setSearch] = useState('');
    const [sort, setSort] = useState(false);
    const [sortName, setSortName] = useState('');

    const courses = useSelector(({ courses }: any) => courses.Courses);

    useEffect(() => {
        dispatch(fetchCourses('', true))
    }, [])

    useEffect(() => {
        if (search.length > 3) dispatch(fetchCourses(search, false))
        if (search.length < 1) dispatch(fetchCourses('', true))
    }, [search])

    const sorting = (name: any) => {
        setSortName(name)
        dispatch(fetchCourses('', false, name))
        setSort(false)
    }

    const goTo = (routeName: any) => {
        router.push(routeName)
    }



    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className={`${Styles.divider} w-1 h-8`}></div>
                        <p className={`text-xl font-bold`}>COURSE</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="relative">
                            <div
                                className={`${Styles.input} flex gap-4 cursor-pointer py-2 px-4`}
                                onClick={() => setSort(!sort)}
                            >
                                <Image
                                    src={ILSort}
                                    width={20}
                                    height={20}
                                    alt="icon"
                                />
                                <p className={`${Styles.filter} font-bold`}>Sort by</p>
                            </div>
                            <div className={sort ? 'absolute top-10 left-0 w-full h-full rounded-md bg-yellow-400 font-bold text-black p-2' : 'hidden'}>
                                <ul>
                                    <li onClick={() => sorting('name')} className="cursor-pointer">Name</li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <input type="text" name="search" id="search" className="p-2 rounded-full w-48 bg-white border-2 border-gray-100 text-yellow-600" placeholder="Search" value={search} onChange={e => setSearch(e.currentTarget.value)} />
                        </div>
                        <div
                            className="px-4 py-2 rounded-md bg-yellow-500 cursor-pointer"
                            onClick={() => goTo('/dashboard/admin/products/course/add')}
                        >
                            Add Course
                        </div>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {courses && courses?.map((el: any) => (
                        <div
                            key={el.id}
                            className={`${Styles.card} p-4 rounded-lg`}
                        >
                            <div className="flex gap-4 items-center">
                                <div className="w-1/2">
                                    <Image
                                        loader={myLoader}
                                        src={el.image}
                                        width={500}
                                        height={500}
                                        alt="icon"
                                        className="object-cover"
                                    // layout="responsive"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <p className="font-bold">{el?.desc}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-xl font-bold">{el?.name}</p>
                                <div className="py-2 flex gap-4">
                                    <div
                                        className={`${Styles.badgePrimary} py-2 rounded-md w-16 cursor-pointer text-center text-xs`}
                                        onClick={() => goTo(`/dashboard/admin/products/course/bab/${el.id}`)}
                                    >
                                        Add</div>
                                    <div className={`${Styles.badgeSecondary} py-2 rounded-md w-16 cursor-pointer text-center text-xs`}>Delete</div>
                                    <div
                                        className={`${Styles.badgeThird} py-2 rounded-md w-16 cursor-pointer text-center text-xs`}
                                        onClick={() => goTo(`/dashboard/admin/products/course/edit/${el.id}`)}
                                    >Edit</div>
                                </div>
                                <div className="flex gap-4 justify-end items-center">
                                    <div className="flex gap-1">
                                        <Image
                                            src={Box}
                                            width={20}
                                            height={20}
                                            alt="icon"
                                        />
                                        <p>5</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <Image
                                            src={ViewEye}
                                            width={20}
                                            height={20}
                                            alt="icon"
                                        />
                                        <p>7x</p>
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

ProductCourse.getInitialProps = wrapper.getInitialPageProps(store => () => {
    store.dispatch(fetchCourses('', true))
})

export default ProductCourse
