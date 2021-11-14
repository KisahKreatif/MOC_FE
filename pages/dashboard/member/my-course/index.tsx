import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import DashboardMember from "../"
import ImageProduct from '../../../../src/assets/images/course-product.png'
import Course1 from '../../../../src/assets/images/course-1.png'
import Course2 from '../../../../src/assets/images/course-2.png'
import Course3 from '../../../../src/assets/images/course-3.png'
import filter from '../../../../src/assets/svg/filter.svg'
import star from '../../../../src/assets/svg/star.svg'
import Styles from './styles.module.scss'

const ProdukFisik = () => {
    const router = useRouter()

    const [data, setData] = useState([{ id: 1, image: Course1, title: "Master Secrets Facebook & Instagram Ads Course" }, { id: 2, image: Course2, title: "MOC Membership" }, { id: 3, image: Course3, title: "7 Days Private Mentoring" }])

    const goTo = (routeName: any) => {
        router.push(routeName)
    }

    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className={`${Styles.divider} w-1 h-8`}></div>
                        <p className={`text-xl font-bold`}>My Course</p>
                    </div>
                    <div className="">
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
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* {data.map((el: any) => (
                        <div
                            key={el.id}
                            className={`${Styles.card} p-4 rounded-lg cursor-pointer`}
                            onClick={() => goTo(`/dashboard/member/my-course/detail/${el.id}`)}
                        >
                            <Image
                                src={el.image}
                                width={100}
                                height={100}
                                alt="icon"
                                className="object-cover"
                                layout="responsive"
                            />
                            <div className="mt-4 flex justify-center">
                                <p className="text-xl font-bold text-center w-64">{el.title}</p>
                            </div>
                        </div>

                    ))} */}
                </div>
            </div>
        </DashboardMember>
    )
}

export default ProdukFisik
