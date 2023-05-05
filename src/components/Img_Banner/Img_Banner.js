import React from 'react';

const Img_Banner = () => {
    return (
        <div className="relative flex items-center justify-center">
        <img className="w-fit h-1/4" src="https://png.pngtree.com/background/20210710/original/pngtree-black-meat-western-food-banner-background-picture-image_1013905.jpg" alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl font-bold text-white mt-3 mb-3">Bangla Bazar & Restaurant</h1>
        </div>
      </div>

    );
};

export default Img_Banner;


