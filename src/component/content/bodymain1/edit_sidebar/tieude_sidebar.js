function Tdsidebar(props) {
  const { title } = props;
  return (
    <div className="sidebar_td">
      <div className="td_title">
        <img src="img/Path_213.png" alt="true" width={7} height={40} />
        <div className="title">
          <a href="true">{title}</a>
        </div>
      </div>
    </div>
  );
}
export default Tdsidebar;
