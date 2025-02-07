import '/src/styles/CardContainer.scss';
import Button from './Button';
import TitleDefault from './titleDefault';

const CardContainer = () => {
    return(
        <div className="cardContainer">
            <div className="cards">
                <h2>Cartões</h2>
                <div className="imageCard">
                    <img src="/src/assets/Card.png" alt="Card" />
                    <div className="progressCard">
                        <div className="progressBar"></div>
                        <div>
                            <p>R$ 300/3.000</p>
                            <p>Limite mensal</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="historic">
                <div className="limit">
                    <TitleDefault 
                        title="Limite disponível"
                        subtitle="R$ 3.000,00"
                    />
                </div>
                <div className="purchased">
                    <div>
                        <h2>Ultima compra</h2>
                        <h3>Bazar Mituzi</h3>
                    </div>                
                    <h3>R$ 300,00</h3>                
                </div>
                <Button>Mais Detalhes</Button>
            </div>
        </div>
    );
}
export default CardContainer;