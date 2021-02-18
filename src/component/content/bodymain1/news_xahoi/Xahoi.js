import Noidung from '../edit_tintuc/noidung';
import Tieude from '../edit_tintuc/tieude';

function Xahoi() {
  return (
    <div className="news_xahoi">
      <div className="news_td">
        <div className="td_title">
          <img src="img/Path_213.png" alt="true" width="7" height="40" />
          <Tieude title="Xã hội" />
        </div>
      </div>
      <div className="news_nd">
        <Noidung
          Img="img/xh1.jpg"
          title="Hà Nội: Quận Hoàn Kiếm đề xuất dừng hoạt động phố đi bộ Hồ Gươm từ ngày 5.2"
        />
        <Noidung
          Img="img/xh2.jpg"
          title="Rơi thang tời, 11 công nhân thương vong ở Nghệ An: 2 người bị khởi tố"
        />
        <Noidung
          Img="img/xh3.jpg"
          title="422 người từ vùng dịch về Đà Nẵng âm tính với SARS-CoV-2"
        />
      </div>
    </div>
  );
}
export default Xahoi;
