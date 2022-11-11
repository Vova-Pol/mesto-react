function Card(props) {
  function handleClick() {
    props.onCardClick(props.cardData);
  }
  return (
    <li className="elements__item" key={props.cardData._id}>
      <img
        src={props.cardData.link}
        alt={props.cardData.name}
        className="elements__image"
        onClick={handleClick}
      />
      <div className="elements__info">
        <h2 className="elements__title">{props.cardData.name}</h2>
        <div className="elements__like-container">
          <button className="elements__like-button"></button>
          <span className="elements__like-counter"></span>
        </div>
      </div>
      <button className="elements__delete-button"></button>
    </li>
  );
}

export default Card;
