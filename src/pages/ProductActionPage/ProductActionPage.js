import React, { Component } from "react";
import {Link} from 'react-router-dom';
import callApi from './../../utils/apiCaller';
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: ""
    };
  }

  onChange = (e) =>{
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onSave = (e)=>{
    e.preventDefault();
    const { txtName, txtPrice, chkbStatus} = this.state;
    const {history} = this.props;
    callApi('products', 'POST', {
      name : txtName,
      price: txtPrice,
      status: chkbStatus,
    }).then(res =>{
      history.goBack();
      //history.push('/');
    })
  }

  componentDidMount() {
    const {match} = this.props;
    if(match){
      const id = match.params.id;
      callApi(`/products/${id}`,'GET', null).then(res=>{
        const data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status
        })
      })
    }
  }
  

  render() {
    const {txtName, txtPrice, chkbStatus} = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên Sản Phẩm</label>
            <input 
              type="text" 
              className="form-control" 
              name="txtName" 
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá</label>
            <input 
              type="number" 
              className="form-control" 
              name="txtPrice" 
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trạng Thái</label>
            <div className="checkbox">
              <label>
                <input 
                  type="checkbox" 
                  name="chkbStatus" 
                  value={chkbStatus}
                  checked={chkbStatus}
                  onChange={this.onChange}
                />
                Còn Hàng
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mr-10">
            Lưu Lại
          </button>
          <Link to={"/product-list"} className="btn btn-danger">
            Trở Lại
          </Link>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
