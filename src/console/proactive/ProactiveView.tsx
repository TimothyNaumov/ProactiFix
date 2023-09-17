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

// const appliances = [
//   { name: "Power", lastServiced: "6/20/2023", risk: 3 },
//   { name: "Fire Alarm", lastServiced: "6/22/2023", risk: 3 },
//   { name: "HVAC", lastServiced: "6/14/2023", risk: 2 },
//   { name: "HVAC", lastServiced: "6/15/2023", risk: 2 },
//   { name: "HVAC", lastServiced: "6/19/2023", risk: 2 },
//   { name: "Elevator", lastServiced: "6/21/2023", risk: 1 },
//   { name: "Elevator", lastServiced: "6/23/2023", risk: 1 },
// ];

const appliances = [
  {
    "Asset ID": 7,
    "Asset Type": "Fire Alarm",
    Floor: 6,
    Room: 108,
    "Installation Date": "8/23/2020",
    Manufacturer: "Manufacturer_2",
    "Operational Time (hrs)": 15650,
    "Work Orders": 2,
    Repairs: 3,
    "Last Serviced Date": "1/13/2023",
    risk: 3,
  },
  {
    "Asset ID": 3,
    "Asset Type": "Fire Alarm",
    Floor: 3,
    Room: 104,
    "Installation Date": "7/24/2019",
    Manufacturer: "Manufacturer_4",
    "Operational Time (hrs)": 21546,
    "Work Orders": 10,
    Repairs: 5,
    "Last Serviced Date": "9/24/2022",
    risk: 3,
  },
  {
    "Asset ID": 6,
    "Asset Type": "Fire Alarm",
    Floor: 2,
    Room: 103,
    "Installation Date": "7/29/2021",
    Manufacturer: "Manufacturer_3",
    "Operational Time (hrs)": 1602,
    "Work Orders": 9,
    Repairs: 4,
    "Last Serviced Date": "10/3/2022",
    risk: 3,
  },
  {
    "Asset ID": 2,
    "Asset Type": "Plumbing System",
    Floor: 6,
    Room: 109,
    "Installation Date": "6/11/2022",
    Manufacturer: "Manufacturer_2",
    "Operational Time (hrs)": 20012,
    "Work Orders": 0,
    Repairs: 1,
    "Last Serviced Date": "1/6/2023",
    risk: 2,
  },
  {
    "Asset ID": 5,
    "Asset Type": "Plumbing System",
    Floor: 2,
    Room: 104,
    "Installation Date": "11/28/2022",
    Manufacturer: "Manufacturer_1",
    "Operational Time (hrs)": 20022,
    "Work Orders": 10,
    Repairs: 3,
    "Last Serviced Date": "1/29/2023",
    risk: 2,
  },
  {
    "Asset ID": 1,
    "Asset Type": "Elevator",
    Floor: 7,
    Room: 103,
    "Installation Date": "1/6/2020",
    Manufacturer: "Manufacturer_4",
    "Operational Time (hrs)": 39313,
    "Work Orders": 0,
    Repairs: 1,
    "Last Serviced Date": "6/19/2023",
    risk: 1,
  },
  {
    "Asset ID": 4,
    "Asset Type": "Elevator",
    Floor: 1,
    Room: 105,
    "Installation Date": "1/4/2021",
    Manufacturer: "Manufacturer_4",
    "Operational Time (hrs)": 47038,
    "Work Orders": 1,
    Repairs: 1,
    "Last Serviced Date": "5/23/2023",
    risk: 1,
  },
];

const riskToWord: Record<number, string> = {
  3: "HIGH",
  2: "MODERATE",
  1: "LOW",
};

const colorMapping: Record<number, string> = {
  3: "red", // Soft Red
  2: "orange", // Gentle Orange
  1: "green", // Muted Green
};

export const ProactiveView = () => {
  const rows = appliances.map((appliance) => (
    <tr key={appliance["Asset Type"]}>
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
    { title: "Proactive Maintenence", href: "/service/proactive" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <Flex direction="column" style={{ maxWidth: "48rem" }}>
      <Breadcrumbs mb={10}>{items}</Breadcrumbs>
      <Title>Proactive Maintenence</Title>
      <Title order={4} mb={36} c="dimmed">
        These appliances need to be serviced soon, click on an appliance to view
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

export default ProactiveView;
