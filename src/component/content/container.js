import Moinhat from './bodymain1/news_mn/news_mn';
import Xuhuong from './bodymain1/news_xuhuong/xuhuong';
import Xahoi from './bodymain1/news_xahoi/Xahoi';
import Kinhte from './bodymain1/news_kt/news_kt';
import Doisong from './bodymain1/news_ds/news_ds';
import Video from './bodymain1/news_video/news_video';
import Picture from './bodymain1/news_anh/news_anh';
import Audio from './bodymain1/news_audio/Audio';
import Thegioi from './bodymain2/news_tg/news_tg';
import Giaitri from './bodymain2/news_gt/news_gt';
import Thethao from './bodymain2/news_tt/news_tt';
import Suckhoe from './bodymain2/news_sk/news_sk';
import Congnghe from './bodymain2/news_cn/news_cn';
import Tamsu from './bodymain2/news_ts/news_ts';
import Xe from './bodymain2/news_xe/news_xe';
import Giaoduc from './bodymain2/news_gd/news_gd';
import Superinfo from './bodymain2/news_superinfo/news_superinfo';
import Newsheader from './bodymain1/news_header/newheader';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Contentnews from './contennt_news/content_news';
function Container() {
  return (
    <div id="container">
      <Router>
        <Route path="/" exact>
          <div className="content">
            <div className="body_main">
              <div className="main_left">
                <Newsheader />
                <Xuhuong />
                <Moinhat />
                <Xahoi />
                <Kinhte />
                <Doisong />
              </div>
              <div className="main_right">
                <Video />
                <Picture />
                <Audio />
              </div>
            </div>
            <div className="body_main_2">
              <div className="main_top">
                <Thegioi />
                <Giaitri />
                <Thethao />
              </div>
              <div className="main_center">
                <Suckhoe />
                <Congnghe />
                <Tamsu />
              </div>
              <div className="main_bottom">
                <Xe />
                <Giaoduc />
                <Superinfo />
              </div>
            </div>
          </div>
        </Route>
        <Route path="/test" exact>
          <Contentnews />
        </Route>
      </Router>
    </div>
  );
}
export default Container;
