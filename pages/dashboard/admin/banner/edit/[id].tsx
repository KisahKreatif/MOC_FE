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
                    <p className="text-xl font-bold">EDIT BANNER</p>
                </div>

                <div className="flex">
                    <div className={`w-full py-8`}>
                        <Image
                            src={Banner}
                            width={100}
                            height={50}
                            layout="responsive"
                            className="object-cover rounded-md"
                        />
                        <div className="text-black mt-8">
                            <form action="">
                                <div className="">
                                    <label htmlFor="" className="text-white font-bold">Link</label> <br />
                                    <input type="text" name="name" id="name" className={`${Styles.bgWhite} ${Styles.colorYellow} py-2 px-4 rounded-md w-full`} value="GROUP TELEGRAM MASTER ONLINE COMMUNITY" />
                                </div>

                                <div className="mt-8">
                                    <label htmlFor="" className="text-white font-bold">Upload banner</label> <br />
                                    <input type="file" name="name" id="name" className={`${Styles.bgWhite} ${Styles.colorYellow} py-2 px-4 rounded-md md:w-1/2`} />
                                </div>

                                <input type="submit" value="Save" className="mt-8 bg-white px-8 py-2 font-bold text-black rounded-md" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardAdmin>
    )
}

export default EditNews;
