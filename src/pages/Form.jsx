import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form({ initialEntry, handleSubmit, buttonLable }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialEntry);
  const handleChnage = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmission = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmission}>
      <label>
        <input
          type="text"
          onChange={handleChnage}
          value={formData.value}
          name="title"
        />
      </label>
      <label>
        <input
          type="text"
          onChange={handleChnage}
          value={formData.value}
          name="body"
        />
      </label>
      <input type="submit" value={buttonLable} />
    </form>
  );
}
export default Form;
