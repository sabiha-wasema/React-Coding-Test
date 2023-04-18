import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  //mychanges
  const [inputValue, setInputValue] = useState([
    {
      name: "",
      status: ""
    }
  ]);
  const [inputArr, setInputArr] = useState([]);

  //mediusware
  const handleClick = val => {
    setShow(val);
  };

  // my changes
  let { name, status } = inputValue;
  const handleSubmit = () => {
    event.preventDefault();
    setInputArr([...inputArr, { name, status }]);
    console.log(inputArr);
    console.log(inputValue);
    setInputValue({ name: "", status: "" });
  };

  const handleinputchange = e => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={inputValue.name}
                onChange={handleinputchange}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
                value={inputValue.status}
                onChange={handleinputchange}
              />
            </div>
            <div className="col-auto">
              <button
                // onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content" />
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {inputArr.map((info, ind) => {
              return (
                <tr key={ind}>
                  <td>
                    {info.name}
                  </td>
                  <td>
                    {info.status}
                  </td>
                </tr>
              );
            })}
            <tbody />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
