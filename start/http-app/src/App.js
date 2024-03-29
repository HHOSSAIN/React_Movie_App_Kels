import React, { Component } from "react";
import "./App.css";
import Axios from "axios"; //hasne

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    /*const { data: posts } = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    ); */
    //obj destructuring to pick "data property"
    const { data: posts } = await Axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    console.log("Add");

    const obj = { title: "test", body: "test" };

    //making post to api endpoint
    //as we creating data, we need to add this data in body of the
    //req, so we need to send d obj 2 server
    const { data: post } = await Axios.post(apiEndpoint, obj);
    console.log("added movie= ", post);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = (post) => {
    console.log("Update", post);
  };

  handleDelete = (post) => {
    console.log("Delete", post);
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
