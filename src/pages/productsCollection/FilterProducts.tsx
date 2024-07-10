import { useState } from "react";
import { Select } from "antd";

// type TKeyboard <Array>

// const keyBoard: string[] = ["man", "lind", "ok"];

const FilterProducts = () => {
  const [cities, setCities] = useState("");

  console.log(cities);

  const handleKeyboardType = (label: string) => {
    setCities(label);
    console.log(label);
  };

  return (
    <div>
      <Select
        onChange={handleKeyboardType}
        showSearch
        placeholder="keyBoard Type"
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
  );
};

export default FilterProducts;
