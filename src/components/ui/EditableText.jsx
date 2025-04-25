import { useState } from "react";
import PropTypes from "prop-types";

const EditableText = ({
  content,
  onUpdate,
  className = "",
  inputClassName = "bg-transparent w-full outline-none border-b border-blue-400 focus:border-blue-600",
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(content);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      onUpdate(value);
    } else if (!isEditing && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setIsEditing(true);
      setValue(content);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate(value);
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className={inputClassName}
        autoFocus
      />
    );
  }

  return (
    <div
      role="button" 
      tabIndex={0} 
      onClick={() => {
        setIsEditing(true);
        setValue(content);
      }}
      onKeyDown={handleKeyDown} 
      className={`cursor-pointer hover:opacity-90 transition duration-200 ${className}`}
    >
      {content}
    </div>
  );
};

EditableText.propTypes = {
  content: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default EditableText;
