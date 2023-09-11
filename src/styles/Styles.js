import styled, { css } from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  background-color: rgb(20, 136, 204, 0.6);
`;
export const StyledWeather = styled.div`
  padding-block: 1.75rem;
  background: linear-gradient(
    to bottom,
    rgb(43, 50, 178) 0%,
    rgb(20, 136, 204) 100%
  );
  margin: 0 auto;
  border-radius: 10px;
  color: #fff;
`;

export const StyledContainer = styled.div`
  padding-inline: 1rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const variations = {
  large: css`
    font-size: 3rem;
    margin-block: 0.5rem;
  `,
  small: css`
    font-size: 1.5rem;
    letter-spacing: 5px;
  `,
  search: css`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    border: none;
    outline: none;
    border-radius: 50%;
    position: absolute;
    right: 50px;
    top: 0;
    bottom: 0;
    cursor: pointer;
  `,
  primary: css`
    padding: 0.5rem;
    color: #fff;
    background-color: rgb(43, 50, 178);
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: 0 0 5px rgb(0, 0, 0, 0.5);
  `,
};

export const StyledMain = styled.main`
  padding-block-end: 1.75rem;
`;

export const StyledHeading = styled.h1`
  font-weight: 100;
  ${(props) => variations[props.variation]}
`;

export const StyledForm = styled.form`
  flex: 1;
`;

export const StyledSearchInput = styled.input`
  padding: 0.75rem 1rem;
  width: 100%;
  border: none;
  outline: none;
  background-color: whitesmoke;
  border-radius: 10px;
`;

export const StyledBtn = styled.button`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border: none;
  outline: none;
  cursor: pointer;
  ${(props) => variations[props.variation]}
`;
