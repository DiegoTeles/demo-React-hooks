import React, { useState, useEffect } from "react";

const ComHooks = () => {
  const [values, setValues] = useState({ name: "" });
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [ammount, setAmmount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setName("Diego Telles");
  }, [isActive]);

  const handleClick = (event) => {
    event.preventDefault();

    setAmmount(ammount + 1);
    setIsActive(true);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setItems([...items, values.name]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Meu nome é: {name}
        Minha contagem: {ammount}
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        <button type="submit">Salvar</button>
        <div>
          {items.map((item, index) => {
            console.log("item :", item);
            return (
              <div key={index}>
                <b>{item}</b>
              </div>
            );
          })}
        </div>
        <button onClick={handleClick}> Clique aqui</button>
      </form>
    </div>
  );
};

export default ComHooks;
