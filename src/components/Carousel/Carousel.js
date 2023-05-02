import React from "react";

const Carousel = () => {
  return (
    <div className="carousel w-fit h-80">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://png.pngtree.com/background/20220727/original/pngtree-group-of-kids-in-red-santa-costume-singing-christmas-carols-on-picture-image_1835253.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://png.pngtree.com/background/20220727/original/pngtree-group-of-kids-in-red-santa-costume-singing-christmas-carols-on-picture-image_1835253.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://png.pngtree.com/background/20220727/original/pngtree-group-of-kids-in-red-santa-costume-singing-christmas-carols-on-picture-image_1835253.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://png.pngtree.com/background/20220727/original/pngtree-group-of-kids-in-red-santa-costume-singing-christmas-carols-on-picture-image_1835253.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
