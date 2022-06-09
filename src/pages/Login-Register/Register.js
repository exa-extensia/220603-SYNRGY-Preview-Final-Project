import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    let navigate = useNavigate()

    const postRegister = (e) => {
        e.preventDefault();
        axios.post(`https://cosmetic-b.herokuapp.com/api/v1/auth/register`, {
            avatar: '',
            email,
            password,
            role: 'ROLE_CUSTOMER',
            user: {
                name,
                phone,
                skinType: ''
            }
        },
            {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((res) => {
                const hasil = res.data
                console.log(hasil)
                console.log('berhasil register')
                // navigate('/productdetail')
                // const storage = window.localStorage
                // storage.setItem('token', res.data.data.token)
            })
            .catch((error) => {
                console.log(error)
                console.log('gagal register')
            })
    }
    return (
        <>
            <form onSubmit={postRegister}>
                <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Register</h1>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Nama"
                                onChange={(e) => setName(e.target.value)} />

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)} />
                            <input
                                type="phone"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="phone"
                                placeholder="No Telepon"
                                onChange={(e) => setPhone(e.target.value)} />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} />


                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green text-white bg-brown hover:bg-green-dark focus:outline-none my-1"
                            >Buat Akun</button>

                            <div className="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Terms of Service
                                </a> and
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>

                        <div className="text-grey-dark mt-6">
                            Sudah memiliki akun?
                            <a className="no-underline border-b border-blue text-brown" href="/login">
                                Log in
                            </a>.
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}