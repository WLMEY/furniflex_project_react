import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CouponCard = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="coupon-card d-flex bg-dark text-white rounded overflow-hidden position-relative shadow-lg">
        {/* الجزء الأيسر */}
        <div className="coupon-left d-flex flex-column justify-content-center text-center px-3 border-end border-secondary">
          <p className="m-0">COUPON</p>
          <p className="m-0">COUPON</p>
          <p className="m-0">COUPON</p>
        </div>

        {/* الجزء الأيمن */}
        <div className="coupon-right text-center flex-grow-1 p-3">
          <h2 className="fs-5 fw-bold">GET EXTRA 15% OFF</h2>
          <p className="small text-light">ON PURCHASE OF 2+ STYLES</p>
          <p className="text-warning fw-bold">USE CODE: TWO15</p>
        </div>

        {/* التأثيرات الجانبية */}
        <div className="coupon-cut left-cut"></div>
        <div className="coupon-cut right-cut"></div>
      </div>
    </div>
  );
};

export default CouponCard;
