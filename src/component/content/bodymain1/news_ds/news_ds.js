import Noidung from '../edit_tintuc/noidung';
import Tieude from '../edit_tintuc/tieude';

function Doisong() {
  return (
    <div className="news_ds">
      <div className="news_td">
        <div className="td_title">
          <img src="img/Path_213.png" alt="true" width="7" height="40" />
          <Tieude title="Đời sống" />
        </div>
      </div>
      <div className="news_nd">
        <Noidung
          Img="img/ds1.jpg"
          title="Thường trực Ban Bí thư: Cân nhắc việc bắn pháo hoa, tập trung chống Covid-19"
        />
        <Noidung
          Img="img/ds2.jpg"
          title="Không cấm người từ Hà Nội về các địa phương, không phong tỏa tràn lan"
        />
        <Noidung
          Img="img/ds3.jpg"
          title="Gia Lai ghi nhận ca mắc Covid-19 thứ 14, lịch trình dày đặc"
        />
      </div>
    </div>
  );
}
export default Doisong;
