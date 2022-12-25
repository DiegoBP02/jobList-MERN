const FormRow = ({
  name,
  labelText,
  type,
  handleChange,
  value,
  label,
  placeholder,
}) => {
  return (
    <div className="form-row">
      {label && (
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
      )}

      <input
        type={type}
        name={name}
        className="form-input"
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
export default FormRow;
