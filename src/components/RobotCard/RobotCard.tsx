import { RobotContainerStyled } from "./RobotCardStyled";

const RobotCard = (): JSX.Element => {
  return (
    <RobotContainerStyled className="robot-container">
      <div className="robot-container__image-container">
        <img
          className="robot-container__image"
          src="https://cdn-icons-png.flaticon.com/512/1547/1547183.png"
          alt=""
          height={150}
          width={150}
        />
      </div>
      <div className="robot-container__info-container">
        <h2 className="robot-container__name">{"Robot Name"}</h2>
        <ul className="robot-container__statistics-list">
          <li className="robot-container__statistic-container">
            <h3 className="robot-container__statistic">Speed: </h3>
            <span className="robot-container__statistic-value">{"5"}</span>
          </li>
          <li className="robot-container__statistic-container">
            <h3 className="robot-container__statistic">Strength: </h3>
            <span className="robot-container__statistic-value">{"6"}</span>
          </li>
          <li className="robot-container__statistic-container">
            <h3 className="robot-container__statistic">Creation Date: </h3>
            <span className="robot-container__statistic-value">
              {"22-2-2022"}
            </span>
          </li>
        </ul>
      </div>
    </RobotContainerStyled>
  );
};
export default RobotCard;
