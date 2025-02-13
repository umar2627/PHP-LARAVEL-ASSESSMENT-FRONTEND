import React from "react";
import { useEffect, useState } from "react";
import InputFields from "./inputFields";
import ReadData from "./readData";

const url = "https://0b3c-182-191-113-132.ngrok-free.app/api";

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [editObj, setEditObj] = useState({});

  const onAddHandler = async (newEntry) => {
    try {
      const res = await fetch(`${url}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      });

      const data = await res.json();

      if (data.status === "success") {
        console.log(data);
        // let todo = data.data.saveTodo;
        // setEntries(entries.concat(todo));
        setEntries(entries.concat(newEntry));
      } else {
        alert("Error adding data");
      }
    } catch (error) {
      alert("Error adding data");
    }
  };

  const onEditHandler = async (updateObject, id) => {
    const res = await fetch(`${url}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObject),
    });

    const data = await res.json();

    let newProducts = [...entries];

    for (let index = 0; index < newProducts.length; index++) {
      const element = newProducts[index];

      if (element.id === id) {
        newProducts[index].name = updateObject.name;
        newProducts[index].description = updateObject.description;
        newProducts[index].price = updateObject.price;
        break;
      }
    }

    if (data.status === "success") {
      console.log(data);
      setEntries(newProducts);
    } else {
      alert("Error updating data");
    }
  };

  const onDeleteHandler = async (id) => {
    const res = await fetch(`${url}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let newProduct = entries.filter((product) => {
      return product.id !== id;
    });

    if (res.ok) {
      console.log(res);
      setEntries(newProduct);
    } else {
      alert("Error deleting data");
    }
  };

  const editButtonHandler = (valueObject, index) => {
    setEditObj({ ...valueObject, index });
  };

  const getAllProducts = async () => {
    try {
      const res = await fetch(`${url}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.status === "success") {
        console.log(data);
        // setEntries(data.data.todos);
      } else {
        alert("Error fetching data");
      }
    } catch (error) {
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="body">
      <div className="left-section">
        <InputFields
          onAddHandler={onAddHandler}
          onEditHandler={onEditHandler}
          editObj={editObj}
          setEditObj={setEditObj}
        />
      </div>
      <div className="right-section">
        <ReadData
          entries={entries}
          onDeleteHandler={onDeleteHandler}
          editButtonHandler={editButtonHandler}
        />
      </div>
    </div>
  );
};

export default Home;
