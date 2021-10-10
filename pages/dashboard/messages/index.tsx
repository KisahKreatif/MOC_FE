import { useState } from "react"
import Image from 'next/image'
import Header from "../../../src/components/Head"
import Navbar from "../../../src/components/Navbar"
import Styles from './styles.module.scss'
import ILSending from '../../../src/assets/svg/Sending.svg'

const Messages = () => {
    const [sideBar, setSideBar] = useState(false)
    const [selected, setSelected] = useState(null)


    return (
        <div className={Styles.page}>
            <Header page="Messages" />
            <Navbar setSideBar={setSideBar} sideBar={sideBar} routeName="/dashboard/member/home" />
            <div className={`${Styles.profile} border-b border-gray-600`}>
                <div className="flex px-8 py-4 gap-2 items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                    <div className="">
                        <p className={`${Styles.profileName} font-bold`}>Danuar Riyaldi</p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className={`p-4 overflow-y-auto h-screen sticky top-0 border-r border-gray-600 ${Styles.sidebar}`}>

                    <div className="p-4">
                        <input type="text" name="search" placeholder="Cari atau mulai chat baru p-4 rounded-lg"
                            className={`${Styles.searchForm} px-4 py-2 rounded-md`}
                        />
                    </div>

                    <div className="p-4">
                        <p className={`${Styles.directMessage} text-sm`} >Direct Messages</p>
                    </div>

                    <ul className="p-4" >
                        <li className={`${Styles.sideNav} py-2 mt-2 px-2 rounded-lg cursor-pointer flex gap-4 items-center`}>
                            <div className="w-8 h-8 rounded-full bg-gray-600 flex justify-center items-center">
                                <div className="text-center">A</div>
                            </div>
                            <p>Adam Jordan</p>
                        </li>
                    </ul>
                </div>
                <div className="flex-grow w-3/4">
                    <div className={`${Styles.content} p-4`}>
                        <div>
                            <div className="flex gap-4 items-center">
                                <div className="h-px w-full bg-gray-600"></div>
                                <div className="" >
                                    <p className="text-sm w-40 text-center">FEBRUARI 20, 2021</p>
                                </div>
                                <div className="h-px w-full bg-gray-600"></div>
                            </div>

                            <div className="card-1 mt-4 p-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gray-600 flex justify-center items-center">
                                        <div className="text-center">A</div>
                                    </div>
                                    <p className="font-bold" >Adam Jordan</p>
                                    <p className={`${Styles.chatDate} text-xs`}>Today at 1:2am</p>
                                </div>
                                <div className="chatContent ml-8">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex purus, porta
                                        sit amet placerat in, ultrices eu libero. In luctus neque nunc, ultricies blandit diam
                                        vehicula a. Aliquam eget ipsum pellentesque, imperdiet massa eu, convallis turpis.</p>
                                </div>
                            </div>

                            <div className={`${Styles.card2} mt-4 p-4 rounded-lg`}>
                                <div className="flex items-center justify-end gap-4">
                                    <p className={`${Styles.chatDate} text-xs`}>Today at 1:2am</p>
                                    <p className={`${Styles.card2Title} font-bold`}>Adam Jordan</p>
                                    <div className="w-8 h-8 rounded-full bg-gray-600 flex justify-center items-center">
                                        <div className="text-center">A</div>
                                    </div>
                                </div>
                                <div className="chatContent mr-8">
                                    <p className="text-right" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex purus, porta
                                        sit amet placerat in, ultrices eu libero. In luctus neque nunc, ultricies blandit diam
                                        vehicula a. Aliquam eget ipsum pellentesque, imperdiet massa eu, convallis turpis.</p>
                                </div>
                            </div>
                            <div className="card-1 mt-4 p-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gray-600 flex justify-center items-center">
                                        <div className="text-center">A</div>
                                    </div>
                                    <p className="font-bold" >Adam Jordan</p>
                                    <p className={`${Styles.chatDate} text-xs`}>Today at 1:2am</p>
                                </div>
                                <div className="chatContent ml-8">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex purus, porta
                                        sit amet placerat in, ultrices eu libero. In luctus neque nunc, ultricies blandit diam
                                        vehicula a. Aliquam eget ipsum pellentesque, imperdiet massa eu, convallis turpis.</p>
                                </div>
                            </div>

                            <div className={`${Styles.card2} mt-4 p-4 rounded-lg`}>
                                <div className="flex items-center justify-end gap-4">
                                    <p className={`${Styles.chatDate} text-xs`}>Today at 1:2am</p>
                                    <p className={`${Styles.card2Title} font-bold`}>Adam Jordan</p>
                                    <div className="w-8 h-8 rounded-full bg-gray-600 flex justify-center items-center">
                                        <div className="text-center">A</div>
                                    </div>
                                </div>
                                <div className="chatContent mr-8">
                                    <p className="text-right" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex purus, porta
                                        sit amet placerat in, ultrices eu libero. In luctus neque nunc, ultricies blandit diam
                                        vehicula a. Aliquam eget ipsum pellentesque, imperdiet massa eu, convallis turpis.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="p-4 border-t border-gray-600 flex items-center gap-4 w-full">
                        <input type="text" style={{ backgroundColor: "#1f2028", color: "#ffff" }} className="px-4 py-2 w-full" id="message" name="message" placeholder="Messages" />
                        <div className="cursor-pointer">
                            <Image
                                src={ILSending}
                                width={30}
                                height={30}
                                alt="icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages
