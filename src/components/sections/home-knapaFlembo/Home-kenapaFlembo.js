import img from '../../../assets/images/homepage/kenapaHarus.png'

export default function KenapaFlambo() {
    return (
        <section>
            <div className="container max-w-lg sm:grid grid-cols-2 sm:my-5 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[1300px]" id="kenapa-flambo">
                <img src={img} alt='not found' className='p-5 m-auto sm:text-center md:pt-10' />
                <div className=' p-5 text-lg md:my-auto'>
                    <h1 className='text-center sm:text-xl sm:pb-2 md:text-2xl '>Kenapa  harus beli
                        di Flambo ?</h1>
                    <p className='py-2 text-justify'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, fugiat quo voluptas nulla pariatur?</p>
                </div>
            </div>
        </section>
    )
}