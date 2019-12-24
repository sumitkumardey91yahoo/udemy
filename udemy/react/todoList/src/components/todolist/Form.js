import React, {Component} from 'react';

import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => {
    console.log("dispatch", dispatch)
    return {
        addData: (payload) => {
            return dispatch({
                type: 'todoData',
                payload
            })
        }
    }
}

const mapStateToProps = (state) => {
    console.log("state from", "reached")
    return {d: state.todoList}
  }


 class Form extends Component {
    constructor() {
        super();
        this.state = {
            txt: '',
        }
    }
    handleTxt(e) {
        this.setState({
            txt: e.target.value
        })
    }
    submitData(e) {
        e.preventDefault()
        this.props.addData(this.state.txt)
       // console.log("this.props", this.props)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitData.bind(this)}>
                    <input type="text" value={this.state.txt} onChange={this.handleTxt.bind(this)}></input>
                    <button type="submit" value="ok">ADD</button>
                </form>
                {/* <h1>{this.props.d}</h1> */}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Form)
        
