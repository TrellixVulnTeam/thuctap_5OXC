import Nd1 from '../edit_body2/Nd1_body2';
import Nd2 from '../edit_body2/Nd2_body2';
//import Nd3 from '../edit_body2/Nd3_body2';
import Tdbody2 from '../edit_body2/Td_body2';

function Thegioi() {
  return (
    <div className="news_tg">
      <Tdbody2 title="Thế giới" />
      <div className="m2_nd_item">
        <Nd1
          Img="img/tg1.jpeg"
          title="Người Myanmar gõ xoong, nồi phản đối đảo chính"
        />
        <div className="news_nd_2">
          <Nd2
            Img="img/tg2.png"
            title="Nóng nhất hôm nay: WHO theo dõi nhiều nhất Viện Virus học Vũ Hán"
          />
          <Nd2
            Img="img/tg3.jpg"
            title='Chính quyền ông Biden đánh tiếng "không cần vộ" với Trung Quốc'
          />
        </div>
      </div>
    </div>
  );
}
export default Thegioi;
