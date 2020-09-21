import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class AddItem extends Component {
  render() {
    return (
      <div>
        {/* item details input */}
        <form>
          {/** ------- Item Title -------- */}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label col-form-label-lg" htmlFor="colFormLabelLg">
              Item Name
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control-lg"
                id="colFormLabelLg"
                name="itemTitle"
                placeholder="Enter Item Name"
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
                x
                className="form-control"
                id="colFormLabel"
                name="itemDescription"
                placeholder="Enter Item Description"
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
                <option>Select a Category</option>
                <option>Appliances</option>
                <option>Plants</option>
                <option>Sports</option>
                <option>Clothing</option>
                <option>Books</option>
                <option>Miscellaneous</option>
              </select>
            </div>
          </div>
          {/** ------- Pickup Address -------- */}
          {/* <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-md">
              Pickup address:{' '}
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="Where can others find this item?"
                name="itemAddress"
                onChange={(e) => this.props.handleChange(e)}
              ></input>
            </div>
          </div> */}

          {/* image input */}
          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                className="form-control form-control-lg"
                id="colFormLabelLg"
                name="itemImage"
                placeholder="Image Here"
                type="text"
                onChange={(e) => this.props.handleFileChange(e)}
              />
              {/* <input
                type="text"
                className="custom-file-input"
                id="inputGroupFile02"
                name="itemImage"
                onChange={(e) => this.props.handleFileChange(e)}
              ></input> */}
              {/* <label
                className="custom-file-label"
                htmlFor="inputGroupFile02"
                aria-describedby="inputGroupFileAddon02"
              >
                Choose file
              </label>
            </div>
            <div className="input-group-append">
              <span className="input-group-text" id="inputGroupFileAddon02">
                Upload
              </span> */}
            </div>
          </div>
        </form>
        {/* end component div */}
      </div>
    );
  }
}

export default AddItem;
