import { Card, Form, Row, Space, Typography } from "antd";
import { Layout } from "../../components/layout";
import { CustomInput } from "../../components/input/index";
import { PasswordInput } from "../../components/input-password";
import { CustomButton } from "../../components/button";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Login = () => {
  const cardStyle = {
    width: "30rem",
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={cardStyle}>
          <Form onFinish={() => null}>
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Password" />
            <CustomButton type="primary" htmlType="submit">
              Войти
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
<Typography.Text>
  Нет аккаунта? <Link to={Paths.register}>Зарегистрироваться</Link>
</Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
