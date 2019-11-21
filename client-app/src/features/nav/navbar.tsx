import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface IProps {
  openCreateForm: () => void;

}

export const NavBar: React.FC<IProps> = ({openCreateForm}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item name="home">
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>>
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
            <Button onClick={openCreateForm} positive content='Create activity'/>
            </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
