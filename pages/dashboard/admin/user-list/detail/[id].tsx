import Image from 'next/image';
import DashboardAdmin from '../../';
import Styles from './styles.module.scss';
import UserPic from '../../../../../src/assets/images/user.jpg';

const UserDetail = () => {
    return (
        <DashboardAdmin>
            <div className="p-8">
                <div className="flex gap-4">
                    <div className={`${Styles.bgYellow} w-2`}></div>
                    <p className="text-xl font-bold">KELOLA AKUN</p>
                </div>

                <div className="mt-8 flex justify-center">
                    <div className={`${Styles.bgYellowSecond} px-8 md:px-24 py-8 rounded-lg`}>
                        <div className="flex items-center gap-4">
                            <Image
                                src={UserPic}
                                width={120}
                                height={120}
                                className="rounded-full object-cover"
                            />
                            <div className="">
                                <p className="text-2xl font-bold">Admin</p>
                                <div className={`${Styles.badge} text-center w-24 font-bold rounded-md mt-2`}>
                                    Admin
                                </div>
                                <div className="flex gap-4 text-black mt-2">
                                    <p>Batas akun : Lifetime</p>
                                    <p className="font-bold">Sponsor by : Admin</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-black">
                            <form action="">
                                <div className="">
                                    <label className="font-bold">Nama lengkap</label>
                                    <input type="text" name="name" id="name" className={`${Styles.bgWhite} py-2 px-4 rounded-md w-full`} />
                                </div>

                                <div className="mt-8">
                                    <label className="font-bold">Alamat</label>
                                    <textarea name="address" id="address" className={`${Styles.bgWhite} py-2 px-4 rounded-md w-full h-24`} />
                                </div>

                                <div className="mt-8">
                                    <label className="font-bold">Email</label>
                                    <input type="text" name="name" id="name" className={`${Styles.bgWhite} py-2 px-4 rounded-md w-full`} />
                                </div>

                                <div className="mt-8">
                                    <label className="font-bold">Tanggal lahir</label>
                                    <input type="text" name="name" id="name" className={`${Styles.bgWhite} py-2 px-4 rounded-md w-full`} />
                                </div>
                                <div className="mt-8">
                                    <label className="font-bold">Nomor Handphone</label>
                                    <input type="text" name="name" id="name" className={`${Styles.bgWhite} py-2 px-4 rounded-md w-full`} />
                                </div>
                                <div className="mt-8">
                                    <label className="font-bold">Nomor Rekening</label>
                                    <input type="text" name="name" id="name" className={`${Styles.bgWhite} py-2 px-4 rounded-md w-full`} />
                                </div>
                                <div className="mt-8">
                                    <label className="font-bold">Atas Nama Rekening</label>
                                    <input type="text" name="name" id="name" className={`${Styles.bgWhite} py-2 px-4 rounded-md w-full`} />
                                </div>
                                <div className="mt-8 bg-black px-4 py-2 text-white w-44 text-center font-bold rounded-md">
                                    Ganti Password
                                </div>
                                <div className="ml-8 mt-2 md:w-1/2">
                                    <label className="font-bold">Password Baru</label>
                                    <input type="text" name="name" id="name" className={`${Styles.bgWhite} py-2 px-4 rounded-md w-full`} />
                                </div>
                                <div className="ml-8 mt-8 md:w-1/2">
                                    <label className="font-bold">Ulangi Password Baru</label>
                                    <input type="text" name="name" id="name" className={`${Styles.bgWhite} py-2 px-4 rounded-md w-full`} />
                                </div>
                                <div className="mt-8">
                                    <label className="font-bold">Ganti Foto</label>
                                    <input type="file" name="name" id="name" className={`${Styles.bgWhite} py-2 px-4 rounded-md w-full`} />
                                </div>

                                <div className="mt-8 flex justify-center">
                                    <input type="submit" value="Save" className="bg-black px-8 py-2 font-bold text-white rounded-md" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardAdmin>
    )
}

export default UserDetail;
