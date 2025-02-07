import '/src/styles/Button.scss';

const Button = ({children, type = ''}) => {
  return (    
    <button
      className="button"
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;