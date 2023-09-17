import {
  Badge,
  Divider,
  Flex,
  Select,
  Table,
  TextInput,
  Title,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { colorMapping, riskToWord } from "../../utils/risk.utils";
import RecommendationDropdown from "./RecommendationDropdown";
import Scene from "../../three/Scene";

const ApplianceTypeMapping = {
  Elevator: {
    pathname: "Elevator",
    z: 10,
  },
  "Fire Alarm": {
    pathname: "Fire alarm",
    z: 3,
  },
  HVAC: {
    pathname: "Air conditioner small",
    z: 200,
  },
  "Plumbing System": {
    pathname: "Plunger",
    z: 10,
  },
  "Electrical Panel": {
    pathname: "Lightning bolt",
    z: 3,
  },
};

export const ApplianceView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
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

  return (
    <Flex direction="column">
      <Flex justify="space-evenly">
        <Flex direction="column">
          <Flex direction="column" style={{ maxWidth: "24rem" }} gap={5}>
            <Title style={{ fontSize: "72px", marginRight: "1rem" }}>
              {data["Asset Type"]}
            </Title>
            <Badge
              color={colorMapping[data["Risk"]]}
              size="xl"
              style={{ maxWidth: "8rem" }}
            >
              {riskToWord[data["Risk"]]}
            </Badge>
            <Divider />
            <Title order={2}>Floor: {data["Floor"]}</Title>
            <Title order={2}>Room: {data["Room"]}</Title>
            <Divider />
            <Title order={2}>Installed on: {data["Installation Date"]}</Title>
            <Title order={2}>Manufacturer: {data["Manufacturer"]}</Title>
            <Title order={2}>
              Last serviced on: {data["Last Serviced Date"]}
            </Title>
            <Divider />
            <Title order={2}>
              Operational time (hrs): {data["Operational Time (hrs)"]}
            </Title>
            <Title order={2}>Repairs: {data["Repairs"]}</Title>
            <Title order={2}>Work Orders: {data["Work Orders"]}</Title>
          </Flex>
        </Flex>
        <Scene viewSettings={ApplianceTypeMapping[data["Asset Type"]]} />
      </Flex>
      <RecommendationDropdown appliance={data} />
    </Flex>
  );
};

export default ApplianceView;
