import img1 from '../../../assets/images/logos/homepage-section3/hp-s3-1.png'
import img2 from '../../../assets/images/logos/homepage-section3/hp-s3-2.png'
import img3 from '../../../assets/images/logos/homepage-section3/hp-s3-3.png'
import img4 from '../../../assets/images/logos/homepage-section3/hp-s3-4.png'
import img5 from '../../../assets/images/logos/homepage-section3/hp-s3-5.png'
import img6 from '../../../assets/images/logos/homepage-section3/hp-s3-6.png'
import img7 from '../../../assets/images/logos/homepage-section3/hp-s3-7.png'
import img8 from '../../../assets/images/logos/homepage-section3/hp-s3-8.png'
import img9 from '../../../assets/images/logos/homepage-section3/hp-s3-9.png'
import img10 from '../../../assets/images/logos/homepage-section3/hp-s3-10.png'
import img11 from '../../../assets/images/logos/homepage-section3/hp-s3-11.png'
import img12 from '../../../assets/images/logos/homepage-section3/hp-s3-12.png'

export default function HomeSection3() {
    return (
        <section>
            <div className="max-w-7xl my-10 container bg-cream max-w-screen-2lg" id="ribuan-brand">
                <h1 className="text-center pt-20 text-2xl">Ribuan <span className="text-brown">BRAND</span> produk untuk
                    menjadikanmu cantik
                </h1>
                <div className="rb__logoWrapper">
                    <div className="grid grid-cols-5 gap-6 py-16">
                        <img src={img1} className="m-auto" alt="img1" />
                        <img src={img2} className="m-auto" alt="img2" />
                        <img src={img3} className="m-auto" alt="img3" />
                        <img src={img4} className="m-auto" alt="img4" />
                        <img src={img5} className="m-auto" alt="img5" />
                        <img src={img6} className="m-auto" alt="img6" />
                        <img src={img7} className="m-auto" alt="img7" />
                        <img src={img8} className="m-auto" alt="img8" />
                        <img src={img9} className="m-auto" alt="img9" />
                        <img src={img10} className="m-auto" alt="img10" />
                        <img src={img11} className="m-auto" alt="img11" />
                        <img src={img12} className="m-auto" alt="img12" />
                        <a href="#" className="text-brown underline pt-5">Dan banyak lainnya</a>
                    </div>
                </div>
            </div>
        </section>
    )
}