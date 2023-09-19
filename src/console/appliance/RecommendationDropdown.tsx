import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Center, Flex, Loader, Textarea } from "@mantine/core";
import axios from "axios";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RecommendationDropdown = (props: any) => {
  const [rec, setRec] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showTextarea, setShowTextarea] = React.useState(false);

  const getRecommendation = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_PREFIX}/recommended-action`,
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
    <Flex direction="column" style={{ height: "24rem", width: "100%" }}>
      <Center>
        {!loading ? (
          <Button
            onClick={getRecommendation}
            mt={12}
            style={{ maxWidth: "14rem" }}
            leftIcon={<FontAwesomeIcon icon={faCaretDown} />}
          >
            Show Recommendation
          </Button>
        ) : (
          <Loader />
        )}
      </Center>

      {showTextarea && (
        <Textarea
          style={{ marginTop: "20px", marginRight: "1rem" }}
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
