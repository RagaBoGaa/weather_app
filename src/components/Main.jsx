/* eslint-disable react/prop-types */
import {
  Col,
  StyledContainer,
  StyledHeading,
  StyledMain,
} from "../styles/Styles";

function Main({ weatherData, unit }) {
  return (
    <StyledMain>
      <StyledContainer>
        <Col>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
            alt=""
          />
          <span>{weatherData?.weather[0]?.description}</span>

          <StyledHeading variation="large">
            {Math.ceil(weatherData?.main?.temp)}
            {/* °{unit == "metric" ? "C" : "F"} */}
            {unit === "metric" ? "°C" : "°F"}
          </StyledHeading>
          <StyledHeading as="h2" variation="small">
            {weatherData?.name}
          </StyledHeading>
        </Col>
      </StyledContainer>
    </StyledMain>
  );
}
export default Main;
