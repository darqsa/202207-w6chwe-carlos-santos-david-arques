import { useEffect } from "react";
import useApi from "../../features/robots/hooks/useApi";
import RobotCard from "../RobotCard/RobotCard";
import { ListStyled } from "./CardListStyled";

const CardList = (): JSX.Element => {
  const { robots, loadRobots } = useApi();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <ListStyled className="card-list">
      {robots.map(
        ({
          id,
          image,
          name,
          creationDate,
          owner,
          stats: { speed, strength },
        }) => (
          <li className="card-list__item" key={id}>
            <RobotCard
              imageUrl={image}
              name={name}
              speedStat={speed}
              strengthStat={strength}
              creationDate={creationDate}
              owner={"owner.userName"}
            />
          </li>
        )
      )}
    </ListStyled>
  );
};

export default CardList;
