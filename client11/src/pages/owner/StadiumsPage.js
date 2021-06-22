import React from "react";
import { connect } from "react-redux";
import * as staduimActions from "../../redux/actions/stadiumAction";

import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import Spinner from "../../common/Spinner";
import { toast } from "react-toastify";
import StaduimList from './stadiumList';

class StadiumsPage extends React.Component {
  state = {
    redirectToAddStaduimPage: false,
  };

  componentDidMount() {
    const { staduims, authors, actions } = this.props;

    if (staduims?.length === 0) {
      actions.loadstadiums().catch((error) => {
        alert("Loading staduims failed" + error);
      });
    }
};
    

  handleDeleteStaduim = async (staduim) => {
    toast.success("Staduim deleted");
    try {
      await this.props.actions.deletestadium(staduim);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddStaduimPage && <Redirect to="/staduim" />}
        <h2>Staduims</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-staduim"
              onClick={() => this.setState({ redirectToAddStaduimPage: true })}
            >
              Add Staduim
            </button>

            <StaduimList
              onDeleteClick={this.handleDeleteStaduim}
              staduims={this.props?.staduims}
            />
          </>
        )}
      </>
    );
  }
    };

StadiumsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  staduims: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    staduims:state.staduims,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadstadiums: bindActionCreators(staduimActions.loadstadiums, dispatch),
      deletestadium: bindActionCreators(staduimActions.deletestadium, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StadiumsPage);



