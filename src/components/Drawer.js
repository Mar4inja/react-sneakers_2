function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Basket
          <img className="cu-p" src="/img/close.svg" alt="Remove" />
        </h2>

        <div className="items">
          <div className="basketItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/sneakers-1.jpg)" }}
              className="basketItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Men's Nike Blazer Mid Suede Sneakers</p>
              <b>132,47 €</b>
            </div>
            <img className="removeBtn" src="/img/close.svg" alt="Remove" />
          </div>

          <div className="basketItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(/img/sneakers/sneakers-4.jpg)" }}
              className="basketItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">
                Men's Puma X Aka Boku Future Rider Sneakers
              </p>
              <b>89,99 €</b>
            </div>

            <img className="removeBtn" src="/img/close.svg" alt="Remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>219,51 €</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>10,97 €</b>
            </li>
          </ul>
          <button className="greenButton">
            Checkout order <img src="/img/arrow-next.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
