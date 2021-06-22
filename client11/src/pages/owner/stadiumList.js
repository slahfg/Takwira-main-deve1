import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StaduimList = ({ staduims, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {staduims?.map((staduim) => {
        return (
          <tr key={staduim.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://pluralsight.com/staduims/" + staduim.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/staduim/" + staduim.slug}>{staduim.title}</Link>
            </td>
            <td>{staduim.authorName}</td>
            <td>{staduim.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(staduim)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

StaduimList.propTypes = {
  staduims: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default StaduimList;
