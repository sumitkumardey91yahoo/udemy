import React, {Component} from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    console.log(state, "reached")
    return {d: state.todoList}
  }

 //class DisplayList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             dataList: '',
//         }
//     }
    
//    componentWillReceiveProps() {
//        console.log("okk")
//    }
//     render() {

function DisplayList({d}) {
        return (
            <div>
          
               <ul>
                   {d.map((item) => 
                     <li>{item}</li>    
                    )}
               </ul>
               {/* <button type="button" onClick={() => this.props.dispatch({type:"todoData", payload: "123"})}>done</button> */}
            </div>
        )
    }


export default connect (mapStateToProps)(DisplayList)
        
