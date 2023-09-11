/* eslint-disable react/prop-types */
import {
  Row,
  StyledBtn,
  StyledContainer,
  StyledForm,
  StyledSearchInput,
} from "../styles/Styles";

function Header({ unit, setUnit, handleSubmit, query, handleSearch }) {
  function toggleTemperatureUnit() {
    setUnit(unit === "metric" ? "imperial" : "metric");
  }

  return (
    <header>
      <StyledContainer>
        <Row>
          <StyledForm onSubmit={handleSubmit}>
            <StyledSearchInput
              type="search"
              placeholder="Type a city name..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)} // Handle input change
            />
            <StyledBtn variation="search" type="submit">
              <img src="search.png" alt="search icon" />
            </StyledBtn>
          </StyledForm>
          <StyledBtn variation="primary" onClick={toggleTemperatureUnit}>
            {unit === "metric" ? "°F" : "°C"}
          </StyledBtn>
        </Row>
      </StyledContainer>
    </header>
  );
}
export default Header;
