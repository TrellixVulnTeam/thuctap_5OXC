function Nd1(props) {
  const { Img, title } = props;
  return (
    <div className="nd_item_1">
      <div className="item_1_img">
        <a href="true">
          <img src={Img} alt="true" />
        </a>
      </div>
      <div className="item_1_title">
        <a href="true">
          <p>{title}</p>
        </a>
      </div>
      <div className="item_1_time_icon">
        <div className="item_1_time">
          <ul>
            <li> VNPT </li> <li> . </li> <li> 6 giờ trước </li>
          </ul>
        </div>
        <div className="item_1_icon">
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
export default Nd1;
