import Nd1 from '../edit_body2/Nd1_body2';
import Nd2 from '../edit_body2/Nd2_body2';
import Tdbody2 from '../edit_body2/Td_body2';

function Xe() {
  return (
    <div className="news_xe">
      <Tdbody2 title="Xe 360" />
      <div className="m2_nd_item">
        <Nd1 Img="img/xe1.jpg" title="Mất lái, xe chở bê tông gây tai họa." />
        <div className="news_nd_2">
          <Nd2
            Img="img/xe2.jpg"
            title="Sát têt: Xe sang cũ đời sâu giá ngang xe cỏ, ế vẫn hoàn ế."
          />
          <Nd2
            Img="img/xe3.jpg"
            title="ndian FTR Rally 2022 - mẫu mô tô mạnh mẽ đến từ Ấn Độ"
          />
        </div>
      </div>
    </div>
  );
}
export default Xe;
