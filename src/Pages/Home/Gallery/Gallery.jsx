// import React from 'react';
import groupImg1 from '../../../assets/images/image-gallery/img1.jpg'
import groupImg2 from '../../../assets/images/image-gallery/img2.webp'
import groupImg3 from '../../../assets/images/image-gallery/img3.jpg'
import groupImg4 from '../../../assets/images/image-gallery/img4.jpg'
import groupImg5 from '../../../assets/images/image-gallery/img5.jpg'
import groupImg6 from '../../../assets/images/image-gallery/img6.jpg'

const Gallery = () => {
    return (
        <div className="px-[160px] my-24">
            <div className="text-center mb-12">
                <h1 className='about-heading text-center font-semibold text-3xl mb-6'>Our <span>Image Gallery</span></h1>
                <p className="tracking-wide">
                    An image gallery is a collection or display of visual content, typically <br /> consisting of photographs or pictures, organized in a coherent and accessible manner.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div>
                    <img className='w-80 h-56 rounded-lg' src={groupImg1} />
                </div>
                <div>
                    <img className='w-80 h-56 rounded-lg' src={groupImg2} />
                </div>
                <div>
                    <img className='w-80 h-56 rounded-lg' src={groupImg3} />
                </div>
                <div>
                    <img className='w-80 h-56 rounded-lg' src={groupImg4} />
                </div>
                <div>
                    <img className='w-80 h-56 rounded-lg' src={groupImg5} />
                </div>
                <div>
                    <img className='w-80 h-56 rounded-lg' src={groupImg6} />
                </div>
            </div>
        </div>
    );
};

export default Gallery;