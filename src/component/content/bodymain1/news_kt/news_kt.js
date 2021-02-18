import Noidung from '../edit_tintuc/noidung';
import Tieude from '../edit_tintuc/tieude';

function Kinhte() {
  return (
    <div className="news_kt">
      <div className="news_td">
        <div className="td_title">
          <img src="img/Path_213.png" alt="true" width="7" height="40" />
          <Tieude title="Kinh tế" />
        </div>
      </div>
      <div className="news_nd">
        <Noidung
          Img="img/mn1.jpg"
          title="Tỷ giá USD hôm nay: USD hồi phục nhẹ."
        />
        <Noidung
          Img="img/mn2.jpg"
          title="Covid-19 bùng phát ở Hà Nội: Hàng tết bầy đầy đường, nhưng khách vẫn thờ ơ"
        />
        <Noidung
          Img="img/mn3.jpg"
          title="Giá vàng hôm nay: Covid-19 ngày càng phức tạp, giá vàng tiếp tục tăng mạnh."
        />
      </div>
    </div>
  );
}
export default Kinhte;
