import '/src/styles/TagLink.scss';
import { Link } from 'react-router-dom';

const TagLink = ({ children, to, variant }) => {
  return (
    <div className={`tagLink ${[variant]}`}>
      <Link 
        to={to} 
        className="link">
        {children}
      </Link>
    </div>
  );
};
export default TagLink;