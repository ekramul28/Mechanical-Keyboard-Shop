import React, { useState } from "react";
import { Col, Form, Input, InputNumber, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

type SizeType = Parameters<typeof Form>[0]["size"];
const AddProduct = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  return (
    <div style={{ width: "100%" }}>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        //    size={componentSize}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Title">
              <Select
                className="rounded-full"
                // onChange={handleKeyboardTitle}
                showSearch
                placeholder="keyBoard Title"
                filterOption={(input, label) =>
                  (label?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
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
            </Form.Item>
            <Form.Item label="Rating">
              <Select
                // onChange={handleColor}
                showSearch
                placeholder="Rating"
                filterOption={(input, label) =>
                  (label?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
              />
            </Form.Item>
            <Form.Item label="Type">
              <Select
                // onChange={handleKeyboardType}
                showSearch
                placeholder="KeyboardType"
                filterOption={(input, label) =>
                  (label?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "Cases", label: "Cases" },
                  { value: "Plates", label: "Plates" },
                ]}
              />
            </Form.Item>

            <Form.Item label="Color">
              <Select
                // onChange={handleColor}
                showSearch
                placeholder="Color"
                filterOption={(input, label) =>
                  (label?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "black", label: "Black" },
                  { value: "white", label: "White" },
                  { value: "pink", label: "Pink" },
                  { value: "rgb", label: "RGB" },
                  { value: "gray", label: "Gray" },
                ]}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Brand">
              <Select
                // onChange={handleColor}
                showSearch
                placeholder="Brand"
                filterOption={(input, label) =>
                  (label?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "ducky", label: "Ducky" },
                  { value: "hikb", label: "Hikb" },
                  { value: "m", label: "M" },
                  { value: "keychron", label: "Keychron" },
                  { value: "leopolo", label: "Leopolo" },
                  { value: "filco", label: "Filco" },
                ]}
              />
            </Form.Item>
            <Form.Item label="Quantity">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item label="Price">
              <InputNumber
                style={{ width: "100%" }}
                addonAfter="$"
                defaultValue={0}
              />
            </Form.Item>
            <Form.Item label="Description">
              <TextArea
                placeholder="description"
                allowClear
                // onChange={onChange}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddProduct;
