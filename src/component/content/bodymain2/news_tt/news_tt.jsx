import Nd1 from '../edit_body2/Nd1_body2';
import Nd2 from '../edit_body2/Nd2_body2';
import Tdbody2 from '../edit_body2/Td_body2';

function Thethao() {
  return (
    <div className="news_tt">
      <Tdbody2 title="Thể thao" />
      <div className="m2_nd_item">
        <Nd1
          Img="img/tt1.jpg"
          title="HLV cũ chỉ ra điểm yếu cần khắc phục của Pellistri"
        />
        <div className="news_nd_2">
          <Nd2
            Img="img/tt2.jpg"
            title='HAGL đụng đối nhẹ, Nam Định ngồi "mâm trên"'
          />
          <Nd2
            Img="img/tt3.jpg"
            title="Bất chấp COVID-19, Nhật Bản quyết tổ chức Olympic"
          />
        </div>
      </div>
    </div>
  );
}
export default Thethao;
