import styled from "styled-components";

const FormContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 30px;
  padding: 15px 30px;
  background-color: #241a3f;
  color: white;
  height: 100%;
  width: 100%;
  padding-bottom: 50px;
  .form-container {
    &__title {
      font-size: 2.2em;
    }
    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      gap: 30px;
    }
    &__item-label {
      font-size: 1.4em;
    }
    &__item {
      background-color: white;
      border: none;
      margin-top: 5px;
      padding: 10px 20px;
      font-size: 1.2em;
      width: 100%;
      border-radius: 5px;
    }
    &__button {
      border: 1px solid white;
      width: 30%;
      align-self: center;
      background-color: white;
      font-size: 1.4em;
      border-radius: 5px;
      padding: 10px 0;
      cursor: pointer;
      color: black;
      transition: 0.2s;

      &:hover {
        background-color: #241a3f;
        color: white;
      }
      &:disabled {
        opacity: 30%;
        cursor: default;
        &:hover {
          background-color: white;
          color: black;
        }
      }
    }
  }
`;
export { FormContainerStyled };
