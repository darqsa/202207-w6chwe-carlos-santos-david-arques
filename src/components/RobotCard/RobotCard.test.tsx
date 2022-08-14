import { render, screen } from "@testing-library/react";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When invoked and receives a fakeRobot", () => {
    const fakeRobot = {
      image: "https://cdn-icons-png.flaticon.com/512/1547/1547183.png",
      name: "testName",
      stats: {
        creationDate: "22-22-2222",
        speed: 2,
        strength: 3,
      },
    };

    test("Then it should render a fakeRobot img", () => {
      render(
        <RobotCard
          creationDate=""
          imageUrl={fakeRobot.image}
          name=""
          speedStat={1}
          strengthStat={1}
        />
      );

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should render the fakeRobot's name", () => {
      render(
        <RobotCard
          creationDate=""
          imageUrl=""
          name={fakeRobot.name}
          speedStat={1}
          strengthStat={1}
        />
      );

      const expectedName = screen.getByRole("heading", {
        name: `${fakeRobot.name}`,
      });

      expect(expectedName).toBeInTheDocument();
    });

    test("Then it should render the fakeRobot's speed statistic", () => {
      render(
        <RobotCard
          creationDate=""
          imageUrl=""
          name=""
          speedStat={1}
          strengthStat={2}
        />
      );

      const expectedSpeedStat = screen.getByText(1);

      expect(expectedSpeedStat).toBeInTheDocument();
    });
  });
});
