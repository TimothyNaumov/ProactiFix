import { Flex, Select, Table, TextInput, Title } from "@mantine/core";

import logs from "../../data/maintenance_logs.json";

function MaintenanceTable() {
  const rows = logs.map((log) => {
    if (log === null) {
      return;
    }
    return (
      <tr key={log["Log ID"]}>
        <td>{log["Log ID"]}</td>
        <td>{log["Asset ID"]}</td>
        <td>{log["Service Date"]}</td>
        <td>{log["Service Type"]}</td>
        <td>{log["Issues Found"]}</td>
        <td>{log["Service Personnel"]}</td>
      </tr>
    );
  });

  return (
    <Flex direction="column" style={{ maxWidth: "64rem" }}>
      <Title>Maintenance Logs</Title>
      <Title order={4} mb={36} c="dimmed">
        These logs show recent maintenance performed on the appliances
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
        fontSize="sm"
        verticalSpacing="md"
        style={{ backgroundColor: "white" }}
      >
        <thead>
          <tr>
            <th>Log ID</th>
            <th>Asset ID</th>
            <th>Service Date</th>
            <th>Service Type</th>
            <th>Issues Found</th>
            <th>Service Personnel</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Flex>
  );
}

export default MaintenanceTable;
