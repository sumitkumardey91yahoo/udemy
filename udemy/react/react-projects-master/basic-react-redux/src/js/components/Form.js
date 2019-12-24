import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import PropTypes from "prop-types";
import { addArticle } from "../actions/index";

// Dispatch action to add to store
const mapDispatchToProps = dispatch => {
    return {
        addArticle1: (article) => {
            return dispatch(addArticle(article))
        },
        clickmeOnly: (data) => {
            return dispatch({
                type: "sumit-kumar-dey",
                payload: data
            })
        } 
    };
};

// Form component
class ConnectedForm extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    clickme() {
      this.props.clickmeOnly("sum 50001");
    }
    handleSubmit(e) {
        e.preventDefault();        
        const { title } = this.state;
        const id = uuidv1();        
        this.props.addArticle1({ 
            title, 
            id 
        });
        this.setState({
            title: ""
        })
    }

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
                <button type="button" className="btn btn-success btn-lg" onClick={this.clickme.bind(this)}>
                    ok
                </button>
            </form>
        );
    }
}

// Wire it up together and export
const Form = connect(null, mapDispatchToProps)(ConnectedForm);


export default Form;