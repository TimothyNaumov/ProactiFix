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

// const appliances = [
//   { name: "Power", lastServiced: "6/20/2023", risk: 3 },
//   { name: "Fire Alarm", lastServiced: "6/22/2023", risk: 3 },
//   { name: "HVAC", lastServiced: "6/14/2023", risk: 3 },
// ];

const appliances = [
  {
    "Asset ID": 8,
    "Asset Type": "HVAC",
    Floor: 2,
    Room: 106,
    "Installation Date": "6/3/2021",
    Manufacturer: "Manufacturer_2",
    "Operational Time (hrs)": 33932,
    "Work Orders": 1,
    Repairs: 4,
    "Last Serviced Date": "8/9/2023",
    risk: 3,
  },
  {
    "Asset ID": 9,
    "Asset Type": "Fire Alarm",
    Floor: 6,
    Room: 108,
    "Installation Date": "7/30/2023",
    Manufacturer: "Manufacturer_5",
    "Operational Time (hrs)": 24332,
    "Work Orders": 5,
    Repairs: 4,
    "Last Serviced Date": "2/13/2023",
    risk: 3,
  },
  {
    "Asset ID": 10,
    "Asset Type": "Elevator",
    Floor: 7,
    Room: 101,
    "Installation Date": "7/24/2019",
    Manufacturer: "Manufacturer_4",
    "Operational Time (hrs)": 18722,
    "Work Orders": 10,
    Repairs: 2,
    "Last Serviced Date": "5/29/2023",
    risk: 3,
  },
];

export const ReactiveView = () => {
  const navigate = useNavigate();
  const rows = appliances.map((appliance) => (
    <tr
      key={appliance["Asset Type"]}
      onClick={() => navigate(`/appliances/${appliance["Asset ID"]}`)}
    >
      <td>{appliance["Asset Type"]}</td>
      <td>{appliance["Last Serviced Date"]}</td>
      <td>
        <Badge color={colorMapping[appliance["risk"]]} size="xl">
          {riskToWord[appliance["risk"]]}
        </Badge>
      </td>
    </tr>
  ));

  const items = [
    { title: "Dashboard", href: "/dashboard" },
    { title: "Reactive Maintenence", href: "/service/reactive" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <Flex direction="column" style={{ maxWidth: "48rem" }}>
      <Breadcrumbs mb={10}>{items}</Breadcrumbs>
      <Title>Reactive Maintenance</Title>
      <Title order={4} mb={36} c="dimmed">
        These appliances need immediate attention
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
