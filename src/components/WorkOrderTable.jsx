import { Button, Popconfirm, Space, Table, Tag, Typography } from "antd";

const { Text } = Typography;

function WorkOrderTable({ workOrders, isAdmin, onDelete }) {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Overtime",
      dataIndex: "overtime",
      key: "overtime",
      width: 140,
      render: (value) =>
        value ? <Tag color="volcano">Yes</Tag> : <Tag color="default">No</Tag>,
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
      width: 120,
      render: (value) => <Text strong>{value.toFixed(1)}</Text>,
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      width: 200,
    },
  ];

  if (isAdmin) {
    columns.push({
      title: "Action",
      key: "action",
      width: 140,
      render: (_, record) => (
        <Space>
          <Popconfirm
            title="Delete this work order?"
            okText="Delete"
            cancelText="Cancel"
            onConfirm={() => onDelete(record.id)}
          >
            <Button danger type="link">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    });
  }

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={workOrders}
      pagination={false}
      scroll={{ x: 860 }}
    />
  );
}

export default WorkOrderTable;
