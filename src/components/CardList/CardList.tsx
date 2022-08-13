import RobotCard from "../RobotCard/RobotCard";
import { ListStyled } from "./CardListStyled";

const CardList = (): JSX.Element => {
  const testRobots = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/1547/1547183.png",
      name: "test name",
      stats: {
        creationDate: "22-22-2222",
        speed: 2,
        strength: 3,
      },
    },
    {
      image:
        "https://images.vexels.com/media/users/3/201138/isolated/preview/143b8e1550deda3eadf5a8c0045cbb0f-robot-de-juguete-plano.png",
      name: "test name 2",
      stats: {
        creationDate: "22-22-2222",
        speed: 20,
        strength: 30,
      },
    },
  ];
  return (
    <ListStyled className="card-list">
      {testRobots.map((robot) => (
        <li className="card-list__item">
          <RobotCard
            imageUrl={robot.image}
            name={robot.name}
            speedStat={robot.stats.speed}
            strengthStat={robot.stats.strength}
            creationDate={robot.stats.creationDate}
          />
        </li>
      ))}
    </ListStyled>
  );
};
export default CardList;
