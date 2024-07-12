const brands = [
  {
    name: "Typing Lounge",
    logo: "	https://mechanicalkeyboards.com/cdn/shop/files/Ducky_Logo_d7a554dd-80df-459b-91d0-57043942be14.png?v=1707865840&width=550",
  },
  {
    name: "WIRED",
    logo: "	https://mechanicalkeyboards.com/cdn/shop/files/HHKB_logo_gray.png?v=1707329074&width=550",
  },

  {
    name: "WIRED",
    logo: "https://mechanicalkeyboards.com/cdn/shop/files/MK-V3-Logo-_wide-format.png?v=1698782767&width=550",
  },
  {
    name: "WIKIMEDIA",
    logo: "https://mechanicalkeyboards.com/cdn/shop/files/keychron_logo.png?v=1700083951&width=550",
  },
  {
    name: "WIRED",
    logo: "https://mechanicalkeyboards.com/cdn/shop/files/leopold_logo.png?v=1700083966&width=550",
  },
  {
    name: "WIRED",
    logo: "https://mechanicalkeyboards.com/cdn/shop/files/filco_logo.png?v=1700083992&width=550",
  },
];

const FeaturedProducts = () => {
  return (
    <div>
      <div className=" lg:w-[70%] mx-auto flex flex-wrap items-center  justify-center sm:justify-evenly h-[100px] sm:h-[150px] gap-2 sm:gap-0">
        {brands.map(({ logo }, index) => (
          <img key={index} src={logo} alt="" className="h-[20%] lg:h-[40%]" />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
