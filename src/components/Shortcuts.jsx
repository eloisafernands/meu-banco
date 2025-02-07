import CardsShortcuts from './CardsShortcuts';
import '/src/styles/Shortcuts.scss';

const cardsData = [
    { percent: "+23%", title: "Gasto esse mês", value: "R$ 3.547,67"},
    { percent: "+6%", title: "Recebido esse mês", value: "R$ 7.648,48"},
    { tag: "+R$ 242,13 (+2.54%)", title: "Investimentos", value: "R$ 9.532,62"},
    { title: "Cartões", value: "R$ 9.532,62", className: "cardEnd"}
];

const Shortcuts = () => {
    return (
        <div>
            <CardsShortcuts cards={cardsData} />
        </div>
    );
};
export default Shortcuts;