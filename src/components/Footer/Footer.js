import React from "react";
import "./Footer.scss";

const Footer = ({ isHide }) => {
  return (
    <main id="mainFooter" className={`${isHide ? "hideFooter" : ""}`}>
      <div className="main-footer">
        {/* row 1 */}
        <div className="waves">
          <svg
            style={{ width: "100%", height: "auto" }}
            id="visual"
            viewBox="0 0 960 200"
            width="960"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <path
              d="M0 108L53.3 104.2C106.7 100.3 213.3 92.7 320 92.7C426.7 92.7 533.3 100.3 640 95.5C746.7 90.7 853.3 73.3 906.7 64.7L960 56L960 201L906.7 201C853.3 201 746.7 201 640 201C533.3 201 426.7 201 320 201C213.3 201 106.7 201 53.3 201L0 201Z"
              fill="#f25487"
            ></path>
            <path
              d="M0 172L53.3 160.3C106.7 148.7 213.3 125.3 320 115.2C426.7 105 533.3 108 640 109.8C746.7 111.7 853.3 112.3 906.7 112.7L960 113L960 201L906.7 201C853.3 201 746.7 201 640 201C533.3 201 426.7 201 320 201C213.3 201 106.7 201 53.3 201L0 201Z"
              fill="#333333"
            ></path>
          </svg>
        </div>
        {/* row 2 */}
        <div className="bgbottom">
          <div className="row g-0 footer-row">
            {/* coulmn 1 */}
            <div className="col-12 col-md-6 col-lg-3 p-0 pt-3 text-right">
              <h4 className="footer-coulmn-title">لینک های دسترسی</h4>
              <ul className="footer-ul-title">
                <li className="footer-li-title">
                  {" "}
                  <a href="/" className="footer-link">
                    چگونه مهمان شوم
                  </a>
                </li>
                <li className="footer-li-title">
                  <a href="/" className="footer-link">
                    چگونه میزبان شوم
                  </a>
                </li>
                <li className="footer-li-title">
                  <a href="/" className="footer-link">
                    {" "}
                    سایر سوالات متداول
                  </a>
                </li>
              </ul>
            </div>
            {/* coulmn 2 */}
            <div className="col-12 col-md-6 col-lg-3 p-0 pt-3 text-right">
              <h4 className="footer-coulmn-title">درباره ما</h4>
              <ul className="footer-ul-title">
                <li className="footer-li-title">
                  <a href="/" className="footer-link">
                    وبلاگ
                  </a>
                </li>
                <li className="footer-li-title">
                  <a href="/" className="footer-link">
                    تماس با ما
                  </a>
                </li>
                <li className="footer-li-title">
                  <a href="/" className="footer-link">
                    بیشتر
                  </a>
                </li>
                <li className="footer-li-title">
                  <a href="/" className="footer-link">
                    {" "}
                    پشتیبانی
                  </a>
                </li>
              </ul>
            </div>
            {/* coulmn 3 */}
            <div className="col-12 col-md-6 col-lg-3 p-0 pt-3 text-right">
              <h4 className="footer-coulmn-title">قوانین و مقررات</h4>
              <ul className="footer-ul-title">
                <li className="footer-li-title">
                  <a href="/" className="footer-link">
                    {" "}
                    قوانین و راهنمای میزبان
                  </a>
                </li>
                <li className="footer-li-title">
                  <a href="/" className="footer-link">
                    {" "}
                    قوانین و مقررات رزرو
                  </a>
                </li>
              </ul>
            </div>
            {/* coulmn 4 */}
            <div className="col-12 col-md-6 col-lg-3 p-0 pt-3 text-right">
              <h4 className="footer-coulmn-title">شبکه های اجتماعی</h4>
              <ul className="footer-ul-title">
                <a href="/" className="footer-link">
                  {" "}
                  <i className="fab fa-facebook-f footer-icon"></i>
                </a>
                <a href="/" className="footer-link">
                  {" "}
                  <i className="fab fa-twitter footer-icon"></i>
                </a>
                <a href="/" className="footer-link">
                  {" "}
                  <i className="fab fa-instagram footer-icon"></i>
                </a>
                <a href="/" className="footer-link">
                  {" "}
                  <i className="fab fa-linkedin-in footer-icon"></i>
                </a>
              </ul>
            </div>
          </div>
        </div>
        {/* row 3 */}
        <div className="footer__bottom">
          <p className="copyright">
            {" "}
            ©️ تمامی حقوق این وبسایت متعلق به شرکت پژواک داده خزر میباشد.{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
