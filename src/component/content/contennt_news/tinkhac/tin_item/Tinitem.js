function Tinitem(props) {
  const { Img, title } = props;
  return (
    <div className="news_item">
      <div className="item_img">
        <img src={Img} alt="" />
      </div>
      <div className="item_title">
        <div className="title_time">
          <span>VNPT</span>
          <span>.</span>
          <span>6 giờ trước</span>
        </div>
        <div className="title_title">
          <a href="true">{title}</a>
        </div>
        <div className="title_icon">
          <span style={{ marginRight: '10px' }}>
            0&nbsp;
            <i className="far fa-thumbs-up" />
          </span>
          <span>
            0&nbsp;
            <i className="far fa-comment" />
          </span>
        </div>
      </div>
    </div>
  );
}
export default Tinitem;
