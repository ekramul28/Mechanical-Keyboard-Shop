import FilterProducts from "./FilterProducts";
import PaginationCard from "./Pagination";
import ProductHeader from "./ProcuctHeader";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const cards = [
    {
      _id: "1",
      image:
        "https://i.ibb.co/72nv3qv/usetldr-12084257-u-12400777-image-format-y-QGDrv6-Zdxm-LU9-Q-1.png",
      title: "macin",
      brand: "macin",
      availableQuantity: "29",
      price: "200",
      rating: "5",
      descriptions: "This is the main think",
    },
    {
      _id: "2",
      image:
        "https://i.ibb.co/72nv3qv/usetldr-12084257-u-12400777-image-format-y-QGDrv6-Zdxm-LU9-Q-1.png",
      title: "macin",
      brand: "macin",
      availableQuantity: "29",
      price: "200",
      rating: "5",
      descriptions: "This is the main think",
    },
    {
      _id: "3",
      image:
        "https://i.ibb.co/72nv3qv/usetldr-12084257-u-12400777-image-format-y-QGDrv6-Zdxm-LU9-Q-1.png",
      title: "macin",
      brand: "macin",
      availableQuantity: "29",
      price: "200",
      rating: "5",
      descriptions: "This is the main think",
    },
    {
      _id: "4",
      image:
        "https://i.ibb.co/72nv3qv/usetldr-12084257-u-12400777-image-format-y-QGDrv6-Zdxm-LU9-Q-1.png",
      title: "macin",
      brand: "macin",
      availableQuantity: "29",
      price: "200",
      rating: "5",
      descriptions: "This is the main think",
    },
    {
      _id: "5",
      image:
        "https://i.ibb.co/72nv3qv/usetldr-12084257-u-12400777-image-format-y-QGDrv6-Zdxm-LU9-Q-1.png",
      title: "macin",
      brand: "macin",
      availableQuantity: "29",
      price: "200",
      rating: "5",
      descriptions: "This is the main think",
    },
  ];
  return (
    <div className="">
      <ProductHeader />
      <FilterProducts />
      <div>
        <h1 className="font-bold text-2xl text-center">Card Section</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3  justify-center items-center">
          {cards.map((card, index) => (
            <ProductsCard key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <PaginationCard />
      </div>
    </div>
  );
};

export default Products;
