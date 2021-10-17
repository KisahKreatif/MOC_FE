import Image from 'next/image'
import banner from '../../../../src/assets/images/banner.jpg'
import banner2 from '../../../../src/assets/images/banner-2.jpg'
import Styles from './styles.module.scss'
import DashboardMember from '..'

const Home = () => {
    const news = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <DashboardMember>
            <div className="py-8 px-24">
                <div className="flex gap-4">
                    <div className={`${Styles.TitleDivider} w-2`}></div>
                    <p className="text-xl font-bold">DASHBOARD</p>
                </div>

                <div className="mt-8 h-px bg-gray-200"></div>

                <div className="p-4 rounded-md bg-gray-100">
                    <div className={`${Styles.saldo} px-4 py-12 rounded-xl`}>
                        <p className="text-xl font-bold">SALDO</p>
                        <p className="text-4xl font-bold">50.000.000.000 </p>
                    </div>
                </div>
            </div>
        </DashboardMember>
    )
}

export default Home
