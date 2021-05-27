function BoxView(props) {
  return(
    <div className="boxview">
      <p className="title">{props.title}</p>
      <div className="box">
        {props.view}
      </div>
    </div>
  );
}

export default BoxView;