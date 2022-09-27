import styles from './Card.module.scss'


function Card(props) {
  return(
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked"></img>
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers"></img>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center"> 
        <div className="d-flex flex-column">
          <p>Цена</p>
          <b>{props.price}</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
  );
}

export default Card;