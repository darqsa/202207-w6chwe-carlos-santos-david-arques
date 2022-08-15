import styled from "styled-components";

const FormContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 30px;
  padding: 15px 30px;
  background-color: #241a3f;
  color: white;
  height: 500px;
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
    }
  }
`;
export { FormContainerStyled };
