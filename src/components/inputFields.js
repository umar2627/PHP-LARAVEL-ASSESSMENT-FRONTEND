import { useEffect, useState } from "react";
import "./frontend.css";

export default function InputFields({
  onAddHandler,
  editObj,
  onEditHandler,
  setEditObj,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const addButtonHandler = () => {
    if (
      name.trim() === "" ||
      description.trim() === "" ||
      price.trim() === ""
    ) {
      alert("All fields are required!");
      return;
    }

    const newEntry = { name, description, price };
    onAddHandler(newEntry);

    setName("");
    setDescription("");
    setPrice("");
  };

  const updateButtonHandler = () => {
    if (
      name.trim() === "" ||
      description.trim() === "" ||
      price.trim() === ""
    ) {
      alert("All fields are required!");
      return;
    }

    const newEntry = { name, description, price };
    onEditHandler(newEntry, editObj.index);

    setName("");
    setDescription("");
    setPrice("");
    setEditObj({});
  };

  useEffect(() => {
    setName(editObj?.name || "");
    setDescription(editObj?.description || "");
    setPrice(editObj?.price || "");
  }, [editObj?.name, editObj?.description, editObj?.price]);

  return (
    <>
      <div className="p-3 d-flex flex-column align-items-center">
        <div className="form-group w-50">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group w-50">
          <label htmlFor="name">Description:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            aria-describedby="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group w-50">
          <label htmlFor="name">Price:</label>
          <input
            type="text"
            className="form-control"
            id="price"
            aria-describedby="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="w-50">
          <button
            className="mt-3 btn btn-primary w-100"
            onClick={
              Object.entries(editObj).length
                ? updateButtonHandler
                : addButtonHandler
            }
          >
            {Object.entries(editObj).length ? "UPDATE" : "ADD"}
          </button>
        </div>
      </div>
    </>
  );
}
