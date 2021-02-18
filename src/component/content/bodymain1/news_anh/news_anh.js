import Ndanh from '../edit_sidebar/nd_anh';
import Tdsidebar from '../edit_sidebar/tieude_sidebar';
import { useState } from 'react';

function Picture() {
  const [picture1] = useState([
    { id: 1, Img: 'img/anh1_1.jpg' },
    { id: 2, Img: 'img/anh1_2.jpg' },
  ]);
  const [picture2] = useState([
    { id: 1, Img: 'img/anh2_1.jpg' },
    { id: 2, Img: 'img/anh2_2.jpg' },
    { id: 3, Img: 'img/anh2_3.jpg' },
  ]);
  const [picture3] = useState([
    { id: 1, Img: 'img/anh3_1.jpg' },
    { id: 2, Img: 'img/anh3_2.jpg' },
  ]);
  return (
    <div className="news_picture">
      <Tdsidebar title="Tin ảnh" />
      <Ndanh picturearray={picture1} />
      <Ndanh picturearray={picture2} />
      <Ndanh picturearray={picture3} />
    </div>
  );
}
export default Picture;
