import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadStadiumss, saveStadiums } from "../../redux/actions/stadiumsActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import StadiumsForm from "./StadiumsForm";
import { newStadiums } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageStadiumsPage({
  stadiumss,
  authors,
  loadAuthors,
  loadStadiumss,
  saveStadiums,
  history,
  ...props
}) {
  const [stadiums, setStadiums] = useState({ ...props.stadiums });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (stadiumss.length === 0) {
      loadStadiumss().catch(error => {
        alert("Loading stadiumss failed" + error);
      });
    } else {
      setStadiums({ ...props.stadiums });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.stadiums]);

  function handleChange(event) {
    const { name, value } = event.target;
    setStadiums(prevStadiums => ({
      ...prevStadiums,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { title, authorId, category } = stadiums;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!authorId) errors.author = "Author is required";
    if (!category) errors.category = "Category is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveStadiums(stadiums)
      .then(() => {
        toast.success("Stadiums saved.");
        history.push("/stadiumss");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return authors.length === 0 || stadiumss.length === 0 ? (
    <Spinner />
  ) : (
    <StadiumsForm
      stadiums={stadiums}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageStadiumsPage.propTypes = {
  stadiums: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  stadiumss: PropTypes.array.isRequired,
  loadStadiumss: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveStadiums: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getStadiumsBySlug(stadiumss, slug) {
  return stadiumss.find(stadiums => stadiums.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const stadiums =
    slug && state.stadiumss.length > 0
      ? getStadiumsBySlug(state.stadiumss, slug)
      : newStadiums;
  return {
    stadiums,
    stadiumss: state.stadiumss,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadStadiumss,
  loadAuthors,
  saveStadiums
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageStadiumsPage);
