import { Card, Form, Row, Space, Typography } from "antd";
import { Layout } from "../../components/layout";
import { CustomInput } from "../../components/input/index";
import { PasswordInput } from "../../components/input-password";
import { CustomButton } from "../../components/button";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Register = () => {
  const cardStyle = {
    width: "30rem",
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегистрируйтесь" style={cardStyle}>
          <Form onFinish={() => null}>
          <CustomInput name="name" placeholder="Имя" />
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Password" />
            <PasswordInput name="confirmPassword" placeholder=" Reapet Password" />
            <CustomButton type="primary" htmlType="submit">
              Зарегистрироваться 
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Уже зарегистрированы?{" "}
              <Link to={Paths.login}>Войти в аккаунт</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
