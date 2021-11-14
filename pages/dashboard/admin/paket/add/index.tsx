import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import swal from "sweetalert"
import DashboardAdmin from "../.."

const AddPaket = () => {
    const router = useRouter()

    const [form, setForm] = useState<any>({})
    const [image, setImage] = useState<any>({})
    const [loading, setLoading] = useState(false)

    const onChange = (e: any) => {
        const name = e.target.name
        const value = e.target.value

        setForm({ ...form, [name]: value })
    }

    const onChangeFile = (e: any) => {
        const file = e.target.files[0]
        setImage(file)
    }

    const onSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (!form['is_member']) {
                form['is_member'] = 1
            }

            const fd = new FormData()

            Object.keys(form).map(key => {
                fd.append(key, form[key])
            })

            fd.append('image', image)

            const res = await axios.post(`${process.env.apiUrl}/paket`, fd)
            console.log(res.data, "<< respon");

            if (res.data?.meta?.code == 200) {
                swal('Success add paket')
                router.push('/dashboard/admin/paket')
            }
        } catch (error: any) {
            swal('Something error ' + error.message)
        }
        setLoading(false)
    }

    return (
        <DashboardAdmin>
            <div className="p-8">
                <p className="text-white text-xl font-bold">TAMBAH PAKET</p>

                <div className="mt-8 p-4 bg-white rounded-md">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name" className="text-black font-bold">
                            Nama
                        </label><br />
                        <input type="text" name="name" id="name" className="px-4 py-2 rounded-md bg-white w-full border-2 border-gray-200 text-black" onChange={onChange} placeholder="Nama paket" /><br /><br />

                        <label htmlFor="is_member" className="text-black font-bold">
                            Free Member
                        </label><br />
                        <select name="is_member" onChange={onChange} id="is_member" className="px-4 py-2 rounded-md border-2 border-gray-200 w-full text-black">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select><br /><br />

                        <label htmlFor="price" className="text-black font-bold">
                            Harga
                        </label><br />
                        <input type="number" name="price" id="price" className="px-4 py-2 rounded-md bg-white w-full border-2 border-gray-200 text-black" onChange={onChange} placeholder="Harga" /><br /><br />

                        <label htmlFor="point_sponsor" className="text-black font-bold">
                            Point Sponsor
                        </label><br />
                        <input type="number" name="point_sponsor" id="point_sponsor" className="px-4 py-2 rounded-md bg-white w-full border-2 border-gray-200 text-black" onChange={onChange} placeholder="Point sponsor" /><br /><br />


                        <label htmlFor="point_pembeli" className="text-black font-bold">
                            Point Pembeli
                        </label><br />
                        <input type="number" name="point_pembeli" id="point_pembeli" className="px-4 py-2 rounded-md bg-white w-full border-2 border-gray-200 text-black" onChange={onChange} placeholder="Point pembeli" /><br /><br />

                        <label htmlFor="commission" className="text-black font-bold">
                            Komisi
                        </label><br />
                        <input type="number" name="commission" id="commission" className="px-4 py-2 rounded-md bg-white w-full border-2 border-gray-200 text-black" onChange={onChange} placeholder="Komisi" /><br /><br />

                        <label htmlFor="desc" className="text-black font-bold">
                            Deskripsi
                        </label><br />
                        <textarea name="desc" id="desc" onChange={onChange} placeholder="Deskripsi" className="px-4 h-64 py-2 rounded-md bg-white w-full border-2 border-gray-200 text-black" /><br /><br />

                        <label htmlFor="image" className="font-bold px-4 py-2 rounded-md bg-white w-full border-2 border-gray-200 text-black cursor-pointer">
                            {image?.name ? image.name : 'Gambar Produk'}
                        </label>
                        <input type="file" name="image" id="image" onChange={onChangeFile} className="hidden" />
                        <br /><br /><br />

                        {loading ? (
                            <div className="w-full px-4 py-2 rounded-md bg-yellow-100 text-black font-bold text-center">
                                Loading...
                            </div>
                        ) : (
                            <input type="submit" value="Submit" className="w-full px-4 py-2 rounded-md bg-yellow-400 text-white font-bold text-center cursor-pointer" />
                        )}
                    </form>
                </div>
            </div>
        </DashboardAdmin>
    )
}

export default AddPaket
