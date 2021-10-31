import Image from 'next/image';
import DashboardAdmin from '../../';
import Styles from './styles.module.scss';
import UserPic from '../../../../../src/assets/images/user.jpg';
import Banner from '../../../../../src/assets/images/banner.jpg';

const EditNews = () => {
    return (
        <DashboardAdmin>
            <div className="p-8">
                <div className="flex gap-4">
                    <div className={`${Styles.bgYellow} w-2`}></div>
                    <p className="text-xl font-bold">EDIT KUPON</p>
                </div>

                <div className="flex justify-center">
                    <div className={`${Styles.bgSecond} py-4 md:py-8 px-8 md:px-24 rounded-lg`}>
                        <form action="" className="pb-24">
                            <label htmlFor="" className={`${Styles.colorYellow}`}>Kode Kupon</label><br />
                            <input type="text" name="" id="" className="bg-white rounded-md w-96 p-2" />
                            <div className="mt-8">
                                <label htmlFor="" className={`${Styles.colorYellow}`}>Batas Pengguna per User</label><br />
                                <input type="text" name="" id="" className="bg-white rounded-md w-96 p-2" />
                            </div>
                            <div className="mt-8">
                                <label htmlFor="" className={`${Styles.colorYellow}`}>Untuk Produk FIsik</label><br />
                                <input type="text" name="" id="" className="bg-white rounded-md w-96 p-2" />
                            </div>
                            <div className="mt-8">
                                <label htmlFor="" className={`${Styles.colorYellow}`}>Untuk E-Course</label><br />
                                <input type="text" name="" id="" className="bg-white rounded-md w-96 p-2" />
                            </div>
                            <div className="mt-8">
                                <label htmlFor="" className={`${Styles.colorYellow}`}>Nominal Potongan</label><br />
                                <input type="text" name="" id="" className="bg-white rounded-md w-96 p-2" />
                            </div>
                            <div className="mt-8">
                                <label htmlFor="" className={`${Styles.colorYellow}`}>Batas Penggunaan</label><br />
                                <input type="date" name="" id="" className="bg-white rounded-md w-96 p-2" />
                            </div>

                            <div className="mt-8 flex justify-center">
                                <input type="submit" value="Save" className="bg-black px-8 rounded-md py-2 font-bold text-white mt-8 self-center" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardAdmin>
    )
}

export default EditNews;
