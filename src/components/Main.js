function Main(props) {
  return (
    <main>
      <section className="profile section-sizing">
        <img src="#" alt="аватар профайла" className="profile__picture" />
        <div
          className="profile__edit-icon-container"
          onClick={props.onEditAvatar}
        >
          <span className="profile__edit-icon"></span>
        </div>
        <article className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">Жак Кусто</h1>
            <p className="profile__occupation">Исследователь океана</p>
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
  );
}

export default Main;
