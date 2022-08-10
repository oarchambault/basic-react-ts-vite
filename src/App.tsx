import { AppShell, Header, Navbar, NavLink, Title } from "@mantine/core";
import { Link, Route, Routes, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height="100vh" p="xs">
            <NavLink component={Link} to="/" label="Home" active={location.pathname === "/"} />
            <NavLink
              component={Link}
              to="/other"
              label="Another"
              active={location.pathname === "/other"}
            />
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            <Title order={1}>Basic React-TypeScript with Vite, and Mantine</Title>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </AppShell>
    </>
  );
}

function Home() {
  return <div>This is the home page.</div>;
}

function Other() {
  return <div> This is another page.</div>;
}
