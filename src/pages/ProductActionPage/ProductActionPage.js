import React, { Component } from "react";

class ProductActionPage extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form>
          <div className="form-group">
            <label>Tên Sản Phẩm</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Giá</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group">
            <label>Trạng Thái</label>            
            <div className="checkbox">
              <label>
                <input type="checkbox"/>
                Còn Hàng
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Lưu Lại
          </button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
