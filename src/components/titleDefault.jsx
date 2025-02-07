import '/src/styles/titleDefault.scss';

const TitleDefault = ({ title, subtitle }) => {
    return (
        <div className="titleDefault">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
    );
}
export default TitleDefault;