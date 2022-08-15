import React, { useState } from "react";
import useApi from "../../features/robots/hooks/useApi";
import { Robot } from "../../features/robots/models/Robot";

const NewRobot = (): JSX.Element => {
  const { createRobot } = useApi();

  const initialRobot: Robot = {
    name: "",
    image: "",
    creationDate: "",
    stats: {
      speed: 1,
      strength: 1,
    },
  };

  const [newRobot, setNewRobot] = useState(initialRobot);

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewRobot({
      ...newRobot,
      [event.target.id]: event.target.value,
    });
  };

  const createNewRobot = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createRobot(newRobot);

    setNewRobot(initialRobot);
  };

  const hasEmptyFields = newRobot.name === "" || newRobot.image === "";

  return (
    <>
      <h2>New Robot</h2>
      <form autoComplete="off" onSubmit={createNewRobot} noValidate>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={newRobot.name}
            onChange={onChangeField}
            required
          />
          <label htmlFor="image">Image: </label>
          <input
            type="url"
            id="image"
            value={newRobot.image}
            onChange={onChangeField}
            required
          />
          <label htmlFor="speed">Speed: </label>
          <input
            type="number"
            id="speed"
            value={newRobot.stats.speed}
            onChange={onChangeField}
            required
          />
          <label htmlFor="image">Strength: </label>
          <input
            type="number"
            id="strength"
            value={newRobot.stats.strength}
            onChange={onChangeField}
            required
          />
          <label htmlFor="date">Creation Date: </label>
          <input
            type="text"
            id="date"
            value={newRobot.creationDate}
            onChange={onChangeField}
          />
          <button type="submit" disabled={hasEmptyFields}>
            Create
          </button>
        </div>
      </form>
    </>
  );
};
export default NewRobot;
