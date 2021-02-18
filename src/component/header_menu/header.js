import { BrowserRouter as Router, Link } from 'react-router-dom';
function Header() {
  return (
    <Router>
      <div className="header">
        <div className="lg-sl">
          <div className="logo">
            <img src="./img/logo.png" alt="true" width={140} height={30} />
          </div>
          <div className="sl">
            <div className="sl-login">
              <input
                type="checkbox"
                hidden
                id="ckeck_login"
                className="ckeck_input"
              />
              <label htmlFor="ckeck_login">
                <i className="fas fa-user-circle fa-2x" />
              </label>
              <label htmlFor="ckeck_login" className="lg_overlay" />
              <div className="login">
                <div className="login_title">
                  <p> Đăng nhập </p>
                </div>
                <div className="btn_login">
                  <div className="btn_digi">
                    <button>
                      <Link to="/true"> Digilife </Link>
                    </button>
                  </div>
                  <div className="btn_exit">
                    <label htmlFor="ckeck_login" style={{ cursor: 'pointer' }}>
                      ĐÓNG
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="sl-search">
              <input
                type="search"
                placeholder="Tìm kiếm"
                name="search"
                id="search"
              />
              <i className="fa fa-search" style={{ paddingRight: 5 }} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default Header;
