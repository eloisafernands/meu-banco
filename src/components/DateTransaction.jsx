import '/src/styles/DateTransaction.scss';

const DateTransaction = ({ date }) => {
    const formatDate = (dateStr) => {
        const options = { day: '2-digit', month: 'short' };
        let formattedDate = new Date(dateStr).toLocaleDateString('pt-BR', options);

        return formattedDate.replace(' de ', '/');
    };

    return( 
        <div className="date">
            <span>{formatDate(date)}</span>
        </div>
    );
}

export default DateTransaction;