import {
  Anchor,
  Badge,
  Breadcrumbs,
  Flex,
  Select,
  Table,
  TextInput,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { colorMapping, riskToWord } from "../../utils/risk.utils";
import axios from "axios";
import { useState, useEffect } from "react";

// const appliances = [
//   { name: "Power", lastServiced: "6/20/2023", risk: 3 },
//   { name: "Fire Alarm", lastServiced: "6/22/2023", risk: 3 },
//   { name: "HVAC", lastServiced: "6/14/2023", risk: 3 },
// ];

export const ReactiveView = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_PREFIX}/service/reactive`
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
    console.log(appliance);
    console.log(appliance["Asset ID"]);
    if (appliance === null) {
      return null;
    }
    return (
      <tr
        key={appliance["Asset ID"]}
        onClick={() => navigate(`/appliances/${appliance["Asset ID"]}`)}
      >
        <td>{appliance["Asset Type"]}</td>
        <td>{appliance["Last Serviced Date"]}</td>
        <td>
          <Badge color={colorMapping[appliance["Risk"]]} size="xl">
            {riskToWord[appliance["Risk"]]}
          </Badge>
        </td>
      </tr>
    );
  });

  const items = [
    { title: "Dashboard", href: "/dashboard" },
    { title: "Urgent Maintenence", href: "/service/proactive" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <Flex direction="column" style={{ maxWidth: "48rem" }}>
      <Breadcrumbs mb={10}>{items}</Breadcrumbs>
      <Title>Urgent Maintenance</Title>
      <Title order={4} mb={36} c="dimmed">
        These appliances are in urgent need of attention and must be fixed
        immediately!
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
            <th>Appliance Name</th>
            <th>Last Serviced Date</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Flex>
  );
};

export default ReactiveView;
