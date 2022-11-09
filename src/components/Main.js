import React from "react";
import api from "../utils/api.js";

function Main(props) {
  console.log("Main rendered starts");

  const [userName, setUserName] = React.useState();
  const [userOccupation, setUserOccupation] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    console.log("useEffect 0");
    api
      .requestUserInfo()
      .then((userData) => {
        console.log("api user 0");
        setUserName(userData.name);
        setUserOccupation(userData.about);
        setUserAvatar(userData.avatar);
        console.log("api user 1");
      })
      .catch((err) => {
        console.error(err);
      });

    api
      .requestInitialCards()
      .then((cardsArr) => {
        console.log("api cards 0");
        setCards(cardsArr);
        console.log("api cards 1");
      })
      .catch((err) => {
        console.error(err);
      });
    console.log("useEffect 1");
  }, []);

  console.log("Main rendered finished");
  console.log(cards);
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
            <li className="elements__item" key={cardData._id}>
              <img
                src={cardData.link}
                alt={cardData.name}
                className="elements__image"
              />
              <div className="elements__info">
                <h2 className="elements__title">{cardData.name}</h2>
                <div className="elements__like-container">
                  <button className="elements__like-button"></button>
                  <span className="elements__like-counter"></span>
                </div>
              </div>
              <button className="elements__delete-button"></button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
