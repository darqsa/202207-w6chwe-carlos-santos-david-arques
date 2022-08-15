import React, { useState } from "react";
import useApi from "../../features/robots/hooks/useApi";
import { Robot } from "../../features/robots/models/Robot";
import { FormContainerStyled } from "./FormStyled";

const NewRobot = (): JSX.Element => {
  const { createRobot } = useApi();

  const initialRobot: Robot = {
    name: "",
    image: "",
    creationDate: "",
    stats: {
      speed: 0,
      strength: 0,
    },
  };

  const [newRobot, setNewRobot] = useState(initialRobot);

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === "number") {
      setNewRobot({
        ...newRobot,
        stats: { ...newRobot.stats, [event.target.id]: event.target.value },
      });
    } else {
      setNewRobot({
        ...newRobot,
        [event.target.id]: event.target.value,
      });
    }
  };

  const createNewRobot = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createRobot(newRobot);

    setNewRobot(initialRobot);
  };

  const hasEmptyFields =
    newRobot.name === "" ||
    newRobot.image === "" ||
    newRobot.creationDate === "" ||
    newRobot.stats.speed === 0 ||
    newRobot.stats.strength === 0;

  return (
    <>
      <FormContainerStyled className="form-container">
        <h2 className="form-container__title">Create Your Robot</h2>
        <form
          className="form-container__form"
          autoComplete="off"
          onSubmit={createNewRobot}
          noValidate
        >
          <div className="form-container__item-container">
            <label className="form-container__item-label" htmlFor="name">
              Name:{" "}
            </label>
            <input
              className="form-container__item"
              type="text"
              id="name"
              value={newRobot.name}
              onChange={onChangeField}
              required
            />
          </div>
          <div className="form-container__item-container">
            <label htmlFor="image" className="form-container__item-label">
              Image:{" "}
            </label>
            <input
              className="form-container__item"
              type="url"
              id="image"
              value={newRobot.image}
              onChange={onChangeField}
              required
            />
          </div>
          <div className="form-container__item-container">
            <label htmlFor="speed" className="form-container__item-label">
              Speed:{" "}
            </label>
            <input
              className="form-container__item"
              type="number"
              id="speed"
              value={newRobot.stats.speed}
              onChange={onChangeField}
              required
              max={10}
              min={1}
            />
          </div>
          <div className="form-container__item-container">
            <label htmlFor="image" className="form-container__item-label">
              Strength:{" "}
            </label>
            <input
              className="form-container__item"
              type="number"
              id="strength"
              value={newRobot.stats.strength}
              onChange={onChangeField}
              required
              max={10}
              min={1}
            />
          </div>
          <div className="form-container__item-container">
            <label
              htmlFor="creationDate"
              className="form-container__item-label"
            >
              Creation Date:{" "}
            </label>
            <input
              className="form-container__item"
              type="text"
              id="creationDate"
              value={newRobot.creationDate}
              onChange={onChangeField}
            />
          </div>
          <button
            className="form-container__button"
            type="submit"
            disabled={hasEmptyFields}
          >
            Create
          </button>
        </form>
      </FormContainerStyled>
    </>
  );
};
export default NewRobot;
