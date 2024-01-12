function ProfileCard(props) {

  // The grey-ed out return statement does the same thing
  const {title, handle, img, description} = props;
  return (
  <div className = "card">
    <div className = "card-image">
      <figure className = "image is-1by1">
        <img src = {img} /> 
      </figure>
    </div>

    <div className = "card-content">
      <div className = "media-content">
        <p className = "title is-4">{title}</p>
        <p className = "subtitle is-6">{handle}</p>
      </div>
      <div className = "content">
        {description}
      </div>
    </div>
    
    
  </div>);


  return (<div>
    <div>Title is {props.title}</div>
    <div>Handle is {props.handle}</div>
  </div>);
}


// This is an even simpler version using the default pattern of props passed by parent component
/*
function ProfileCard({title, handle}) {
  return (<div>
    <div>Title is {title}</div>
    <div>Handle is {handle}</div>
  </div>);
}
*/

export default ProfileCard;
