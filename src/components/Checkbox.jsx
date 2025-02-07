import '/src/styles/Checkbox.scss';

const Checkbox = ({label, checked, onChange, name, id}) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox" 
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}        
      />
      <label htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
export default Checkbox;