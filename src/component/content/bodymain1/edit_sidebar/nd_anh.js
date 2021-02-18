import React, { useRef } from 'react';
function Ndanh(props) {
  const { picturearray } = props;
  var KichThuoc = 376;
  var ChuyenSlide = useRef(null);
  var Chuyen = 0;

  function Next() {
    var Img = ChuyenSlide.current.getElementsByTagName('img');
    var Max = KichThuoc * (Img.length - 1);
    if (Chuyen < Max) Chuyen += KichThuoc;
    else Chuyen = 0;
    ChuyenSlide.current.style.marginLeft = '-' + Chuyen + 'px';
  }

  function Back() {
    var Img = ChuyenSlide.current.getElementsByTagName('img');
    var Max = KichThuoc * (Img.length - 1);
    if (Chuyen === 0) Chuyen = Max;
    else Chuyen -= KichThuoc;
    ChuyenSlide.current.style.marginLeft = '-' + Chuyen + 'px';
  }
  return (
    <div className="slide_picture">
      <div className="chuyen-slide" ref={ChuyenSlide}>
        {picturearray.map((picture) => {
          return (
            <div key={picture.id} className="slide-tintuc">
              <a href="true">
                <img src={picture.Img} alt="true" />
              </a>
            </div>
          );
        })}
      </div>
      <p className="prev" onClick={Back}>
        ❮
      </p>
      <p className="next" onClick={Next}>
        ❯
      </p>
    </div>
  );
}
export default Ndanh;
