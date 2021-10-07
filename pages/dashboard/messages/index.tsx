import Header from "../../../src/components/Head"
import Navbar from "../../../src/components/Navbar"
import Styles from './styles.module.scss'

const Messages = () => {
    return (
        <div className="">
            <Header page="Messages" />
            <Navbar />
            <div className="flex">
                <div className={`p-4 overflow-y-auto h-screen sticky top-16 ${Styles.sidebar}`}>
                    <div className="flex px-4 gap-2 items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                        <div className="">
                            <p className={`${Styles.profileName} font-bold`}>Danuar Riyaldi</p>
                        </div>
                    </div>

                    <div className="p-4">
                        <input type="text" name="search" placeholder="Cari atau mulai chat baru p-4 rounded-lg" />
                    </div>

                    <ul className="" >
                        <li className={`${Styles.sideNav} py-2 mt-4 rounded-lg cursor-pointer flex gap-4 justify-center items-center`}>
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center">
                                <div className="text-center">A</div>
                            </div>
                            <p>Adam Jordan</p>
                        </li>
                    </ul>
                </div>
                <div className="flex-grow"></div>
            </div>
        </div>
    )
}

export default Messages
