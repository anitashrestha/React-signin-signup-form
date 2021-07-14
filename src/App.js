import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    }
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  //toggle right div state according the user status if they are login or not.
  changeState() {
    const { isLogginActive } = this.state;
    //if login is active, change class of right div 
    if (isLogginActive) {
      this.rightSide.classList.remove('right');
      this.rightSide.classList.add('left');
    } else {
      this.rightSide.classList.remove('left');
      this.rightSide.classList.add('right');
    }

    this.setState(prevState => ({isLogginActive: !prevState.isLogginActive}))
}

  render() {
    const { isLogginActive } = this.state; //spread syntax form ES6
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "Login" : "Register";
     return (
    <div className="App">
         <div className="login">
           <div className="container">
             {/* if login is active  */}
             {isLogginActive && (
               <Login containerRef={(ref) => this.current = ref} />
             )}
             {/* if login is not active */}
             {!isLogginActive && (
               <Register containerRef={(ref) => this.current = ref} />
             )}
           </div>
           <RightSide
             current={current}
             currentActive={currentActive}
             containerRef={(ref) => this.rightSide = ref}
             onClick={this.changeState.bind(this)} />
      </div>
    </div>
  )
  }
 
}

//stateless function component for rightside div to toggle sigin and signup form
const RightSide = props => {
  return (
    <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  )
}

export default App;
