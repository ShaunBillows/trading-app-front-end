import styled from "styled-components";
import { useEffect, useState } from "react";

const PortfolioItem = ({ symbol, price, number, index }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const result = price * number;
    setTotal(result);
  }, [price, number]);

  return (
    <StyledRow
      index={index}
      symbol={symbol}
      price={price}
      number={number}
      total={total}
    >
      <TableData>{symbol}</TableData>
      <TableData>{number && number.toFixed(2)}</TableData>
      <TableDataTarget>${price && price.toFixed(2)}</TableDataTarget>
      <TableData>${price && total.toFixed(2)}</TableData>
    </StyledRow>
  );
};

export default PortfolioItem;

const StyledRow = styled.tr`
  ${(props) =>
    props.index % 2 === 1
      ? "background-color: #222224; "
      : "background-color: #28292e;"};
  &:hover {
    background-color: #31356e;
    cursor: pointer;
  }
`;
const TableData = styled.td`
  width: 25%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding: 0.6rem 0;
`;
const TableDataTarget = styled.td`
  padding-top: 5px;
  padding-bottom: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;
