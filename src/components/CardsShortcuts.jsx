import '/src/styles/CardsShortcuts.scss';
import TitleDefault from './titleDefault';

const CardsShortcuts = ({ cards }) => {
    return (
        <div className="cardsShortcuts">
            {cards.map((card, index) => (
                <div key={index} className={`card ${card.className || ''}`}>
                    {card.tag && <span className="spanTag">{card.tag}</span>}
                    {card.percent && <span className="percentTag">{card.percent}</span>}
                    <TitleDefault 
                        title={card.title}
                        subtitle={card.value}
                    />
                </div>
            ))}
            <div className="card divAddShortcuts">
                <span className="spanShortcuts">+</span>
                <p>configurar<br />atalhos</p>
            </div>
        </div>
    );
};

export default CardsShortcuts;
