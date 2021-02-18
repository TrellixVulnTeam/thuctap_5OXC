import Nd1 from '../edit_body2/Nd1_body2';
import Nd2 from '../edit_body2/Nd2_body2';
import Tdbody2 from '../edit_body2/Td_body2';

function Giaoduc() {
  return (
    <div className="news_gd">
      <Tdbody2 title="Giáo dục" />
      <div className="m2_nd_item">
        <Nd1
          Img="img/gd1.jpg"
          title="Bộ GD-ĐT chính thức bỏ chứng chỉ, tin học cho giáo viên"
        />
        <div className="news_nd_2">
          <Nd2
            Img="img/gd2.jpg"
            title="Đại học FPT có ca COVID-19: 52 sinh viên và 10 trường THPT phải cách ly"
          />
          <Nd2
            Img="img/gd3.jpg"
            title="Vĩnh Phúc thưởng gần 4 tỷ đồng cho học sinh giỏi quốc gia"
          />
        </div>
      </div>
    </div>
  );
}
export default Giaoduc;
