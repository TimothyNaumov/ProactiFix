import { Button, Flex, Loader, Textarea } from "@mantine/core";
import axios from "axios";
import React from "react";

const RecommendationDropdown = (props: any) => {
  const [rec, setRec] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showTextarea, setShowTextarea] = React.useState(false);

  const getRecommendation = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:3000/recommended-action`,
        { appliance: props.appliance }, // Adding appliance data to the body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setRec(response.data);
    } catch (error) {
      console.error("There was an error fetching the recommendation:", error);
    } finally {
      setLoading(false);
      setShowTextarea(true);
    }
  };

  return (
    <Flex direction="column" style={{ height: "20rem" }}>
      {!loading ? (
        <Button
          onClick={getRecommendation}
          mt={12}
          style={{ maxWidth: "12rem" }}
        >
          Show Recommendation
        </Button>
      ) : (
        <Loader />
      )}

      {showTextarea && (
        <Textarea
          style={{ marginTop: "20px" }}
          autosize
          minRows={8}
          maxRows={12}
          value={rec}
          readOnly
        />
      )}
    </Flex>
  );
};

export default RecommendationDropdown;
