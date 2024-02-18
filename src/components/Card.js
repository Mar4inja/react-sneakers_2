function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/like-1.svg" alt="Unlinked" />
      </div>
      <img
        width={133}
        height={112}
        src="/img/sneakers/sneakers-1.jpg"
        alt="Sneakers"
      />
      <h5>Men's Nike Blazer Mid Suede Sneakers </h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>132,47 €</b>
        </div>
        <button className="button">
          <img
            className="plus"
            width={11}
            height={11}
            src="/img/plus.svg"
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
