import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()

    const postLogin = (e) => {
        e.preventDefault()
        console.log('===')
        axios.post(`https://cosmetic-b.herokuapp.com/api/v1/auth/login`, {
            email,
            password
        },
            {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((res) => {
                const hasil = res.data
                console.log(hasil)
                // navigate('/productdetail')
                console.log('berhasil login')
            })
            .catch((error) => {
                console.log(error)
                console.log('gagal login')
            })
    }
    return (
        <>
            <form onSubmit={postLogin}>
                <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Login</h1>

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)} />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} />

                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green text-white bg-brown hover:bg-green-dark focus:outline-none my-1"
                            >Log in</button>
                        </div>

                        <div className="text-grey-dark mt-6">
                            Tidak punya akun?
                            <a className="no-underline border-b border-blue text-brown" href="/register">
                                Buat akun
                            </a>.
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}