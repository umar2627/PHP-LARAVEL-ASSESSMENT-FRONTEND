import "./frontend.css";
import { useNavigate } from "react-router-dom";

export default function ReadData({
  entries,
  onDeleteHandler,
  editButtonHandler,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-5">
        {entries.length === 0 ? (
          <div className="alert alert-primary" role="alert">
            No Products Available
          </div>
        ) : (
          entries.map((entry, index) => (
            <div
              key={entry.id}
              className="card my-2"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">Name: {entry.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Price: {entry.price}
                </h6>
                <p className="card-text">Description: {entry.description}</p>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => navigate(`/product/${entry.id}`)}
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={() => editButtonHandler(entry, entry.id)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => onDeleteHandler(entry.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
