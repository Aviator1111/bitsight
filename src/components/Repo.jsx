import React from "react";
import { connect } from "react-redux";
import { ReposTable } from "./ReposTable";
import { getHotRepos } from "../store/actions";
import "./Repo.css";

const Repos = ({ repos, getRepos }) => {
  return (
    <div>
      <ReposTable title="Git Hub Hot Repos" data={repos} />
      <button id="hot_repo" onClick={getRepos}>
        Refresh Repos
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    repos: state.repos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRepos: () => {
      dispatch(getHotRepos());
    }
  };
};
export const ConnectedRepo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);
