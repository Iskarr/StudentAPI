import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

import "react-table/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

class UpdateInstructor extends Component {
  updateUser = event => {
    event.preventDefault();

    window.location.href = `/instructors/update/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Update</Update>;
  }
}

class DeleteInstructor extends Component {
  deleteUser = event => {
    event.preventDefault();

    if (
      window.confirm(
        `Do you want to delete the Instructor ${this.props.id} permanently?`
      )
    ) {
      api.deleteInstructorById(this.props.id);
      window.location.reload();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>;
  }
}

class InstructorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [],
      columns: [],
      isLoading: false
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllInstructors().then(instructors => {
      this.setState({
        instructors: instructors.data.data,
        isLoading: false
      });
    });
  };

  render() {
    const ReactTable = require("react-table").default;
    const { instructors, isLoading } = this.state;
    console.log("TCL: InstructorsList -> render -> instructors", instructors);

    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true
      },
      {
        Header: "Rating",
        accessor: "rating",
        filterable: true
      },
      {
        Header: "course",
        accessor: "course",
        filterable: true
      },
      {
        Header: "role",
        accessor: "role",
        filterable: true
      },
      {
        Header: "Time",
        accessor: "time",
        Cell: props => <span>{props.value.join(" / ")}</span>
      },
      {
        Header: "",
        accessor: "",
        Cell: function(props) {
          return (
            <span>
              <DeleteInstructor id={props.original._id} />
            </span>
          );
        }
      },
      {
        Header: "",
        accessor: "",
        Cell: function(props) {
          return (
            <span>
              <UpdateInstructor id={props.original._id} />
            </span>
          );
        }
      }
    ];

    let showTable = true;
    if (!instructors.length) {
      showTable = false;
    }

    return (
      <Wrapper>
        {showTable && (
          <ReactTable
            data={instructors}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
          />
        )}
      </Wrapper>
    );
  }
}

export default InstructorList;
