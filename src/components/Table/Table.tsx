import React from "react";
import theme from "../../theme";
import { ThemeProvider } from "@emotion/react";
import { styled } from "@mui/system";
import "./table.css";

const StyledTable = styled("table")({
  border: 0,
  borderCollapse: "collapse",
  margin: "1.75rem 0",
  width: "100%",
});

const StyledHeader = styled("th")({
  border: "none",
  borderBottom: "1px solid #332e30",
  color: "#332e30",
  padding: "1.75rem",
  textAlign: "left",
  fontSize: "1.125rem",
  fontWeight: 700,
  letterSpacing: "-0.01em",
  lineHeight: "1.75rem",
});

const StyledTd = styled("td")({
  borderBottom: "1px solid #332e30",
  color: "#332e30",
  fontSize: "1rem",
  fontWeight: 400,
  padding: "1.75rem",
  letterSpacing: "-0.01em",
  lineHeight: "1.3125rem",
  textAlign: "left",
  border: "none",
});

export interface TableProps {
  text: string;
}

const Table: React.FC<TableProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledTable>
        <thead>
          <tr>
            <StyledHeader>Testing1</StyledHeader>
            <StyledHeader>Testing2</StyledHeader>
            <StyledHeader>Testing3</StyledHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledTd>Testing1</StyledTd>
            <StyledTd>Testing1</StyledTd>
            <StyledTd>Testing1</StyledTd>
          </tr>
        </tbody>
      </StyledTable>
    </ThemeProvider>
  );
};

export default Table;
