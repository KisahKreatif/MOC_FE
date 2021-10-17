import Image from 'next/image'
import DashboardMember from "../.."
import Styles from './styles.module.scss'

const Link = () => {
    return (
        <DashboardMember>
            <div className="py-8 px-16">
                <div className="flex gap-4">
                    <div className="w-2 bg-yellow-500"></div>
                    <p className="text-2xl font-bold">LINK AFILIASI</p>
                </div>
                <div className={`${Styles.content} p-8 rounded-lg mt-8`}>
                    <p className="text-xl font-bold">Link Produk</p>
                    <div className="mt-4">
                        <form action="" className="flex gap-4">
                            <select name="produk" id="produk" className="w-full bg-gray-600 h-8 rounded-lg px-8">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <input type="submit" value="Generate" className="px-4 bg-yellow-500 rounded-lg font-bold" />
                        </form>
                    </div>
                    <div className="mt-12">
                        <form action="" className="">
                            <label htmlFor="url" className="font-bold">Halaman Penjualan / Sales Page</label>
                            <div className="flex gap-4 mt-4">
                                <input type="text" name="url" id="url" value="mocmembership.com/order-sponsor/2/8P" className={`${Styles.input} border-2 border-gray-600 px-4 py-2 md:w-96 rounded-lg bg-transparent`} />
                                <input type="submit" value="Copy" className={`${Styles.btnGreen} px-4 rounded-lg font-bold`} />
                            </div>
                        </form>
                    </div>
                    <div className="mt-12">
                        <form action="" className="">
                            <label htmlFor="url" className="font-bold">Halaman Checkout</label>
                            <div className="flex gap-4 mt-4">
                                <input type="text" name="url" id="url" value="mocmembership.com/order-sponsor/2/8P" className={`${Styles.input} border-2 border-gray-600 px-4 py-2 md:w-96 rounded-lg bg-transparent`} />
                                <input type="submit" value="Copy" className={`${Styles.btnGreen} px-4 rounded-lg font-bold`} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardMember>
    )
}

export default Link
