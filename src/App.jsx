import { useState } from "react";

import Validation from "./components/validation/validation";
import Card from "./components/card/Card";

import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    name: "",
    band: "",
  });

  const [errors, setErrors] = useState({});
 
  const [cards, setCards] = useState([]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  
    if (values.name == "" || values.band == "") {
      errors("Verifique os campos vazios.");
    } else {
      setCards([...cards, { nome: values.name, banda: values.band }]);
      setValues({
        name: "",
        band: "",
      });
    }
    setErrors([]);
    
  };

  return (
    <div className="container">
      <h1 className="title">Qual sua banda de Rock favorita?</h1>
      <form className='form__container'>
        <div>
          <input
            type="text"
            placeholder="Insira seu nome"
            className="form__input"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <div>{errors.name && <p className="error">{errors.name}</p>}</div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Insira sua banda favorita"
            className="form__input"
            name="band"
            value={values.band}
            onChange={handleChange}
          />
          <div>{errors.band && <p className="error">{errors.band}</p>}</div>
         
        </div>
        <button
          className="btn"
          type="submit"
          value="Adicionar"
          onClick={handleSubmit}
        >Adicionar</button>
      </form>
      <div className="display__card">
        {cards.map((card) => {
          return <Card card={card} />;
        })}
      </div>
    </div>
  );
};

export default App;
