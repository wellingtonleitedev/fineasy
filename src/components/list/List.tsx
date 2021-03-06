import React from "react";
import { Container, Item } from "./List.style";

interface IList {
  data: object[];
}

const List: React.FC<IList> = ({ data }) => {
  return (
    <Container data-testid="list-container">
      {data.map((item, index) => (
        <Item data-testid="list-item" key={index}>
          {item}
        </Item>
      ))}
    </Container>
  );
};

export default List;
