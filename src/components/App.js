import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <div className="popup" id="popup-edit">
        <form
          className="popup__form"
          name="editProfileForm"
          id="edit-profile-form"
          noValidate
        >
          <h3 className="popup__title">Редактировать профиль</h3>
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
          <button className="popup__save-button" type="submit">
            Сохранить
          </button>
          <button className="popup__close-button" type="button"></button>
        </form>
      </div>

      <div className="popup" id="popup-add-post">
        <form
          className="popup__form"
          name="AddPostForm"
          id="add-post-form"
          noValidate
        >
          <h3 className="popup__title">Новое место</h3>
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
          <button className="popup__save-button" type="submit">
            Создать
          </button>
          <button className="popup__close-button" type="button"></button>
        </form>
      </div>

      <div className="popup popup_dark" id="popup-image">
        <div className="popup__image-container">
          <img src="#" alt="" className="popup__image" />
          <button className="popup__close-button" type="button"></button>
          <p className="popup__subtitle"></p>
        </div>
      </div>

      <div className="popup" id="popup-delete-card">
        <form className="popup__form">
          <h3 className="popup__title popup__title_type_delete">Вы уверены?</h3>
          <button className="popup__save-button" type="submit">
            Да
          </button>
          <button className="popup__close-button" type="button"></button>
        </form>
      </div>

      <div className="popup" id="popup-avatar-image">
        <form className="popup__form">
          <h3 className="popup__title">Обновить аватар</h3>
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
          <button className="popup__save-button" type="submit">
            Сохранить
          </button>
          <button className="popup__close-button" type="button"></button>
        </form>
      </div>
    </div>
  );
}

export default App;
