import { Badge, Flex, Select, Table, TextInput, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { colorMapping, riskToWord } from "../../utils/risk.utils";
export const AppliancesView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/appliances");
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
      <tr
        key={appliance["Asset ID"]}
        onClick={() => navigate(`/appliances/${appliance["Asset ID"]}`)}
      >
        <td>{appliance["Asset Type"]}</td>
        <td>{appliance["Floor"]}</td>
        <td>{appliance["Room"]}</td>
        <td>
          <Badge color={colorMapping[appliance["Risk"]]} size="xl">
            {riskToWord[appliance["Risk"]]}
          </Badge>
        </td>
      </tr>
    );
  });

  return (
    <Flex direction="column" style={{ maxWidth: "48rem" }}>
      <Title>All Appliances</Title>
      <Title order={4} mb={36} c="dimmed">
        View every appliance in the building, click on any appliance to view
        more information
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
            <th>Asset Type</th>
            <th>Floor</th>
            <th>Room</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Flex>
  );
};

export default AppliancesView;
