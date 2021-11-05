import "./avatar.css";

function Avatar(props) {
  return (
    <div className="col-auto">
      <img src={props.Source} alt="avatar" />
    </div>
  );
}

export default Avatar;
