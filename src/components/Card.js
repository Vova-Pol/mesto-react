function Card(props) {
  return (
    <li className="elements__item" key={props.data._id}>
      <img
        src={props.data.link}
        alt={props.data.name}
        className="elements__image"
      />
      <div className="elements__info">
        <h2 className="elements__title">{props.data.name}</h2>
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
