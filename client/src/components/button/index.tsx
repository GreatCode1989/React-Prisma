import { Button, Form } from "antd";


type Props = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: React.ReactNode;
  className?: string;
};

export const CustomButton = ({
  children,
  htmlType = "button",
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
  className
}: Props) => {
  return (
    <Form.Item>
      <Button
        type={type}
        htmlType={htmlType}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
        className={className}
      >
        {children}
      </Button>
    </Form.Item>
  );
};
