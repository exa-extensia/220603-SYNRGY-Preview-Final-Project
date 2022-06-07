import BCA from '../../../assets/icons/icon-bank/BCA.svg'
import mandiri from '../../../assets/icons/icon-bank/mandiri.svg'
import bni from '../../../assets/icons/icon-bank/bni.svg'
import jne from '../../../assets/icons/icon-pengiriman/jne.svg'
import pos from '../../../assets/icons/icon-pengiriman/pos.svg'

export default function Footer() {
    return (
        <section className="footer bg-goldie">
            <div className="footer-wrap grid grid-cols-2 p-5 gap-5 max-w-[600px] container sm:grid-cols-4 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
                <div className="footer__menu ">
                    <h3 className="text-sm mb-2">MENU</h3>
                    <a href="#" className="block">Home</a>
                    <a href="#" className="block">Kategori</a>
                    <a href="#" className="block">brand</a>
                    <a href="#" className="block">Pria</a>
                    <a href="#" className="block">Produk Organik</a>
                    <a href="#" className="block">Wanita</a>

                </div>
                <div className="footer__pembayaran ">
                    <h3 className="text-sm mb-2">PEMBAYARAN</h3>
                    <img src={BCA} className="py-1"></img>
                    <img src={mandiri} className="py-1"></img>
                    <img src={bni} className="py-1"></img>
                </div>
                <div className="footer__pengiriman ">
                    <h3 className="text-sm mb-2">PENGIRIMAN</h3>
                    <img src={jne} className="py-1"></img>
                    <img src={pos} className="py-1"></img>
                </div>
                <div className="footer__customer ">
                    <h3 className="text-sm mb-2">CUSTOMER CARE</h3>
                    <a className='block'>WA</a>
                    <a className='block'>Email</a>
                    <a className='block'>Instagram</a>
                    <a className='block'>No. Telepon</a>
                </div>
            </div>
        </section>
    )
}