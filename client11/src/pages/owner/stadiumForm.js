import React from "react";
import PropTypes from "prop-types";
import TextInput from "../../common/TextInput";


const StaduimForm = ({
  staduim,
 
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{staduim.id ? "Edit" : "Add"} Staduim</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={staduim.title}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="description"
        label="description"
        value={staduim.description}
        onChange={onChange}
        error={errors.description}
      />

      <TextInput
        name="Image"
        label="Image"
        value={staduim.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

StaduimForm.propTypes = {
 
  staduim: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default StaduimForm;
