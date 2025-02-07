import CardContainer from '../components/CardContainer';
import ExtractContainer from '../components/ExtractContainer';
import '/src/styles/InfoAccount.scss';

const InfoAccount = () => {
    return(
        <div className="infoAccount">
            <CardContainer />
            <ExtractContainer />
        </div>
    );
}
export default InfoAccount;