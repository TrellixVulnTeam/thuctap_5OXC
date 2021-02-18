import Ndaudio from '../edit_sidebar/nd_audio';
import Tdsidebar from '../edit_sidebar/tieude_sidebar';

function Audio() {
  return (
    <div className="news_video">
      <Tdsidebar title="Tin video" />
      <div className="news_nd_2">
        <Ndaudio
          Img="img/audio.jpg"
          title="Cập nhật tin dịch Covid-19 sáng 1/2: 2 ca mắc mới Covid-19 trong cộng đồng"
        />
        <Ndaudio
          Img="img/audio2.jpg"
          title="Sáng 31/1: Việt Nam ghi nhận thêm 14 ca mắc Covid-19"
        />
        <Ndaudio
          Img="img/audio3.jpg"
          title="Tin nóng Covid-19 sáng 30/1: 34 ca mắc trong cộng đồng ở Hải Dương, Quảng Ninh"
        />
      </div>
    </div>
  );
}
export default Audio;
