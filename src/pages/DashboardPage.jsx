import {
  Alert,
  Button,
  Card,
  Col,
  Layout,
  Row,
  Space,
  Statistic,
  Tag,
  Typography,
  message,
} from "antd";
import WorkOrderTable from "../components/WorkOrderTable";
import ProjectHoursChart from "../components/ProjectHoursChart";

const { Content, Header } = Layout;
const { Paragraph, Title, Text } = Typography;

function DashboardPage({ currentUser, workOrders, onDelete, onLogout }) {
  const [messageApi, contextHolder] = message.useMessage();
  const isAdmin = currentUser.role === "admin";
  const overtimeCount = workOrders.filter((item) => item.overtime).length;
  const totalHours = workOrders.reduce((sum, item) => sum + item.hours, 0);

  const handleDelete = (id) => {
    onDelete(id);
    messageApi.success(`Work order ${id} deleted`);
  };

  return (
    <Layout className="dashboard-shell">
      {contextHolder}
      <Header className="dashboard-header">
        <div>
          <Text className="eyebrow">Work Order Dashboard</Text>
          <Title level={3}>工单管理与图表展示页面</Title>
        </div>
        <Space size="middle">
          <Tag color={isAdmin ? "success" : "blue"}>
            {isAdmin ? "Admin" : "User"}
          </Tag>
          <Text>{currentUser.username}</Text>
          <Button onClick={onLogout}>Logout</Button>
        </Space>
      </Header>

      <Content className="dashboard-content">
        <section className="hero-panel">
          <div>
            <Title>集中查看工单状态和项目工时分布</Title>
            <Paragraph>
              当前版本使用本地 mock 数据演示权限控制、表格渲染和图表联动。
            </Paragraph>
          </div>
          <div className="hero-stats">
            <Card bordered={false}>
              <Statistic title="Work Orders" value={workOrders.length} />
            </Card>
            <Card bordered={false}>
              <Statistic title="Overtime Items" value={overtimeCount} />
            </Card>
            <Card bordered={false}>
              <Statistic title="Total Hours" value={Number(totalHours.toFixed(1))} />
            </Card>
          </div>
        </section>

        <Alert
          className="permission-alert"
          type={isAdmin ? "success" : "info"}
          showIcon
          message={isAdmin ? "当前身份：管理员" : "当前身份：普通用户"}
          description={
            isAdmin
              ? "可查看工单、删除工单，并查看项目工时图表。"
              : "只能查看工单与图表，不能删除工单。"
          }
        />

        <Row gutter={[20, 20]}>
          <Col xs={24} xl={14}>
            <Card
              className="panel-card"
              title="Work Orders"
              extra={
                <Text type="secondary">
                  {isAdmin ? "管理员可删除工单" : "普通用户仅可查看"}
                </Text>
              }
            >
              <WorkOrderTable
                workOrders={workOrders}
                isAdmin={isAdmin}
                onDelete={handleDelete}
              />
            </Card>
          </Col>

          <Col xs={24} xl={10}>
            <Card className="panel-card" title="Hours Chart">
              <ProjectHoursChart workOrders={workOrders} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default DashboardPage;
