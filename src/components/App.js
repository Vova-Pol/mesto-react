import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isAddPlacePopupOpen, setAddPlacePopupIsOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupIsOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupIsOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState();

  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
    _id: "",
    cohort: "",
  });

  React.useEffect(() => {
    const fetchUserData = async () => {
      const userData = await api.requestUserInfo();
      setCurrentUser(userData);
    };
    fetchUserData();
  }, []);

  console.log(currentUser);

  function handleAddPlaceClick() {
    setAddPlacePopupIsOpen(true);
  }

  const handleEditAvatarClick = () => {
    setEditAvatarPopupIsOpen(true);
  };

  function handleEditProfileClick() {
    setEditProfilePopupIsOpen(true);
  }

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
  }

  function closeAllPopups() {
    setAddPlacePopupIsOpen(false);
    setEditAvatarPopupIsOpen(false);
    setEditProfilePopupIsOpen(false);
    setSelectedCard();
  }

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />

          <PopupWithForm
            title="Редактировать профиль"
            name="edit-profile"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            buttonText="Сохранить"
          >
            <input
              type="text"
              placeholder="Имя"
              name="name"
              className="popup__input"
              id="profile-name-input"
              required
              minLength="2"
              maxLength="40"
            />
            <span
              className="popup__input-error"
              id="profile-name-input-error"
            ></span>
            <input
              type="text"
              placeholder="Род деятельности"
              name="about"
              className="popup__input"
              id="profile-occupation-input"
              required
              minLength="2"
              maxLength="200"
            />
            <span
              className="popup__input-error"
              id="profile-occupation-input-error"
            ></span>
          </PopupWithForm>

          <PopupWithForm
            title="Новое место"
            name="add-post"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            buttonText="Создать"
          >
            <input
              type="text"
              placeholder="Название места"
              name="name"
              className="popup__input"
              id="place-name-input"
              required
              minLength="2"
              maxLength="30"
            />
            <span
              className="popup__input-error"
              id="place-name-input-error"
            ></span>
            <input
              type="url"
              placeholder="Ссылка на картинку"
              name="link"
              className="popup__input"
              id="place-link-input"
              required
            />
            <span
              className="popup__input-error"
              id="place-link-input-error"
            ></span>
          </PopupWithForm>

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          <div className="popup" id="popup-delete-card">
            <form className="popup__form">
              <h3 className="popup__title popup__title_type_delete">
                Вы уверены?
              </h3>
              <button className="popup__save-button" type="submit">
                Да
              </button>
              <button className="popup__close-button" type="button"></button>
            </form>
          </div>

          <PopupWithForm
            title="Обновить аватар"
            name="avatar-image"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            buttonText="Сохранить"
          >
            <input
              type="url"
              placeholder="Ссылка на картинку"
              name="avatar"
              className="popup__input"
              id="avatar-link-input"
              required
            />
            <span
              className="popup__input-error"
              id="avatar-link-input-error"
            ></span>
          </PopupWithForm>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
