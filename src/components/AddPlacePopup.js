import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const inputNameRef = React.useRef();
  const inputLinkRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateCards({
      name: inputNameRef.current.value,
      link: inputLinkRef.current.value,
    });

    inputNameRef.current.value = "";
    inputLinkRef.current.value = "";
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-post"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
        ref={inputNameRef}
      />
      <span className="popup__input-error" id="place-name-input-error"></span>
      <input
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        className="popup__input"
        id="place-link-input"
        required
        ref={inputLinkRef}
      />
      <span className="popup__input-error" id="place-link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
