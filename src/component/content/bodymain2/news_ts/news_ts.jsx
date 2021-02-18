import Nd1 from '../edit_body2/Nd1_body2';
import Nd2 from '../edit_body2/Nd2_body2';
import Tdbody2 from '../edit_body2/Td_body2';

function Tamsu() {
  return (
    <div className="news_ts">
      <Tdbody2 title="Tâm sự" />
      <div className="m2_nd_item">
        <Nd1 Img="img/ts1.jpg" title="Rồi sẽ bình yên thôi" />
        <div className="news_nd_2">
          <Nd2
            Img="img/ts2.jpg"
            title="Tôi thà ế còn hơn lấy chồng không có sẵn nhà vs xe."
          />
          <Nd2 Img="img/ts3.jpg" title="Hành động cho khát vọng" />
        </div>
      </div>
    </div>
  );
}
export default Tamsu;
