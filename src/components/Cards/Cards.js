import CardItem from "./CardItem"
import "./cards.css"
import cardsData from "./cardsData"

const Cards = () => {
    return (
        <div className="cards">
            <h2>Check Out these EPIC Destinations!</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {
                            cardsData.map(item => <CardItem key={item.id} {...item} />)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards