import Ndvideo from '../edit_sidebar/nd_video';
import Tdsidebar from '../edit_sidebar/tieude_sidebar';

function Video() {
  return (
    <div className="news_video">
      <Tdsidebar title="Tin video" />
      <div className="video_nd">
        <Ndvideo filename="video/SƠN TÙNG M-TP - CHÚNG TA CỦA HIỆN TẠI - OFFICIAL MUSIC VIDEO.mp4" Img="img/anhvideo.jpg" title="SƠN TÙNG M-TP | CHÚNG TA CỦA HIỆN TẠI | OFFICIAL MUSIC VIDEO" />
        <Ndvideo filename="video/MANCHESTER UNITED - SOUTHAMPTON - QUỶ ĐỎ NGHIỀN NÁT ĐỐI THỦ TẠI NHÀ HÁT - VÒNG 22 NGOẠI HẠNG ANH.mp4" Img="img/mu_stt.jpg" title="MANCHESTER UNITED - SOUTHAMPTON | QUỶ ĐỎ NGHIỀN NÁT ĐỐI THỦ TẠI NHÀ HÁT | VÒNG 22 NGOẠI HẠNG ANH" />
        <Ndvideo filename="video/neymar-toi-se-khong-ngung-tiec-tung.mp4" Img="img/neymar.jpg" title="Neymar: 'Tiệc tùng là không thể thiếu trong cuộc sống của tôi'" />
      </div>
    </div>
  );
}
export default Video;
