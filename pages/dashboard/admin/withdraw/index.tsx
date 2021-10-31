import Image from 'next/image';
import DashboardAdmin from '../';
import Styles from './styles.module.scss';
import UserPic from '../../../../src/assets/images/user.jpg';
import Banner from '../../../../src/assets/images/banner.jpg';

const EditNews = () => {
    return (
        <DashboardAdmin>
            <div className="p-8">
                <div className="flex gap-4">
                    <div className={`${Styles.bgYellow} w-2`}></div>
                    <p className="text-xl font-bold">PENCAIRAN DANA</p>
                </div>

                <div className="flex justify-center mt-8">
                    <div className={`${Styles.bgSecond} py-4 md:py-8 px-8 md:px-24 rounded-lg`}>
                        <form action="" className="pb-24">
                            <label htmlFor="" className={`${Styles.colorYellow}`}>Total Pencairan</label><br />
                            <input type="text" name="" id="" className="bg-white rounded-md w-full p-2" />
                            <div className="mt-8">
                                <div className={`${Styles.badge} p-4 w-full rounded-md`}>
                                    <p>Info! Untuk pengisian rekening penerima, akan lebih baik jika anda mengisi lebih dari 1 rekening yang anda miliki untuk mempermudah kami melakukan pencairan dana</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <label htmlFor="" className={`${Styles.colorYellow}`}>Nama Bank</label><br />
                                <input type="text" name="" id="" className="bg-white rounded-md w-full p-2" />
                            </div>
                            <div className="mt-8">
                                <label htmlFor="" className={`${Styles.colorYellow}`}>No Rekening</label><br />
                                <input type="text" name="" id="" className="bg-white rounded-md w-full p-2" />
                            </div>
                            <div className="mt-8">
                                <label htmlFor="" className={`${Styles.colorYellow}`}>A.N No Rekening</label><br />
                                <input type="text" name="" id="" className="bg-white rounded-md w-full p-2" />
                            </div>

                            <div className="mt-8 flex justify-center">
                                <input type="submit" value="Kirim" className="bg-black px-8 rounded-md py-2 font-bold text-white mt-8 self-center" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardAdmin>
    )
}

export default EditNews;
