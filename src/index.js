import React  from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner  from "./Spinner";
class App extends React.Component{
    state = {lat: null, errorMessage: ''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage:err.message})
        )
    }
    renderContent(){
        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if(!this.state.lat && this.state.errorMessage){
            return <div><h1>Error: {this.state.errorMessage}</h1> </div>
        }
        return<Spinner text="Please allow us to access your location" />
    }
    //React says we have to define render
    render(){
        return <div>{this.renderContent()}</div>
    }
}
ReactDom.render(
    <App />,
    document.querySelector('#root')
);