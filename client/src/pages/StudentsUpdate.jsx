import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1"
})``;

const Wrapper = styled.div.attrs({
  className: "form-group"
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control"
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`
})`
  margin: 15px 15px 15px 5px;
`;

class StudentsUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      rating: "",
      time: "",
      course: "",
      enrolled: "",
      progress: ""
    };
  }

  handleChangeInputName = async event => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleChangeInputRating = async event => {
    const rating = event.target.validity.valid
      ? event.target.value
      : this.state.rating;

    this.setState({ rating });
  };

  handleChangeInputTime = async event => {
    const time = event.target.value;
    this.setState({ time });
  };
  handleChangeInputCourse = async event => {
    const course = event.target.value;
    this.setState({ course });
  };

  handleChangeInputEnrolled = async event => {
    const enrolled = event.target.value;
    this.setState({ enrolled });
  };

  handleChangeInputProgress = async event => {
    const progress = event.target.validity.valid
      ? event.target.value
      : this.state.progress;

    this.setState({ progress });
  };

  handleUpdateStudent = async () => {
    const { id, name, rating, time, course, enrolled, progress } = this.state;
    const arrayTime = time.split("/");
    const payload = {
      name,
      rating,
      time: arrayTime,
      course,
      enrolled,
      progress
    };

    await api.updateStudentById(id, payload).then(res => {
      window.alert(`Student updated successfully`);
      this.setState({
        name: "",
        rating: "",
        time: "",
        course: "",
        enrolled: "",
        progress: ""
      });
    });
    window.location.assign("/students/list");
  };

  componentDidMount = async () => {
    const { id } = this.state;
    const student = await api.getStudentById(id);

    this.setState({
      name: student.data.data.name,
      rating: student.data.data.rating,
      time: student.data.data.time.join("/"),
      course: student.data.data.course,
      enrolled: student.data.data.enrolled,
      progress: student.data.data.progress
    });
  };

  render() {
    const { name, rating, time, course, enrolled, progress } = this.state;
    return (
      <Wrapper>
        <Title>Create Student</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Rating: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          min="0"
          max="10"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={rating}
          onChange={this.handleChangeInputRating}
        />

        <Label>Time: </Label>
        <InputText
          type="text"
          value={time}
          onChange={this.handleChangeInputTime}
        />

        <Label>Course: </Label>
        <InputText
          type="text"
          value={course}
          onChange={this.handleChangeInputCourse}
        />

        <Label>enrolled: </Label>
        <InputText
          type="text"
          value={enrolled}
          onChange={this.handleChangeInputEnrolled}
        />

        <Label>Progress: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          min="0"
          max="100"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={progress}
          onChange={this.handleChangeInputProgress}
        />

        <Button onClick={this.handleUpdateStudent}>Update Student</Button>
        <CancelButton href={"/students/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default StudentsUpdate;
