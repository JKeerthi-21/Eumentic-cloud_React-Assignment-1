import React from "react";
import Card from "./components/card";
import Loading from "./components/loading";
import "./App.css";

class App extends React.Component {
   
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }
 
  componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
          
  }

  render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <Loading/>;
 
      return (
      <div className = "App">
       {
              items.map((item) => (
              <Card
              Username={item.username}
              Name={item.name}
              Email={item.email}
              Contact={item.phone}
              Company={item.company.name}
              Website={item.website}
              Street={item.address.street}
              Suite={item.address.suite}
              City={item.address.city}
              Pincode={item.address.zipcode}
            />
              ))
          }
      </div>
  );
}
}
 
export default App;