function Menu() {
  return (
    <div className="menu">
      <input type="checkbox" hidden id="menu_checkbox" />
      <div className="list_menu_1">
        <div className="nav-item">
          <i className="fa fa-bars" style={{ color: 'silver' }} />
        </div>
        <div className="nav-item">
          <a href="true">Xã Hội</a>
        </div>
        <div className="nav-item">
          <a href="true">Kinh tế</a>
        </div>
        <div className="nav-item">
          <a href="true">Đời sống</a>
        </div>
        <div className="nav-item">
          <a href="true">Thế giới</a>
        </div>
        <div className="nav-item">
          <a href="true">Giải trí</a>
        </div>
        <div className="nav-item">
          <a href="true">Thể thao</a>
        </div>
        <div className="nav-item">
          <a href="true">Sức khỏe</a>
        </div>
        <div className="nav-item">
          <a href="true">Công nghệ</a>
        </div>
        <div className="nav-item">
          <a href="true">Video</a>
        </div>
        <div className="nav-item">
          <a href="true">Hình ảnh</a>
        </div>
        <div>
          <label htmlFor="menu_checkbox">
            <i className="fas fa-ellipsis-h fa-1x" style={{ color: 'silver' }}>
              <div className="sub-menu">
                <div className="menu_list_item">
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      XÃ HỘI
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      KINH TẾ
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      ĐỜI SỐNG
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      THẾ GIỚI
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      GIẢI TRÍ
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      THỂ THAO
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      SỨC KHỎE
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      CÔNG NGHỆ
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      VIDEO
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      HÌNH ẢNH
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      TÂM SỰ
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      ĐỊA PHƯƠNG
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      XE 360
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      GIÁO DỤC
                    </a>
                  </div>
                  <div className="list_item">
                    <a href="true">
                      <img
                        src="img/Path_213.png"
                        alt=""
                        style={{ marginRight: 10 }}
                      />
                      SUPERINFO
                    </a>
                  </div>
                </div>
              </div>
            </i>
          </label>
        </div>
      </div>
      <div className="list_menu_2">
        <label htmlFor="menu_checkbox" className="nav-item">
          <i className="fas fa-arrow-left" style={{ color: 'silver' }} />
        </label>
        <div className="nav-item">
          <a href="true">Tâm sự</a>
        </div>
        <div className="nav-item">
          <a href="true">Địa phương</a>
        </div>
        <div className="nav-item">
          <a href="true">Xe 360</a>
        </div>
        <div className="nav-item">
          <a href="true">Giáo dục</a>
        </div>
        <div className="nav-item">
          <a href="true">Superinfo</a>
        </div>
      </div>
    </div>
  );
}
export default Menu;
