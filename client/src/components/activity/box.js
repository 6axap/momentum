function BoxView(props) {
  let width = props.width;
  return(
    <div className={ `boxview ${width}` }>
      <p className="title">{props.title}</p>
      <div className="box">
        {props.view}
      </div>
    </div>
  );
}

export default BoxView;