import { useState } from "react";
import { Button, Select } from "antd";

// type TKeyboard <Array>

// const keyBoard: string[] = ["man", "lind", "ok"];

const FilterProducts = () => {
  const [cities, setCities] = useState("");

  // console.log(cities);

  const handleKeyboardType = (label: string) => {
    setCities(label);
    console.log(label);
  };

  return (
    <div className="md:flex  lg:gap-6 gap-3   md:justify-between md:items-start justify-center items-center my-10 mx-2 ">
      <div className="md:flex md:gap-6 gap-3 grid justify-center items-center ">
        <div>
          <Select
            className="rounded-full"
            onChange={handleKeyboardType}
            showSearch
            placeholder="keyBoard Type"
            filterOption={(input, label) =>
              (label?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "membrane ", label: "Membrane Keyboard" },
              { value: "mechanical", label: "Mechanical Keyboard" },
              { value: "scissorSwitch", label: "Scissor-Switch Keyboard" },
              { value: "chiclet", label: "Chiclet Keyboard" },
            ]}
          />
        </div>
        <div>
          <Select
            onChange={handleKeyboardType}
            showSearch
            placeholder="Price"
            filterOption={(input, label) =>
              (label?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "200-1000", label: "200-1000" },
              { value: "1000-1500", label: "1000-1500" },
              { value: "1500-2000", label: "1500-2000" },
              { value: "2000-5000", label: "2000-5000" },
            ]}
          />
        </div>
        <div>
          <Select
            onChange={handleKeyboardType}
            showSearch
            placeholder="Review"
            filterOption={(input, label) =>
              (label?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "5", label: "5" },
              { value: "4", label: "4" },
              { value: "3", label: "3" },
              { value: "2", label: "2" },
              { value: "1", label: "1" },
            ]}
          />
        </div>
        <div>
          <Select
            onChange={handleKeyboardType}
            showSearch
            placeholder="Offer"
            filterOption={(input, label) =>
              (label?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "tom", label: "Tom" },
              { value: "ok", label: "ok" },
            ]}
          />
        </div>
        <div className="ml-4 md:ml-0">
          <Button>
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
            All filter
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
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "tom", label: "Tom" },
            { value: "ok", label: "ok" },
          ]}
        />
      </div>
    </div>
  );
};

export default FilterProducts;
