import { useRouter } from 'next/router'
import Styles from './styles.module.scss'
import Header from 'next/head'
import React, { useEffect, useState } from "react"
import swal from 'sweetalert'
import axios from 'axios'

interface ILogin {
    name: string,
    email: string,
    password: string,
    alamat: string,
    password_confirmation: string
}

const Register = () => {
    const route = useRouter()

    const [form, setForm] = useState<ILogin>({ name: '', email: '', password: '', alamat: '', password_confirmation: '' })
    const [loading, setLoading] = useState(false)
    const [matchedPass, setMatchedPass] = useState(true)

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        const role = localStorage.getItem('role')
        if (access_token) {
            if (role == 'admin') {
                route.push('/dashboard/admin/home')
            }
            if (role == 'member') {
                route.push('/dashboard/member/home')
            }
        }
    }, [])

    useEffect(() => {
        if (form.password !== form.password_confirmation) {
            setMatchedPass(false)
        } else {
            setMatchedPass(true)
        }
    }, [form.password_confirmation])

    const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value

        setForm({ ...form, [name]: value })
    }

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axios.post(`${process.env.apiUrl}/auth/register`, form)

            if (res.data.meta.status === 'success') {
                setLoading(true)
                localStorage.setItem('access_token', `${res.data.data.token_type} ${res.data.data.access_token}`)
                localStorage.setItem('role', res.data.data.user.role)

                route.push('/dashboard/member/home')
            } else {
                swal('Oops!!! something wrong', 'Wrong email or password')
            }

        } catch (error: any) {
            swal(`Opps something wrong error = ${error.message}`)
        }
        setLoading(false)
    }

    return (
        <div className="p-4 flex items-center justify-center h-screen">
            <div className="p-4 shadow-lg rounded-md">
                <p className="text-xl font-bold">Register</p>
                <form onSubmit={onSubmit} className="mt-4">
                    <input type="text" name="name" id="name" placeholder="name" className="p-2 rounded-md border-2 border-gray-300 w-96" value={form.name} onChange={onChange} /><br />

                    <input type="text" name="email" id="email" placeholder="email" className="mt-2 p-2 rounded-md border-2 border-gray-300 w-96" value={form.email} onChange={onChange} /><br />

                    <input type="text" name="password" id="password" placeholder="password" className="p-2 rounded-md border-2 border-gray-300 w-96 mt-4" value={form.password} onChange={onChange} /><br />

                    {!matchedPass && (
                        <div className="mt-4 p-2 rounded-md bg-red-600 text-white">
                            Password tidak cocok
                        </div>
                    )}

                    <input type="text" name="password_confirmation" id="password_confirmation" placeholder="password confirmation" className="p-2 rounded-md border-2 border-gray-300 w-96 mt-4" value={form.password_confirmation} onChange={onChange} /><br />

                    <input name="alamat" id="alamat" placeholder="address" className="p-2 rounded-md border-2 border-gray-300 h-24 w-96 mt-4" value={form.alamat} onChange={onChange} /><br />

                    {loading ? (
                        <div className="p-2 text-center w-96 mt-4 rounded-md shadow-md bg-gray-300 text-red">
                            Loading...
                        </div>
                    ) : (
                        <input type="submit" value="Register" className="font-bold text-yellow-600 cursor-pointer p-2 bg-white rounded-md shadow-md w-96 mt-4" />
                    )}
                </form>
                <div className="mt-4">
                    <p className="font-bold text-sm">Have an account ? <span className="text-red-600 cursor-pointer" onClick={() => route.push('/auth/login')}>Login</span> </p>
                </div>
            </div>
        </div>
    )
}

export default Register
