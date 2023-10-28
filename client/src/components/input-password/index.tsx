import { Form, Input } from "antd";
import { NamePath } from "antd/es/form/interface";


type Props = {
  name: string;
  placeholder: string;
  dependencies?: NamePath[];
  color?: string;
  textColor?: string; 
};

export const PasswordInput = ({ name, placeholder, dependencies, color, textColor }: Props) => {
  const inputStyle = {
    backgroundColor: color,
    color: textColor, 
  };
  
  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      hasFeedback
      
      rules={[
        {
          required: true,
          message:  "Обязательное поле!",
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve();
            }
            if (name === "confirmPassword") {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Пароли не совпадают!")
              );
            } else {
                if (value.length < 8) {
                    return Promise.reject(new Error("Пароль должен содержать минимум 8 символов!"));
                  }
                  return Promise.resolve();
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={placeholder} size="large" style={inputStyle}/>
    </Form.Item>
  );
};
