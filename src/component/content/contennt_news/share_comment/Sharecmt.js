function Sharecmt() {
  function ckeck_data() {
    var checkbox = document.getElementById('check_login');
    checkbox.checked = true;
  }
  function check_text() {
    var text = document.getElementById('ant-input');
    if (text !== '') {
      document.getElementById('check_text').style.display = 'block';
    }
  }
  return (
    <>
      <div className="check_login_user">
        <input
          type="checkbox"
          hidden
          id="check_login"
          className="ckeck_input"
        />
        <label htmlFor="check_login" className="lg_overlay" id="overlay" />
        <div className="login">
          <div className="login_title">
            <p>Mời bạn đăng nhập để sử dụng tính năng này</p>
          </div>
          <div className="btn_login">
            <div className="btn_digi">
              <button>
                <a href="true"> Digilife</a>
              </button>
            </div>
            <div className="btn_exit">
              <label htmlFor="check_login" style={{ cursor: 'pointer' }}>
                ĐÓNG
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="content_detail_extentsion">
        <label className="extentsion_wrapper" htmlFor="check_login">
          <i className="fas fa-bookmark" style={{ color: 'silver' }} />
          <span>Lưu bài viết</span>
        </label>
        <div className="extentsion_wrapper">
          <div
            className="fb-share-button"
            data-href="http://127.0.0.1:5501/tintuc.html"
            data-layout="button"
            data-size="large"
          >
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%3A5501%2Ftintuc.html&src=sdkpreparse"
              className="fb-xfbml-parse-ignore"
            >
              Chia sẻ
            </a>
          </div>
        </div>
      </div>
      <div className="content_detail_tag_comment">
        <div className="detail_tag">
          <i className="fas fa-chart-line fa-2x" style={{ color: '#b2bbd1' }} />
          <div className="tag_item">
            <a href="true">COVID-19</a>
          </div>
          <div className="tag_item">
            <a href="true">covid-19</a>
          </div>
          <div className="tag_item">
            <a href="true">virus corona</a>
          </div>
          <div className="tag_item">
            <a href="true">tin covid-19</a>
          </div>
        </div>
        <div className="detail_comment">
          <div className="comment">
            <i
              className="fas fa-user-circle fa-2x"
              style={{ color: 'silver' }}
            />
            <div className="text_area">
              <textarea
                name="noidung"
                value={''}
                id="ant-input"
                placeholder="Bình luận của bạn"
                onChange={ckeck_data}
              />
            </div>
          </div>
        </div>
        <div id="check_text">
          <p style={{ marginTop: '5px', color: 'red' }}>
            Nội dung không được để trống!
          </p>
        </div>
        <button className="btn_gui" onClick={check_text}>
          Gửi
        </button>
      </div>
    </>
  );
}
export default Sharecmt;
