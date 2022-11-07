import "../index.css";

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header__logo"></div>
        <hr className="header__line" />
      </header>
      <main>
        <section className="profile section-sizing">
          <img src="#" alt="аватар профайла" className="profile__picture" />
          <div className="profile__edit-icon-container">
            <span className="profile__edit-icon"></span>
          </div>
          <article className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name">Жак Кусто</h1>
              <p className="profile__occupation">Исследователь океана</p>
            </div>
            <button className="profile__edit-button"></button>
          </article>
          <button className="profile__add-button"></button>
        </section>

        <section className="elements section-sizing">
          <ul className="elements__list">
            <template id="place-card">
              <li className="elements__item">
                <img src="#" alt="" className="elements__image" />
                <div className="elements__info">
                  <h2 className="elements__title"></h2>
                  <div className="elements__like-container">
                    <button className="elements__like-button"></button>
                    <span className="elements__like-counter"></span>
                  </div>
                </div>
                <button className="elements__delete-button"></button>
              </li>
            </template>
          </ul>
        </section>
      </main>

      <footer className="footer section-sizing">
        <p className="footer__text">&copy;2020 Mesto Russia</p>
      </footer>

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
