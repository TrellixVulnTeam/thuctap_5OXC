function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="ft_main">
          <p>TẬP ĐOÀN BƯU CHÍNH VIỄN THÔNG VIỆT NAM (VNPT)</p>
          <p>
            Trụ sở: Tòa nhà VNPT, số 57 Phố Huỳnh Thúc Kháng, Phường Láng Hạ,
            Quận Đống Đa, Thành phố Hà Nội, Việt Nam
          </p>
          <p>
            Giấy chứng nhận ĐKKD số: 0100684378 do Sở Kế hoạch và Đầu tư TP.Hà
            Nội cấp lần đầu ngày 17/8/2010. Đăng ký thay đổi lần 4 ngày
            20/03/2017.
          </p>
          <p>
            Điện thoại: 024.37741091 - Fax: 024.37741093 - Email:
            vanphong@vnpt.vn
          </p>
          <p>
            Chịu trách nhiệm nội dung: Ông Dương Thành Long – Tổng Giám đốc Tổng
            công ty Truyền thông
          </p>
          <p>© Bản Quyền thuộc Tập đoàn Bưu chính Viễn thông Việt Nam</p>
        </div>
      </div>
      <div className="scroll" id="scroll1">
        <i onClick={topFunction} className="fas fa-arrow-circle-up fa-3x" />
      </div>
    </>
  );
}
export default Footer;
