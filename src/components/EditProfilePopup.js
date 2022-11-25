import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
      <span className="popup__input-error" id="profile-name-input-error"></span>
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
  );
}

export default EditProfilePopup;
