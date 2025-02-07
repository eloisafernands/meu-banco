import '/src/styles/Input.scss';

const Input = ({label, type, value, onChange, autoComplete }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete} 
      />
    </div>
  );
};
export default Input;