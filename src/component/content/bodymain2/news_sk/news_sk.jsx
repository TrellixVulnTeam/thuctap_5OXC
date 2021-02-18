import Nd1 from '../edit_body2/Nd1_body2';
import Nd2 from '../edit_body2/Nd2_body2';
import Tdbody2 from '../edit_body2/Td_body2';

function Suckhoe() {
  return (
    <div className="news_sk">
      <Tdbody2 title="Sức khỏe" />
      <div className="m2_nd_item">
        <Nd1
          Img="img/sk1.jpg"
          title="Bác sĩ bệnh viện Chợ Rẫy lên đường và tâm dịch Covid_19 ở Gia Lai"
        />
        <div className="news_nd_2">
          <Nd2
            Img="img/sk2.jpg"
            title="TPHCM đang truy vết người tiếp xúc với công chứng viên mắc COVID-19 ở Hà Nội"
          />
          <Nd2
            Img="img/sk3.jpg"
            title="92 người ở TP.HCM liên quan đến ca mắc Covid_19 ở Bình Dương."
          />
        </div>
      </div>
    </div>
  );
}
export default Suckhoe;
