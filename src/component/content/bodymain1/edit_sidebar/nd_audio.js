function Ndaudio(props) {
  const { Img, title } = props;
  return (
    <div className="nd_item_2">
      <div className="item_img_2">
        <a href="true">
          <img src={Img} alt="true" />
        </a>
      </div>
      <div className="item_title_2">
        <div className="title_time_2">
          <ul>
            <li> VNPT </li> <li> . </li> <li> 6 giờ trước </li>
          </ul>
        </div>
        <div className="title_title_2">
          <a href="true">
            <p>{title}</p>
          </a>
        </div>
        <div className="title_icon_2">
          <span style={{ marginRight: 10 }}>
            <i className="fas fa-headphones" />
          </span>
          <span style={{ marginRight: 10 }}>
            0 <i className="far fa-thumbs-up" />
          </span>
          <span>
            0 <i className="far fa-comment" />
          </span>
        </div>
      </div>
    </div>
  );
}
export default Ndaudio;
