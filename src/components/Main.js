function Main() {
  const handleEditAvatarClick = () => {
    const popupEditAvatar = document.querySelector("#popup-avatar-image");
    popupEditAvatar.classList.add("popup_opened");
  };

  const handleEditProfileClick = () => {
    const popupEditProfile = document.querySelector("#popup-edit");
    popupEditProfile.classList.add("popup_opened");
  };

  const handleAddPlaceClick = () => {
    const popupAddPost = document.querySelector("#popup-add-post");
    popupAddPost.classList.add("popup_opened");
  };

  return (
    <main>
      <section className="profile section-sizing">
        <img src="#" alt="аватар профайла" className="profile__picture" />
        <div
          className="profile__edit-icon-container"
          onClick={handleEditAvatarClick}
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
            onClick={handleEditProfileClick}
          ></button>
        </article>
        <button
          className="profile__add-button"
          onClick={handleAddPlaceClick}
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
