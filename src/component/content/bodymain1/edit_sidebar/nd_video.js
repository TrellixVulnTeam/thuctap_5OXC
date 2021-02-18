import { useRef } from 'react';

function Ndvideo(props) {
  const { filename,Img,title } = props;
  let Video = useRef(null);
  let poster = useRef(null);
  let overlay = useRef(null);
  let btnplay = useRef(null);

  function videoplay() {
    var v = Video.current;
    poster.current.style.display = 'none';
    overlay.current.style.display = 'none';
    btnplay.current.style.display = 'none';
    v.play();
  }
  return (
    <div className="nd_item">
      <div className="item_video">
        <video preload="auto" controls ref={Video}>
          <source src={filename} />
        </video>
        <div className="video_poter" ref={poster}>
          <img src={Img} alt="true" />
        </div>
        <div className="video_overlay" ref={overlay} />
        <div className="btn_play" ref={btnplay}>
          <button onClick={videoplay}>
            <i
              className="far fa-play-circle fa-4x"
              style={{ color: 'white', cursor: 'pointer' }}
            />
          </button>
        </div>
      </div>
      <div className="title_a">
        <a href="true"> {title} </a>
      </div>
      <div className="item_vd_title">
        <div className="vd_title_time">
          <ul>
            <li> VNPT </li> <li> . </li> <li> 6 giờ trước </li>
          </ul>
        </div>
        <div className="vd_title_icon">
          <span style={{ marginRight: 10 }}>
            <i className="fab fa-youtube" />
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
export default Ndvideo;
