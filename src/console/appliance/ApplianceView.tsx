import { Badge, Flex, Select, Table, TextInput, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { colorMapping, riskToWord } from "../../utils/risk.utils";

export const ApplianceView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/appliances/${id}`
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

  //   {
  //     "Asset ID": 1,
  //     "Asset Type": "Elevator",
  //     "Floor": 7,
  //     "Installation Date": "1/6/2020",
  //     "Last Serviced Date": "6/19/2023",
  //     "Manufacturer": "Manufacturer_4",
  //     "Operational Time (hrs)": 39313,
  //     "Repairs": 1,
  //     "Risk": 1,
  //     "Room": 103,
  //     "Work Orders": 0
  // }

  return (
    <Flex direction="column" style={{ maxWidth: "48rem" }}>
      <Title style={{ fontSize: "72px" }} mb={20}>
        {data["Asset Type"]}
      </Title>
      <Title order={2}>Floor: {data["Floor"]}</Title>
      <Title order={2}>Room: {data["Room"]}</Title>
      <Title order={2}>Installed on: {data["Installation Date"]}</Title>
      <Title order={2}>Last services on: {data["Last Serviced Date"]}</Title>
    </Flex>
  );
};

export default ApplianceView;
