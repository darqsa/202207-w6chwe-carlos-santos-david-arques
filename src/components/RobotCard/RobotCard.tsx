import { RobotContainerStyled } from "./RobotCardStyled";
interface RobotCardProps {
  imageUrl: string;
  name: string;
  speedStat: number;
  strengthStat: number;
  creationDate: string;
}

const RobotCard = ({
  imageUrl,
  name,
  speedStat,
  strengthStat,
  creationDate,
}: RobotCardProps): JSX.Element => {
  return (
    <RobotContainerStyled className="robot-container">
      <div className="robot-container__image-container">
        <img
          className="robot-container__image"
          src={imageUrl}
          alt={`It's just a robot named ${name}`}
          height={150}
          width={150}
        />
      </div>
      <div className="robot-container__info-container">
        <h2 className="robot-container__name">{name}</h2>
        <ul className="robot-container__statistics-list">
          <li className="robot-container__statistic-container">
            <h3 className="robot-container__statistic">Speed: </h3>
            <span className="robot-container__statistic-value">
              {speedStat}
            </span>
          </li>
          <li className="robot-container__statistic-container">
            <h3 className="robot-container__statistic">Strength: </h3>
            <span className="robot-container__statistic-value">
              {strengthStat}
            </span>
          </li>
          <li className="robot-container__statistic-container">
            <h3 className="robot-container__statistic">Creation Date: </h3>
            <span className="robot-container__statistic-value">
              {creationDate}
            </span>
          </li>
        </ul>
      </div>
    </RobotContainerStyled>
  );
};
export default RobotCard;
