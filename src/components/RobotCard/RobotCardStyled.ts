import styled from "styled-components";

const RobotContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  .robot-container {
    &__image-container {
      display: flex;
      width: 100%;
      justify-content: center;
      background-color: #917cbb;
      padding: 10px 0;
    }

    &__imgage {
      width: 200px;
    }

    &__info-container {
      background-color: #ebe7dd;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    &__name {
      margin: 0;
      font-size: 1.6em;
      padding-bottom: 5px;
      margin: 0 20px;
    }

    &__statistics-list {
      padding: 0;
      margin: 0 20px;
    }

    &__statistic-container {
      list-style: none;
      margin: 10px 0;
    }

    &__statistic {
      font-size: 1.4em;
      font-weight: 500;
      margin: 0;
    }
    &__statistic-value {
      font-size: 1.3em;
      font-weight: 350;
      margin: 0;
    }
  }
`;
export { RobotContainerStyled };
