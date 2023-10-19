const Banner = () => {
  return (
    <div className="mt-5 mb-5" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <section className="px-3 py-5 bg-neutral-100 lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold md:text-7xl text-orange-600">
              25% OFF
            </p>
            <p className="text-4xl font-bold md:text-7xl">WINTER SALE</p>
            <p className="mt-2 text-sm md:text-lg">For limited time only!</p>

          </div>
          <div className="order-1 lg:order-2">
            <img
              className="object-cover lg:w-full lg:h-full"
              src="https://i.ibb.co/ThV5QdR/jeff-tumale-SD9-Jyl1x-NQ4-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

{/* <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
              Shop Now
            </button> */}

export default Banner;
