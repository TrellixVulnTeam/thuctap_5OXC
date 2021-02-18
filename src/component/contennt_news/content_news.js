import Ndtintuc from './nd_tintuc/Ndtintuc';
import Sharecmt from './share_comment/Sharecmt';
import Tdtintuc from './td_tintuc/Tdtintuc';
import Tinkhac from './tinkhac/tinkhac';

function Contentnews() {
  return (
    <div className="container_tt">
      <div className="body_content">
        <Tdtintuc
          catename="Xu hướng"
          title="Chuyên gia Mỹ cảnh báo về Covid-19, toàn thế giới vượt 100 triệu ca"
        />
        <Ndtintuc />
        <Sharecmt />
        <Tinkhac />
      </div>
    </div>
  );
}
export default Contentnews;
