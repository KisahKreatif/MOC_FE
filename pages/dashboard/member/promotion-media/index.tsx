import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import DashboardMember from "../"
import ImageProduct from '../../../../src/assets/images/course-product.png'
import Files from '../../../../src/assets/images/files.png'
import filter from '../../../../src/assets/svg/filter.svg'
import star from '../../../../src/assets/svg/star.svg'
import Styles from './styles.module.scss'

const ProdukFisik = () => {
    const router = useRouter()

    const [data, setData] = useState([{ id: 1, image: Files, title: "MEDIA PROMOSI GENTLETALITY", name: "Moc Membership", date: "24-May-2021" }, { id: 2, image: Files, title: "MOC Membership", name: "Moc Membership", date: "24-May-2021" }, { id: 3, image: Files, title: "7 Days Private Mentoring", name: "Moc Membership", date: "24-May-2021" }])

    const goTo = (routeName: any) => {
        router.push(routeName)
    }

    return (
        <DashboardMember>
            <div className="p-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className={`${Styles.divider} w-1 h-8`}></div>
                        <p className={`text-xl font-bold`}>All Files</p>
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
                    {data.map((el: any) => (
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
                                // className="object-cover"
                                layout="responsive"
                            />
                            <div className="mt-4 flex flex-col">
                                <p className="text-xl font-bold w-64">{el.title}</p>
                                <div className="">
                                    <p className="w-64">Nama: <span className={`${Styles.itemName} font-bold`}>{el.name}</span></p>
                                    <p className="w-64 text-sm">dibuat: {el.date}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </DashboardMember>
    )
}

export default ProdukFisik
