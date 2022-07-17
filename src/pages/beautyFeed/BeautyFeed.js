import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../../components/sections/_navbar/Navbar"
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import Footer from "../../components/sections/_footer/Footer";

export default function BeautyFeed() {
    const [article, setArticle] = useState([])
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true)
            const res = await axios(`https://cosmetic-b.herokuapp.com/api/v1/article`)
            setArticle(res.data.data)
            // setLoading(false)
            console.log(res.data.data)
        }

        fetchData()
    }, [])
    // if (loading) {
    //     return (
    //         <>
    //             <Navbar />
    //             <div className="mt-40 text-center">
    //                 <svg
    //                     role="status"
    //                     className="mr-2 inline h-8 w-8 animate-spin fill-purple-600 text-gray-200 dark:text-gray-600"
    //                     viewBox="0 0 100 101"
    //                     fill="none"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                     <path
    //                         d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
    //                         fill="currentColor"
    //                     />
    //                     <path
    //                         d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
    //                         fill="currentFill"
    //                     />
    //                 </svg>
    //             </div>
    //         </>
    //     );
    // }

    const firstData = article[0]
    return (
        <>
            <Navbar />
            <h1 className="text-center my-4">Beauty Feed</h1>
            <div className="flex columns-2 h-[90vh] ">
                <div className="h-[inherit] max-w-[65%]">
                    {firstData ?
                        <div className="cursor-pointer">
                            <img src={firstData.photo} className="max-w-[90%] rounded-3xl" />
                            <h3 className="my-2">{firstData.title}</h3>
                            <p className="mb-2">{firstData.content}</p>
                            <p>{firstData.date}</p>
                        </div> : ""}
                </div>
                <div className="max-w-[30%]">
                    <div className="nav__searchbar__wrapper">
                        <input className="nav__inputsearch" placeholder="cari artikel disini" />
                        <BsSearch className="input__icon" />
                    </div>
                    <h1>Artikel Populer</h1>
                    <div className="header__article overflow-hidden w-[100%]">
                        {article.map((data, i) => {
                            return (
                                <Link to={`/articledetail/${data.id}`}>
                                    <ol key={i} >
                                        <li className="flex my-4 cursor-pointer">
                                            <img src={data ? data.photo : ''} className="w-[30%] h-[20%]" />
                                            <div className="p-4 w-[60%] h-[20%]">
                                                <p className="text-xs">{data.date}</p>
                                                <p className="font-bold tracking-tight text-gray-900 truncate">
                                                    {data.title}
                                                </p>
                                            </div>
                                        </li>
                                    </ol>
                                </Link>
                            )
                        })}
                    </div >
                </div>
            </div>
            <hr className="my-6"></hr>
            <div className="text-center">
                <h1 className="text-center my-5 text-2xl">Artikel Terbaru</h1>
                <div className="flex justify-center mb-4">
                    <button className="mx-2 border-2 rounded-full px-2 py-1">Semua</button>
                    <button className="mx-2 border-2 rounded-full px-2 py-1">Skin Care</button>
                    <button className="mx-2 border-2 rounded-full px-2 py-1">Make Up</button>
                    <button className="mx-2 border-2 rounded-full px-2 py-1">Organik</button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {article.map((data, i) => {
                        return (
                            <Link to={`/articledetail/${data.id}`}>
                                <ul>
                                    <li key={i} className="  rounded-3xl shadow-xl hover:shadow-med-brown">
                                        <div className="  rounded-3xl h-[30%] cursor-pointer">
                                            <img className="rounded-t-3xl" src={data.photo} />
                                            <h3 className="px-2 pt-2 truncate cursor-pointer">{data.title}</h3>
                                            <p className="h-[30%] p-3 cursor-pointer">{data.content}</p>
                                        </div>
                                    </li>
                                </ul>
                            </Link>
                        )
                    })}
                </div>
                <Pagination />
            </div>
            <Footer />
        </>
    )
}