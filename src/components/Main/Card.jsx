function Card({ title, category, date, theme }) {
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className={`card__theme ${theme}`}>
            <p className={theme}>{category}</p>
          </div>
          <a href="#popBrowse" target="_self">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
        <div className="card__content">
          <a href="" target="_blank">
            <h3 className="card__title">{title}</h3>
          </a>
          <div className="card__date">
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
