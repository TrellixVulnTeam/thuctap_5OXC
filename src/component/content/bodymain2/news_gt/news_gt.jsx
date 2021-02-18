import Nd1 from '../edit_body2/Nd1_body2';
import Nd2 from '../edit_body2/Nd2_body2';
import Tdbody2 from '../edit_body2/Td_body2';

function Giaitri() {
  return (
    <div className="news_gt">
      <Tdbody2 title="Giải Trí" />
      <div className="m2_nd_item">
        <Nd1
          Img="img/gt1.gif"
          title="Lý Hải - Minh Hà vui mừng vì trồng được loại ớt nửa tỷ đồng một kg"
        />
        <div className="news_nd_2">
          <Nd2
            Img="img/gt2.jpg"
            title="Quang Đăng: Do COVID, năm nay gia đình tôi sẽ chúc Tết nhau qua điện thoại"
          />
          <Nd2
            Img="img/gt3.gif"
            title="MC Bạch Lan Phương - bạn gái hơn 6 tuổi của Huỳnh Anh mặc gợi cảm"
          />
        </div>
      </div>
    </div>
  );
}
export default Giaitri;
