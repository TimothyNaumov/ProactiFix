import { Flex, Select, Table, TextInput, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import axios from "axios";

export const WorkOrdersView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_PREFIX}/work-orders`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const rows = Object.keys(data).map((app) => {
    const appliance = data[app];
    if (appliance === null) {
      return;
    }
    return (
      <tr key={appliance["Asset ID"]}>
        <td>{appliance["Employee"]}</td>
        <td>{appliance["Asset Type"]}</td>
        <td>{appliance["Description"]}</td>
        <td>{appliance["Request Date"]}</td>
      </tr>
    );
  });

  return (
    <Flex direction="column" style={{ maxWidth: "48rem" }}>
      <Title>Work Orders</Title>
      <Title order={4} mb={36} c="dimmed">
        These appliances have been issued work orders and need to be inspected.
        Each appliance has automatically been assigned the highest priority and
        placed in the urgent issues
      </Title>
      <Flex justify="space-between" mb={20}>
        <TextInput
          width="2rem"
          label="Search"
          placeholder="HVAC, power, etc."
        />
        <Select
          label="Filter"
          placeholder="High Risk, Low Risk, etc."
          data={[]}
        />
      </Flex>
      <Table
        highlightOnHover
        withBorder
        fontSize="xl"
        verticalSpacing="sm"
        style={{ backgroundColor: "white" }}
      >
        <thead>
          <tr>
            {/* Assuming your data has these fields. Adjust accordingly */}
            <th>Employee</th>
            <th>Asset Type</th>
            <th>Description</th>
            <th>Request Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Flex>
  );
};

export default WorkOrdersView;
