
import Footer from "../../components/sections/_footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/sections/_navbar/Navbar";
import ProdukTrending from "../../components/sections/home-produktrending/ProdukTrending";

export default function DetailArticle() {
    const params = useParams()
    const [oneArticle, setOneArticle] = useState([]);

    useEffect(() => {
        axios.get(`https://cosmetic-b.herokuapp.com/api/v1/article/${params.id}`)
            .then((res) => {
                console.log(res.data.data)
                setOneArticle(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [params.id])
    return (
        <>
            <Navbar />
            <div>
                {oneArticle ?
                    <div className="hero container max-w-screen-lg mx-auto pb-10">
                        <h1 className="text-center my-4">{oneArticle.title}</h1>
                        <img className="max-w-[50%] object-center mx-auto" src={oneArticle.photo} />
                        <p>{oneArticle.content}</p>
                    </div> : ''}
            </div>
            <ProdukTrending />
            <Footer />
        </>
    )
}