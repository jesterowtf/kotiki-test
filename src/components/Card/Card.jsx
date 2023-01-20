import React, {useRef, useState} from 'react';
import './card.css';
import kotik from "../../assets/images/kotik.png";


const Card = ({...card}) => {
  const [selected, setSelected] = useState(card.selected)
  const [text, setText] = useState(card.header)

  const availableStock = !!card.count;

  let cardStyle = !availableStock ? 'card cardDisabled' : (selected ? 'card cardSelected' : 'card');
  let cardTitle = selected ? 'card__header--title selected' : 'card__header--title';

  const cardRef = useRef();

  const selectCard = () => {
    if (!availableStock) {
      setSelected(false)
    } else {
      setSelected(prev => !prev )

      if (!selected && cardRef.current) {
        cardRef.current.classList.add('no-hover')
      }
    }
  }

  const onSelectedHover = () => {
    if (selected) {
      setText("Котэ не одобряет?")
    } else {
      setText(card.header)
    }
  }

  const onSelectedMouseLeave = () => {
      setText(card.header)
    if (cardRef.current && cardRef.current.classList.contains('no-hover')) {
      cardRef.current.classList.remove('no-hover')
    }
  }

  return (
    <div className="card__wrapper" ref={cardRef}>
      <div className={cardStyle}  onClick={selectCard} onMouseEnter={onSelectedHover} onMouseLeave={onSelectedMouseLeave} >
        <div className="card__header">
          <div className="card__info">
          <p className={cardTitle}>{text}</p>
            <p className="card__info--name">{card.name}</p>
            <p className="card__info--with">c {card.with}</p>
            <p className="card__info--p"><b>{card.portion.match(/^\d+/)}</b>  {card.portion.match(/\D+/)}</p>
            <p className="card__info--p"><b>{card.presents.match(/^\d+/)}</b>  {card.presents.match(/\D+/)}</p>
            <p className="card__info--p">{card.description}</p>
          </div>
        </div>

        <div className="card__footer">
          <img className="card__image" src={kotik} alt={card.selectedText}/>
        </div>
        <p className="card__size">{card.size} <span>кг</span></p>
      </div>
      {!availableStock && <div className="card__underText underText__nope">{`Печалька, с ${card.with} закончился`}</div>}
      {selected && <div className="card__underText">{card.selectedText}</div>}
      {availableStock && !selected && <div className="card__underText">Чего сидишь? Порадуй котэ, <p onClick={selectCard}><span>купи</span>.</p></div>}
    </div>
  );
};

export default Card;