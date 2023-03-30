

const CardItem = ({ text, image, label }) => {
    return (
        <li className="cards__item">
            <a href="/services" className="cards__item__link">
                <figure className="cards__item__pic-wrap" data-category={label}>
                    <img src={image} alt="Travel Destination" className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{text}</h5>
                </div>
            </a>
        </li>
    )
}

export default CardItem