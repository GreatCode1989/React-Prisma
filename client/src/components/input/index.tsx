import { Form, Input } from "antd";

type Props = {
  name: string;
  placeholder: string;
  type?: string;
  color?: string;
  textColor?: string; 
}


export const CustomInput = ({ name, placeholder, type = "text", color, textColor}: Props) => {
  const inputStyle = {
    backgroundColor: color,
    color: textColor, 
  };

 
  return (
    <Form.Item
      name={name}
      shouldUpdate={true}
      rules={[{ required: true, message: "Обязательное поле!" }]}
    >
      <Input
        placeholder={placeholder}
        type={type}
        size="large"
        style={inputStyle}
      />
    </Form.Item>
  );
};