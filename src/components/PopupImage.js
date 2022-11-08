function PopupImage() {
  return (
    <div className="popup popup_dark" id="popup-image">
      <div className="popup__image-container">
        <img src="#" alt="" className="popup__image" />
        <button className="popup__close-button" type="button"></button>
        <p className="popup__subtitle"></p>
      </div>
    </div>
  );
}

export default PopupImage;
