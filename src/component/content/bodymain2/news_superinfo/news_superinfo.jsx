import Nd1 from '../edit_body2/Nd1_body2';
import Nd2 from '../edit_body2/Nd2_body2';
import Tdbody2 from '../edit_body2/Td_body2';

function Superinfo() {
  return (
    <div className="news_superinfo">
      <Tdbody2 title="Superinfo" />
      <div className="m2_nd_item">
        <Nd1
          Img="img/info1.jpg"
          title="Infographic: 4 sai phạm lớn của ông Tất Thành Cang"
        />
        <div className="news_nd_2">
          <Nd2
            Img="img/info2.jpg"
            title=" Infographic: Chân dung 9 nữ Bí thư Tỉnh ủy nhiệm kỳ 2020-2025"
          />
          <Nd2
            Img="img/info3.jpg"
            title="Infographic: Sự nghiệp tân Bí thư Tỉnh ủy Thanh Hóa Đỗ Trọng Hưng"
          />
        </div>
      </div>
    </div>
  );
}
export default Superinfo;
