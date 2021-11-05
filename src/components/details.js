import "./details.css";

function details(props) {
  return (
    <div className="col">
      <p className="name">{props.Name}</p>

      <span className="details"><p>
        <strong>Email : </strong>
        {props.Email}
      </p>
      <p>
        <strong>Contact : </strong>
        {props.Contact}
      </p>
      <p>
        <strong>Company : </strong>
        {props.Company}
      </p>
      <p>
        <strong>Website : </strong>
        {props.Website}
      </p>
      <p>
        <strong>Address : </strong>
        {props.Address}
      </p></span>
    </div>
  );
}

export default details;
