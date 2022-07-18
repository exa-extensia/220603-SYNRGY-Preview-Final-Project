import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../../components/sections/_navbar/Navbar"
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import Footer from "../../components/sections/_footer/Footer";
import SubBeautyFeed from "./SubBeautyFeed";
import PaginationArticle from "./PaginationArticle";



export default function BeautyFeed() {
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = article.slice(indexOfFirstItem, indexOfLastItem);



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const res = await axios(`https://cosmetic-b.herokuapp.com/api/v1/article`)
            setArticle(res.data.data)
            setLoading(false)
            console.log(res.data.data)
        }

        fetchData()
    }, [])

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="mt-40 text-center">
                    <svg
                        role="status"
                        className="mr-2 inline h-8 w-8 animate-spin fill-purple-600 text-gray-200 dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                </div>
            </>
        );
    }

    const firstData = article[0]

    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <>
            <Navbar />
            <h1 className="text-center my-4 text-xl">Beauty Feed</h1>
            <div className="mx-auto  lg:flex">
                <div className="h-[inherit] max-w-[85%] mx-auto lg:mt-6">
                    {firstData ?
                        <div className="cursor-pointer lg:px-4">
                            <img src={firstData.photo} className="max-w-[90%] rounded-3xl mx-auto" />
                            <h3 className="my-2 ">{firstData.title}</h3>
                            <p className="mb-2 ">{firstData.content}</p>
                            <p>{firstData.date}</p>
                        </div> : ""}
                </div>
                <div className="mt-3 mx-auto sm:flex sm:flex-row-reverse  w-[90%] h-80 lg:block lg:w-[40%]">
                    <div className="flex gap-1 ml-2 mt-4   sm:mx-auto sm:w-[40%] lg:w-[70%] lg:mb-3">
                        <input className="w-54 rounded-2xl bg-soft-gray pl-2 text-sm text-black sm:max-h-[30px] border-2 border-slate-300 " placeholder="cari artikel..." />
                        <BsSearch className="input__icon mt-1" />
                    </div>
                    <div className=" header__article overflow-hidden w-[95%] mx-auto h-72 sm:w-[50%] lg:w-[70%] xl:h-96">
                        <>
                            <div className="nav__searchbar__wrapper gap-3 ">
                                <h1 className="p-2">Artikel Populer</h1>
                            </div>
                            {article.map((data) => {
                                return (
                                    <Link to={`/articledetail/${data.id}`}>
                                        <ol key={data.id} >
                                            <li className="flex cursor-pointer py-[2px] xl:py-2">
                                                <img src={data ? data.photo : ''} className="w-[30%] h-[20%] rounded-lg ml-2" />
                                                <div className="p-2 w-[60%] ">
                                                    <p className="font-bold tracking-tight text-gray-900 truncate">
                                                        {data.title}
                                                    </p>
                                                    <p className="text-xs">{data.date}</p>
                                                </div>
                                            </li>
                                        </ol>
                                    </Link>
                                )
                            })}
                        </>
                    </div >
                </div>
                <hr className="my-6"></hr>
            </div>
            <div className="text-center">
                <h1 className="text-center my-5 ">Artikel Terbaru</h1>
                <div className="grid grid-rows-2 grid-flow-col md:flex  justify-center mb-8">
                    <button className=" border-2 rounded-full text-sm mx-8 my-2 px-4 py-2">Semua</button>
                    <button className=" border-2 rounded-full text-sm mx-8 my-2 px-4 py-2">Skin Care</button>
                    <button className=" border-2 rounded-full text-sm mx-8 my-2 px-4 py-2">Make Up</button>
                    <button className=" border-2 rounded-full text-sm mx-8 my-2 px-4 py-2">Organik</button>
                </div>
                <div className=" w-[85%] mx-auto sm:grid grid-cols-2 gap-8 lg:grid-cols-3">
                    <SubBeautyFeed article={currentItem} loading={loading} />
                </div>
            </div>
            <PaginationArticle itemsPerPage={itemsPerPage} totalItems={article.length} paginate={paginate} />
            <Footer />
        </>
    )
}