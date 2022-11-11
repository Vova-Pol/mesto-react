import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userOccupation, setUserOccupation] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .requestUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserOccupation(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.error(err);
      });

    api
      .requestInitialCards()
      .then((cardsArr) => {
        setCards(cardsArr);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main>
      <section className="profile section-sizing">
        <img
          src={userAvatar}
          alt="аватар профайла"
          className="profile__picture"
        />
        <div
          className="profile__edit-icon-container"
          onClick={props.onEditAvatar}
        >
          <span className="profile__edit-icon"></span>
        </div>
        <article className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__occupation">{userOccupation}</p>
          </div>
          <button
            className="profile__edit-button"
            onClick={props.onEditProfile}
          ></button>
        </article>
        <button
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements section-sizing">
        <ul className="elements__list">
          {cards.map((cardData) => (
            <Card
              cardData={cardData}
              key={cardData._id}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
