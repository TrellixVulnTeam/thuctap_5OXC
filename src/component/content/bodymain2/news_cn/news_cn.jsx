import Nd1 from '../edit_body2/Nd1_body2';
import Nd2 from '../edit_body2/Nd2_body2';
import Tdbody2 from '../edit_body2/Td_body2';

function Congnghe() {
  return (
    <div className="news_cn">
      <Tdbody2 title="Công nghệ" />
      <div className="m2_nd_item">
        <Nd1
          Img="img/cn1.jpg"
          title="Realme tăng chưởng đáng ghi nhận trong hoàn cảnh toàn cầu bị ảnh hưởng."
        />
        <div className="news_nd_2">
          <Nd2
            Img="img/cn2.jpeg"
            title='Facebook "năn nỉ" người dùng IOS cho phép lấy dữ liệu để quảng cáo.'
          />
          <Nd2
            Img="img/cn3.jpg"
            title="Công bố 29.000 địa chỉ IP phát tản thư điện tử rách."
          />
        </div>
      </div>
    </div>
  );
}
export default Congnghe;
