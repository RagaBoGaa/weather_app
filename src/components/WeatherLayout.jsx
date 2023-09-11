import { MainWrapper, StyledContainer, StyledWeather } from "../styles/Styles";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Error from "./Error";
import useWeatherData from "../hooks/useWeatherData";

function WeatherLayout() {
  const {
    weatherData,
    error,
    unit,
    setUnit,
    handleSubmit,
    query,
    handleSearch,
  } = useWeatherData();

  return (
    <MainWrapper>
      <StyledWeather>
        <Header
          unit={unit}
          setUnit={setUnit}
          query={query}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
        />

        {error ? (
          <Error error={error} />
        ) : weatherData ? (
          <>
            <Main weatherData={weatherData} unit={unit} />
            <Footer weatherData={weatherData} unit={unit} />
          </>
        ) : (
          <StyledContainer>
            <p style={{ textAlign: "center", marginTop: "15px" }}>
              Type a city name, state or country above!
            </p>
          </StyledContainer>
        )}
      </StyledWeather>
    </MainWrapper>
  );
}
export default WeatherLayout;
