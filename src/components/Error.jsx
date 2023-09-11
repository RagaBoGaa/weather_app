/* eslint-disable react/prop-types */
import { Col, StyledContainer, StyledHeading } from "../styles/Styles";

function Error({ error }) {
  return (
    <StyledContainer>
      <Col>
        <StyledHeading
          as="h3"
          variation="small"
          style={{ marginBlock: "10px", textTransform: "uppercase" }}
        >
          {error}⛔
        </StyledHeading>
        <StyledHeading as="h4" variation="small">
          Check city name!
        </StyledHeading>
      </Col>
    </StyledContainer>
  );
}
export default Error;
