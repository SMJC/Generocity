/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class EditItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Edit Item
        {/* item details input */}
        <form>
          {/** ------- Item Title -------- */}
          <div className="form-group row loginAndSignUp">
            <label className="col-sm-2 col-form-label col-form-label-lg" htmlFor="colFormLabelLg">
              Item Title
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control-lg"
                id="colFormLabelLg"
                name="itemTitle"
                placeholder="Change Title"
                type="email"
                onChange={(e) => this.props.handleChange(e)}
              />
            </div>
          </div>
          {/** ------- Item Description -------- */}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="colFormLabel">
              Description
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                id="colFormLabel"
                name="itemDescription"
                placeholder="Revise Item Description"
                type="email"
                onChange={(e) => this.props.handleChange(e)}
              />
            </div>
          </div>
          {/** ------- Category -------- */}

          <div className="form-group row">
            <label
              className="col-sm-2 col-form-label col-form-label-md"
              htmlFor="exampleFormControlSelect1"
            >
              Category
            </label>
            <div className="col-sm-10">
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="itemCategory"
                onChange={(e) => this.props.handleChange(e)}
              >
                <option>Furniture</option>
                <option>Sports</option>
                <option>Kitchen</option>
                <option>Clothing</option>
                <option>Appliances</option>
              </select>
            </div>
          </div>
          {/** ------- Pickup Address -------- */}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label col-form-label-md" htmlFor="colFormLabelSm">
              Pickup address:{' '}
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control-sm"
                id="colFormLabelSm"
                name="itemAddress"
                placeholder="Revise pickup address"
                type="email"
                onChange={(e) => this.props.handleChange(e)}
              />
            </div>
          </div>

          {/* image input */}
          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                className="custom-file-input"
                id="inputGroupFile02"
                name="itemImage"
                type="file"
                onChange={(e) => this.props.handleFileChange(e)}
              />
              <label
                aria-describedby="inputGroupFileAddon02"
                className="custom-file-label"
                htmlFor="inputGroupFile02"
              >
                Choose file
              </label>
            </div>
            <div className="input-group-append">
              <span className="input-group-text" id="inputGroupFileAddon02">
                Upload
              </span>
            </div>
          </div>
        </form>
        {/* end component div */}
      </div>
    );
  }
}

export default EditItem;
