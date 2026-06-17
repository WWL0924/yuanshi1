import ReactECharts from "echarts-for-react";
import { Empty } from "antd";
import { aggregateProjectHours } from "../utils/chart";

function ProjectHoursChart({ workOrders }) {
  const projectHours = aggregateProjectHours(workOrders);

  if (!projectHours.length) {
    return <Empty description="No work orders available" />;
  }

  const option = {
    title: {
      text: "Project Hours Distribution",
      left: "center",
      top: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: 700,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: 24,
      right: 24,
      bottom: 24,
      top: 70,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: projectHours.map((item) => item.project),
      axisLabel: {
        interval: 0,
        rotate: 12,
      },
    },
    yAxis: {
      type: "value",
      name: "Hours",
    },
    series: [
      {
        type: "bar",
        data: projectHours.map((item) => item.hours),
        barMaxWidth: 68,
        itemStyle: {
          color: "#0f766e",
          borderRadius: [10, 10, 0, 0],
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 360, width: "100%" }} />;
}

export default ProjectHoursChart;
