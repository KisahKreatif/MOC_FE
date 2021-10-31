import { useRouter } from 'next/router'
import Styles from './styles.module.scss'
import Header from 'next/head'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import axios from 'axios'

interface Form {
    email: string,
    password: string
}

const Login = () => {
    const route = useRouter()

    const [form, setForm] = useState<Form>({ email: '', password: '' })
    const [loading, setLoading] = useState(false)

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

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axios.post(`${process.env.apiUrl}/auth/login`, form)

            if (res.data.meta.status === 'success') {
                setLoading(true)
                localStorage.setItem('access_token', `${res.data.data.token_type} ${res.data.data.access_token}`)
                localStorage.setItem('role', res.data.data.user.role)

                if (res.data.data.user.role === 'admin') {
                    route.push('/dashboard/admin/home')
                } else route.push('/dashboard/member/home')
            } else {
                swal('Oops!!! something wrong', 'Wrong email or password')
            }
        } catch (error: any) {
            swal(`Opps!! something wrong error = ${error.message}`)
        }
        setLoading(false)
    }

    const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value

        setForm({ ...form, [name]: value })
    }

    return (
        <div className="p-4 flex items-center justify-center h-screen">
            <div className="p-4 shadow-lg rounded-md">
                <p className="text-xl font-bold">Login</p>
                <form onSubmit={onSubmit} className="mt-4">
                    <input type="text" name="email" id="email" placeholder="email" className="p-2 rounded-md border-2 border-gray-300 w-96" value={form.email} onChange={onChange} /><br />
                    <input type="password" name="password" id="password" placeholder="password" className="p-2 rounded-md border-2 border-gray-300 w-96 mt-4" value={form.password} onChange={onChange} /><br />

                    {loading ? (
                        <div className="mt-4 text-center p-2 rounded-md bg-gray-300 w-96">
                            Loading...
                        </div>
                    ) : (
                        <input type="submit" value="Login" className="font-bold text-yellow-600 cursor-pointer p-2 bg-white rounded-md shadow-md w-96 mt-4" />
                    )}
                </form>
                <div className="mt-4">
                    <p className="font-bold text-sm">Dont have an account yet ? <span className="text-red-600 cursor-pointer" onClick={() => route.push('/auth/register')}>Register</span> </p>
                </div>
            </div>
        </div>
    )
}

export default Login
