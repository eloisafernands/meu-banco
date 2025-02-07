import '/src/styles/TransactionItem.scss';

const TransactionItem = ({ transaction }) => {
    return (
        <div className="transactionItem">
            <li>
                <article className="transaction">
                    <div>
                        <h3>{transaction.estabelecimento}</h3>
                        <strong>{transaction.forma_pagamento}</strong>
                    </div>
                    <p className="amount">{transaction.valor}</p>
                </article>                        
            </li>
        </div>
    );
}
export default TransactionItem;