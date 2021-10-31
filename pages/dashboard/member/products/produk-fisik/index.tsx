import { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import DashboardMember from "../.."
import ImageProduct1 from '../../../../../src/assets/images/product-1.png'
import ImageProduct2 from '../../../../../src/assets/images/product-2.png'
import ImageProduct3 from '../../../../../src/assets/images/product-3.png'
import filter from '../../../../../src/assets/svg/filter.svg'
import star from '../../../../../src/assets/svg/star.svg'
import myLoader from "../../../../../src/helpers/loadImage"
import wrapper from "../../../../../store"
import { fetchProducts } from "../../../../../store/reducers/product"
import Styles from './styles.module.scss'

const ProdukFisik: NextPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const [category, setCategory] = useState([{ id: 1, name: 'Skincare', slug: 'skincare' }, { id: 2, name: 'Supplement', slug: 'supplement' }, { id: 3, name: 'F&B', slug: 'f and b' }, { id: 4, name: 'Fashion', slug: 'fashion' }])
    const [selectedCatergory, setSelectedCategory] = useState<any>({ id: 1, name: 'Skincare', slug: 'skincare' })
    const [search, setSearch] = useState('')

    const products = useSelector(({ products }: any) => products.Products)

    useEffect(() => {
        dispatch(fetchProducts('', true, selectedCatergory.slug))
    }, [])


    useEffect(() => {
        if (search.length > 3) dispatch(fetchProducts(search, false, ''))
        if (search.length < 1) dispatch(fetchProducts('', true, ''))

    }, [search])

    const filterByCategory = (item: any) => {
        setSelectedCategory(item)
        dispatch(fetchProducts('', false, item.slug))
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
                        <p className={`text-xl font-bold`}>All Product</p>
                        <p className="text-xl">(Produk Fisik)</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="">
                            <input type="text" name="search" id="search" value={search} onChange={e => setSearch(e.currentTarget.value)} placeholder="Cari Produk" className={`${Styles.input} text-white drop-shadow-xl px-4 py-2 rounded-md`} />
                        </div>
                        <div className={`${Styles.input} drop-shadow-xl	 rounded-md flex gap-4 cursor-pointer py-2 px-4`}>
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

                <div className="flex gap-4 mt-4">
                    {category.map(el => (
                        <div
                            className={`${selectedCatergory?.id == el.id ? Styles.ActiveBadge : 'border-2 border-gray-400'} px-6 cursor-pointer py-2 rounded-md`}
                            onClick={() => filterByCategory(el)}
                        >
                            {el.name}
                        </div>
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products && products?.map((el: any) => (
                        <div
                            key={el.id}
                            className={`${Styles.card} rounded-lg cursor-pointer`}
                            onClick={() => goTo(`/dashboard/member/products/produk-fisik/detail/${el.id}`)}
                        >
                            <Image
                                loader={myLoader}
                                src={el.image}
                                width={100}
                                height={100}
                                alt="icon"
                                className="object-cover rounded-t-lg"
                                layout="responsive"
                            />
                            <div className="p-4">
                                <p className="text-xl font-bold">{el?.name}</p>
                                <div className="py-2">
                                    <div className={`${Styles.badge} py-2 rounded-md w-28 text-center text-xs`}>Harga Varian</div>
                                </div>
                                <div className="py-1">
                                    <p className={`text-md`}>Produk Fisik</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        {el?.variants && el?.variants?.map((item: any) => (
                                            <div
                                                key={item.id}
                                                className="flex gap-4 items-center"
                                            >
                                                <p className="text-lg">{item?.name} :</p>
                                                <p className={`${Styles.price} text-lg font-bold`}>Rp {item?.price}</p>
                                            </div>

                                        ))}
                                    </div>
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

ProdukFisik.getInitialProps = wrapper.getInitialPageProps(store => () => {
    store.dispatch(fetchProducts('', true, 'skincare'))
})

export default ProdukFisik
