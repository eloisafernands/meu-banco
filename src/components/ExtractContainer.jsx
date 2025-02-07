import '/src/styles/ExtractContainer.scss';
import Button from './Button';
import DateTransaction from './DateTransaction';
import TransactionItem from './TransactionItem';

const transactionData = [
    { estabelecimento: "Bazar Mizutu", forma_pagamento: "Compra no crédito", valor: "R$ 300,00", date: "2025-01-03"},
    { estabelecimento: "Lanchonete Dez", forma_pagamento: "Compra no débito", valor: "R$ 125,00", date: "2025-01-03"},
    { estabelecimento: "Loja Tatame velho", forma_pagamento: "Compra no débito", valor: "R$ 700,00", date: "2025-01-03"},
    { estabelecimento: "Bazar Mizutu", forma_pagamento: "Compra no crédito", valor: "R$ 12,00", date: "2025-01-02"},
    { estabelecimento: "Lanchonete Dez", forma_pagamento: "Compra no débito", valor: "R$ 85,00", date: "2025-01-02"},
    { estabelecimento: "Loja Tatame velho", forma_pagamento: "Compra no débito", valor: "R$ 200,00", date: "2025-01-02"},
    { estabelecimento: "Restaurante Italiano", forma_pagamento: "Compra no débito", valor: "R$ 300,00", date: "2025-01-01"},
];
const uniqueDates = [...new Set(transactionData.map(item => item.date))];

const ExtractContainer = () => {
    return(
        <div className="extractContainer">
            <div className="purchased">
                <h2>Últimas compras</h2>
                <div className="extract">

                    {uniqueDates.map((date) => (
                        <div key={date}>
                            <DateTransaction date={date} />
                            <ul>
                                {transactionData
                                    .filter(item => item.date === date)
                                    .map((transaction, index) => (
                                        <TransactionItem key={index} transaction={transaction} />
                                ))}
                            </ul>
                        </div>
                    ))}                   
                </div>
            </div>
            <Button>Ver Extrato</Button>
        </div>
    );
}
export default ExtractContainer;