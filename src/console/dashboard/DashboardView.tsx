import { Flex, Grid, Paper, Text, Title } from "@mantine/core";
import SimplePieChart from "./SimplePieChart";
import ReactiveBarChart from "./ReactiveBarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ReactiveCard = () => {
  const navigate = useNavigate();

  return (
    <Paper
      shadow="lg"
      radius="md"
      p="xl"
      withBorder
      onClick={() => navigate("/service/reactive")}
      style={{
        cursor: "pointer",
        backgroundColor: "#c25151",
      }}
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap={4}
        style={{ height: "12rem" }}
      >
        <Text color="white" fz="lg" fw={700}>
          Urgent Issues
        </Text>
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          color="white"
          style={{ fontSize: "7rem" }}
        />
        <Title color="white" order={1}>
          3 Issues
        </Title>
      </Flex>
    </Paper>
  );
};

const ProactiveCard = () => {
  const navigate = useNavigate();

  return (
    <Paper
      shadow="lg"
      radius="md"
      p="xl"
      withBorder
      onClick={() => navigate("/service/proactive")}
      style={{
        cursor: "pointer",
        backgroundColor: "#e08631",
      }}
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{ height: "12rem" }}
        gap={4}
      >
        <Text color="white" fz="lg" fw={700}>
          Preventative Issues
        </Text>
        <FontAwesomeIcon
          icon={faClock}
          color="white"
          style={{ fontSize: "7rem" }}
        />
        <Title color="white" order={1}>
          7 Issues
        </Title>
      </Flex>
    </Paper>
  );
};

export const DashboardView = () => {
  return (
    <Grid
      gutter={5}
      gutterXs="md"
      gutterMd="xl"
      gutterXl={50}
      style={{ width: "80%" }}
    >
      <Grid.Col span={12}>
        <Title>Dashboard</Title>
      </Grid.Col>
      <Grid.Col span={6}>
        <ReactiveCard />
      </Grid.Col>
      <Grid.Col span={6}>
        <ProactiveCard />
      </Grid.Col>
      <Grid.Col span={8}>
        <Paper shadow="lg" radius="md" p="xl" withBorder>
          <Flex
            direction="column"
            justify="center"
            align="center"
            style={{ height: "16rem" }}
          >
            <Text fz="xl">Weekly Report</Text>
            <ReactiveBarChart />
          </Flex>
        </Paper>
      </Grid.Col>
      <Grid.Col span={4}>
        <Paper shadow="lg" radius="md" p="xl" withBorder>
          <Flex
            direction="column"
            justify="center"
            align="center"
            style={{ height: "16rem" }}
          >
            <Text fz="xl">Service Requests</Text>
            <SimplePieChart />
          </Flex>
        </Paper>
      </Grid.Col>
      {/* <Grid.Col span={4}>
        <Paper shadow="lg" radius="md" p="xl" withBorder>
          <Flex
            direction="column"
            justify="center"
            align="center"
            style={{ height: "16rem" }}
          >
            <SimplePieChart />
          </Flex>
        </Paper>
      </Grid.Col> */}
    </Grid>
  );
};

export default DashboardView;
