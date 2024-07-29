import { Button, Select } from "antd";

type FilterProductsProps = {
  setTitle: ({ name, value }: { name: string; value: string }) => void;
  setColor: ({ name, value }: { name: string; value: string }) => void;
  setType: ({ name, value }: { name: string; value: string }) => void;
  setOffer: ({ name, value }: { name: string; value: string }) => void;
};

const FilterProducts: React.FC<FilterProductsProps> = ({
  setTitle,
  setColor,
  setType,
  setOffer,
}) => {
  const handleKeyboardTitle = (label: string) => {
    setTitle({ name: "title", value: label });
  };
  const handleColor = (label: string) => {
    setColor({ name: "color", value: label });
  };
  const handleKeyboardType = (label: string) => {
    setType({ name: "keyboardType", value: label });
  };
  const handleSetOffer = (label: string) => {
    setOffer({ name: "offer", value: label });
  };
  const handelAllProduct = () => {
    setTitle({ name: "", value: "" });
  };
  return (
    <div className="md:flex  lg:gap-6 gap-3   md:justify-between md:items-start justify-center items-center my-10 mx-2 ">
      <div className="md:flex md:gap-6 gap-3 grid justify-center items-center ">
        <div>
          <Select
            className="rounded-full"
            onChange={handleKeyboardTitle}
            showSearch
            placeholder="keyBoard Title"
            filterOption={(input, label) =>
              (label?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "Wireless Ergonomic Keyboard",
                label: "Wireless Keyboard",
              },
              {
                value: "Mechanical Gaming Keyboard",
                label: "Mechanical Keyboard",
              },
              {
                value: "Compact Mechanical Keyboard",
                label: "Compact Keyboard",
              },
              { value: "RGB Gaming Keyboard", label: "RGB Keyboard" },
            ]}
          />
        </div>
        <div>
          <Select
            onChange={handleColor}
            showSearch
            placeholder="Color"
            filterOption={(input, label) =>
              (label?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "black", label: "Black" },
              { value: "white", label: "White" },
              { value: "pink", label: "Pink" },
              { value: "rgb", label: "RGB" },
              { value: "gray", label: "Gray" },
            ]}
          />
        </div>
        <div>
          <Select
            onChange={handleKeyboardType}
            showSearch
            placeholder="Type"
            filterOption={(input, label) =>
              (label?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "Cases", label: "Cases" },
              { value: "Plates", label: "Plates" },
            ]}
          />
        </div>
        <div>
          <Select
            onChange={handleSetOffer}
            showSearch
            placeholder="Offer"
            filterOption={(input, label) =>
              (label?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "true", label: "true" },
              { value: "false", label: "false" },
            ]}
          />
        </div>
        <div className="ml-4 md:ml-0">
          <Button onClick={handelAllProduct}>
            <svg
              width="20px"
              height="20px"
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              ></path>
            </svg>
            All Product
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <Select
          onChange={handleKeyboardType}
          showSearch
          placeholder="Sort by"
          filterOption={(input, label) =>
            (label?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            { value: "price", label: "Price" },
            { value: "updatedAt", label: "New Product" },
            { value: "title", label: "A-Z" },
            { value: "-rating", label: "Rating" },
          ]}
        />
      </div>
    </div>
  );
};

export default FilterProducts;
