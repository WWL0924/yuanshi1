import { Button, Card, Form, Input, Typography } from "antd";

const { Paragraph, Title, Text } = Typography;

function LoginPage({ onLogin }) {
  const handleFinish = (values) => {
    onLogin(values.username.trim());
  };

  return (
    <div className="auth-shell">
      <div className="auth-panel">
        <div className="auth-copy">
          <Text className="eyebrow">Work Order Demo</Text>
          <Title>登录后查看工单与图表联动页面</Title>
          <Paragraph>
            用户名为 <Text code>admin</Text> 时进入管理员视图，其他用户名进入普通用户视图。
          </Paragraph>
        </div>

        <Card className="auth-card" bordered={false}>
          <Title level={3}>Sign In</Title>
          <Form layout="vertical" onFinish={handleFinish} autoComplete="off">
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter your username",
                },
              ]}
            >
              <Input placeholder="Enter admin or any other username" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password",
                },
              ]}
            >
              <Input.Password placeholder="Any password is accepted" />
            </Form.Item>

            <Button type="primary" htmlType="submit" block size="large">
              Continue
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
