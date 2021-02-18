function Tdtintuc(props) {
    const { catename, title } = props;
    return ( <
        div className = "content_detail_title" >
        <
        div className = "detail_catename" > { catename } < /div> <
        h1 className = "detail_title" > { title } < /h1> <
        div className = "detail_time" >
        <
        span > VietNamnet < /span> <
        span > . < /span> <
        span > 6 giờ trước < /span> <
        /div> <
        /div>
    );
}
export default Tdtintuc;