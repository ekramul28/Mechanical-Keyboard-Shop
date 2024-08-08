import React, { useState } from "react";
import { Form, Input } from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];
const AddProduct = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  return (
    <div>
      <Form
        labelCol={{}}
        wrapperCol={{}}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        //    style={{ maxWidth: 600 }}
      >
        <div className="flex">
          <div>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;
