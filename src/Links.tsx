import { Navbar, ScrollArea, Box } from "@mantine/core";
import { MainLinks } from "./MainLinks";
import { Brand } from "./Brand";

export function Demo() {
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">
        <Brand />
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <Box py="md">
          <MainLinks />
          <MainLinks />
          <MainLinks />
          <MainLinks />
        </Box>
      </Navbar.Section>
      {/* <Navbar.Section>
        <User />
      </Navbar.Section> */}
    </Navbar>
  );
}
