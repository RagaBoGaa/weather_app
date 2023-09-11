/* eslint-disable react/prop-types */
import { Col, Row, StyledContainer } from "../styles/Styles";

function Footer({ weatherData, unit }) {
  return (
    <footer>
      <StyledContainer>
        <Row>
          <Row>
            <img src="humidity.png" alt="" />
            <Col>
              <span>{weatherData?.main?.humidity}%</span>
              <span>Humidity</span>
            </Col>
          </Row>
          <Row>
            <img src="wind.png" alt="" />
            <Col>
              <span>
                {Math.ceil(weatherData?.wind?.speed)}
                {unit == "metric" ? " km/h" : " mi/h"}
              </span>
              <span>wind speed</span>
            </Col>
          </Row>
        </Row>
      </StyledContainer>
    </footer>
  );
}
export default Footer;
