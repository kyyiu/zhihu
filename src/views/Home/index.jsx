import React from "react";
import { connect } from "react-redux";
import actions from "../../store/actions";

function Home(props) {
    console.log(props)
    const {changeInfo} = props
    return <div className="home-c">
        首页
    </div>
}
// state即组合的reducer
// actions.base是一个对象，会自动调用dispatch
// 如果写成一个函数，需要手动在内部调用dispatch
// (disaptch)=>({b: dispatch(action.base)})
export default connect((state)=>({...state}), actions.base)(Home)