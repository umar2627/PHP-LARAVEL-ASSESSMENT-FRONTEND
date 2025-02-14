import React from "react";
import { useEffect, useState } from "react";
import InputFields from "./inputFields";
import ReadData from "./readData";

export const url = "http://127.0.0.1:8000/api";

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
      console.log(data);
      setEntries(entries.concat(data));
    } catch (error) {
      alert("Error adding data");
    }
  };

  const onEditHandler = async (updateObject, id) => {
    try {
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
      console.log(data);
      setEntries(newProducts);
    } catch (error) {
      console.log(error);
      alert("Error updating data");
    }
  };

  const onDeleteHandler = async (id) => {
    try {
      const res = await fetch(`${url}/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let newProduct = entries.filter((product) => {
        return product.id !== id;
      });
      if (!res.ok) {
        console.log(res);
        alert("Error deleting data");
      } else {
        console.log(res);
        setEntries(newProduct);
      }
    } catch (error) {
      console.log(error);

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
      setEntries(data);
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
