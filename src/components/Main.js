import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api
      .requestInitialCards()
      .then((cardsArr) => {
        setCards(cardsArr);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    api
      .changeLikeCardStatus(card, isLiked, currentUser)
      .then((newCard) => {
        setCards(
          cards.map((card) => {
            return card._id === newCard._id ? newCard : card;
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCardDelete(card) {
    api
      .changeDeleteCardStatus(card)
      .then(() => {
        setCards(cards.filter((elem) => elem._id !== card._id));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <main>
      <section className="profile section-sizing">
        <img
          src={currentUser.avatar}
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
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__occupation">{currentUser.about}</p>
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
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
