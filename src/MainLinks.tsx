import React from "react";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faGauge,
  faListCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  route: string;
}

function MainLink({ icon, color, label, route }: MainLinkProps) {
  const navigate = useNavigate();

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
      onClick={() => navigate(route)}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
        <Text size="xl">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  {
    icon: <FontAwesomeIcon icon={faGauge} />,
    color: "blue",
    label: "Dashboard",
    route: "/dashboard",
  },
  {
    icon: <FontAwesomeIcon icon={faTriangleExclamation} />,
    color: "red",
    label: "Work Orders",
    route: "/work-orders",
  },
  {
    icon: <FontAwesomeIcon icon={faBoxesStacked} />,
    color: "violet",
    label: "Appliances",
    route: "/appliances",
  },
  {
    icon: <FontAwesomeIcon icon={faListCheck} />,
    color: "yellow",
    label: "Logs",
    route: "/logs",
  },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
