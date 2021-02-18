import React, { useEffect, useRef } from 'react';
function Newsheader() {
  var slideshow = useRef();
  var slideIndex = 1;
  var dem;

  function currentSlide(n) {
    showSlides((slideIndex = n));
    dem = n;
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }
  useEffect(() => {
    const interval = setInterval(function () {
      var stt = document.getElementsByClassName('mySlides');
      if (dem == null || dem > stt.length) {
        dem = 1;
      }
      currentSlide(dem);
      dem++;
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="news-header">
      <div className="slideshow-container" ref={slideshow}>
        <div className="mySlides fade">
          <img src="img/anhtin1.png" alt="true" />
          <div className="title">
            <a href="true">
              Nghiêm túc cách ly xã hội trong thời gian ngắn để không phải phong
              tỏa trong thời gian dài
            </a>
          </div>
        </div>
        <div className="mySlides fade">
          <img src="img/slide1.jpg" alt="true" />
          <div className="title">
            <a href="true">Chứng khoán ngày hôm nay bật tăng mạnh mẽ. </a>
          </div>
        </div>
        <div className="mySlides fade">
          <img src="img/slide2.jpg" alt="true" />
          <div className="title">
            <a href="true">
              Thu ngân sách Nhà nước ước đạt 134.000 tỷ đồng trong tháng 1 /
              2021
            </a>
          </div>
        </div>
        <div className="mySlides fade">
          <img src="img/slide3.jpg" alt="true" />
          <div className="title">
            <a href="true">
              Đề nghị xét nghiệm COVID - 19 cho khoảng 3.200 người lao động
            </a>
          </div>
        </div>
        <div className="mySlides fade">
          <img src="img/slide4.jpg" alt="true" />
          <div className="title">
            <a href="true">
              Bảy Bộ trưởng không tham gia Ban Chấp hành Trung ương khóa XIII
            </a>
          </div>
        </div>
        <ul className="root" style={{ textAlign: 'center' }}>
          <li className="dot" onClick={() => currentSlide(1)} />
          <li className="dot" onClick={() => currentSlide(2)} />
          <li className="dot" onClick={() => currentSlide(3)} />
          <li className="dot" onClick={() => currentSlide(4)} />
          <li className="dot" onClick={() => currentSlide(5)} />
        </ul>
      </div>
    </div>
  );
}
export default Newsheader;
