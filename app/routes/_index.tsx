import React from "react";
import type { MetaFunction } from "@remix-run/node";
import {
  MenuTrigger,
  Button,
  Popover,
  Menu,
  Item,
  Section,
} from "react-aria-components";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [user, setUser] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <MenuTrigger>
        <Button aria-label="Menu">☰</Button>
        <Popover>
          <Menu onAction={() => setUser((p) => !p)}>
            {user ? (
              <Section>
                <Item id="account">Account</Item>
                <Item id="signout">Sign out</Item>
              </Section>
            ) : (
              <Section>
                <Item id="signin">Sign in</Item>
              </Section>
            )}
          </Menu>
        </Popover>
      </MenuTrigger>
    </div>
  );
}
