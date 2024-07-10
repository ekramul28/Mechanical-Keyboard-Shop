const brands = [
  {
    name: "Typing Lounge",
    logo: "https://www.typinglounge.com/wp-content/uploads/tpl-logo-header-6.png",
  },
  {
    name: "WIRED",
    logo: "https://nuphy.com/cdn/shop/files/logo_web03_100x@2x.png?v=1626617933",
  },

  {
    name: "WIRED",
    logo: "https://www.wired.com/verso/static/wired/assets/logo-header.svg",
  },
  {
    name: "WIKIMEDIA",
    logo: "https://www.wikimedia.org/static/images/wmf-logo-2x.png",
  },
  {
    name: "WIRED",
    logo: "https://www.ryans.com/assets/images/ryans-logo.svg",
  },
  {
    name: "WIRED",
    logo: "https://www.pcmag.com/images/pcmag-hover.svg",
  },
];

const FeaturedProducts = () => {
  return (
    <div>
      <div className=" lg:w-[70%] mx-auto flex flex-wrap items-center  justify-center sm:justify-evenly h-[100px] sm:h-[150px] gap-2 sm:gap-0">
        {brands.map(({ logo }, index) => (
          <img key={index} src={logo} alt="" className="h-[30%] lg:h-[40%]" />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
