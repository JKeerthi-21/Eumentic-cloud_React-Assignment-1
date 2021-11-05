import "./card.css";
import Details from "./details";
import Avatar from "./avatar";

function card(props) {
  let username=props.Username;
  let source = "https://avatars.dicebear.com/v2/avataaars/"+username+".svg?options[mood][]=happy";
  let Addr = props.Street + ", " + props.Suite + ", " + props.City +  ", " +props.Pincode;
  return (
    <div className="person">
      <div className="row">
        <Avatar Source={source}/>
        <Details
          Name={props.Name}
          Email={props.Email}
          Contact={props.Contact}
          Company={props.Company}
          Website={props.Website}
          Address={Addr}
          
        />
      </div>
    </div>
  );
}

export default card;
