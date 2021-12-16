// import React, {Component} from "react";

// class MyName extends Component {
//     static defaultProps = {name:'defaultNm'}
//
//     render() {
//         return (
//             <div>
//                 name :  <b>{this.props.name}</b>
//             </div>
//         )
//     }
// }

const MyName = ({name}) => {

    return (
        <div>
            name_prop : {name}
        </div>
    )
}


export default MyName;