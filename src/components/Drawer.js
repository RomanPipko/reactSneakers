function Drawer() {
  return(
    <div style={{display: 'none'}} className="overlay">
    <div className="drawer">
      <h2 className="mb-30 d-flex justify-between">Корзина <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"></img>
</h2>
      <div className="items">
        <div className="cartItem d-flex align-center mb-20">
          <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"></img>
          <div className="mr-20">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"></img>
        </div>

        <div className="cartItem d-flex align-center mb-20">
          <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"></img>
          <div className="mr-20">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"></img>
        </div>

        <div className="cartItem d-flex align-center mb-20">
          <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"></img>
          <div className="mr-20">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"></img>
        </div>
      </div>
      <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб.</b>
          </li>

          <li>
            <span>Налог 5%</span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"></img></button>
      </div>

    </div>

  </div>

  )
}

export default Drawer;
