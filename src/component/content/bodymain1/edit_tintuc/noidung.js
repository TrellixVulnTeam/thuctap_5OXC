import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
function Noidung(props) {
  const { Img, title } = props;
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="nd_item">
      <div className="item_img">
        <Link to="/test" onClick={topFunction}>
          <img src={Img} alt="true" />
        </Link>
      </div>
      <div className="item_title">
        <div className="title_time">
          <ul>
            <li>VNPT</li>
            <li>.</li>
            <li>6 giời trước</li>
          </ul>
        </div>
        <div className="title_title">
          <Link to="/test" onClick={topFunction}>
            {title}
          </Link>
        </div>
        <div className="title_icon">
          <span style={{ marginRight: 10 }}>
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
export default Noidung;
