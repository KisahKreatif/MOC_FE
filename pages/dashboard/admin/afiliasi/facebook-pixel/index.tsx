import Image from 'next/image'
import DashboardMember from "../.."
import Styles from './styles.module.scss'
import filter from '../../../../../src/assets/svg/filter.svg'
import WhatsApp from '../../../../../src/assets/images/chat-with-us.png'

const FacebookPixel = () => {
    return (
        <DashboardMember>
            <div className="py-8 px-16">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="w-2 bg-yellow-500"></div>
                        <p className="text-2xl font-bold">FACEBOOK PIXEL</p>
                    </div>
                </div>
                <div className={`mt-8`}>
                    <table className={`${Styles.table} w-full`} >
                        <tr className={`${Styles.thead}`} >
                            <th>No</th>
                            <th>Nama Produk</th>
                            <th>Action</th>
                        </tr>
                        <tr className={`${Styles.tbody} cursor-pointer`} >
                            <td>1.</td>
                            <td className="flex gap-4 items-center" >
                                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                <p>Danuar Riyaldi</p>
                            </td>
                            <td>
                                <div className={`${Styles.badgePrimary} rounded-md py-2 w-24`}>
                                    <p className="text-xs text-center">Edit</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </DashboardMember>
    )
}

export default FacebookPixel
