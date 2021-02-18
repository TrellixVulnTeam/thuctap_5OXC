import Noidung from '../edit_tintuc/noidung';
import Tieude from '../edit_tintuc/tieude';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
//import axios from 'axios';

function Xuhuong() {
  // Gọi API
  const [postArray, setPostArray] = useState([]);
  useEffect(() => {
    async function LayDL() {
      try {
        var axios = require('axios');
        // oftion dữ liệu trong bạng dữ liệu API
        const data = { id: 1, page: 1, pageSize: 1000 };
        var params = JSON.stringify(data);
        var optionAxios = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        axios
          .post(
            'http://10.144.14.56:8084/api/getCateList',
            { params },
            optionAxios
          )
          .then(function (response) {
            const { params } = response.data;
            console.log([params]);
            setPostArray([params]);
            console.log(postArray);
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (e) {
        console.log(e.error);
      }
    }
    LayDL();
  });
  return (
    
    <div className="news_xh">
      <div className="news_td">
        <div className="td_title">
          <i className="fas fa-chart-line fa-2x" style={{ color: 'blue' }} />
          <Tieude title="Xu hướng" />
        </div>
        <div className="td_tag">
          <div className="tag">
            <Link to="/true"> Học sinh </Link>
          </div>
          <div className="tag">
          <Link to="/true"> Corona </Link>
          </div>
          <div className="tag">
          <Link to="/true"> vovid-19 </Link>
          </div>
        </div>
      </div>
      <div className="news_nd">
        <Noidung
          Img="img/xuhuong1.jpg"
          title="Hơn 90.000 sinh viên ở TP.HCM phải nghỉ học tức tốc từ hôm nay để tránh dịch."
        />
        <Noidung
          Img="img/xuhuong2.jpg"
          title="24 giáo viên, học sinh Hà Nội cách ly vì một phụ huynh dương tính với covid-19."
        />
        <Noidung
          Img="img/xuhuong3.jpg"
          title="Bố mắc Covid-19, hơn 100 bạn học của con bị cách ly ở Cẩm Giang, Hải Dương."
        />
      </div>
    </div>
    
  );
}

export default Xuhuong;
