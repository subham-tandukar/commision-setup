import React from "react";
import { useState } from "react";
import NewFormTable from "./NewFormTable";

const initialData = {
  operator1: "",
  commission1: "",
  rate1: "",
  operator2: "",
  commission2: "",
  rate2: "",
  operator3: "",
  commission3: "",
  rate3: "",
  operator4: "",
  commission4: "",
  rate4: "",
};

const FormTable = () => {
  const [tableData, setTableData] = useState(initialData);
  const [newData, setNewData] = useState([]);
  // const data = [];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTableData(() => {
      return {
        ...tableData,
        [name]: value,
      };
    });
    // localStorage.setItem("userData", JSON.stringify([...data, tableData]));
    // const newName = (data) => ({ ...data, [e.target.name]: e.target.value });

    // setTableData(newName);
  };

  const handleSubmit = () => {
    setNewData([tableData]);
    // const getData = localStorage.getItem("userData");

    // const getValue = JSON.parse(getData);
    // console.log(getValue);
    // setNewData(getValue);

    // if (!tableData) {
    // } else {
    //   setNewData([...newData, tableData]);
    //   setTableData("");
    // }

    // const checkEmptyInput = !Object.values(tableData).every(
    //   (res) => res === ""
    // );
    // if (checkEmptyInput) {
    //   const newData = (data) => [...data, tableData];
    //   setNewData(newData);
    //   const emptyInput = { name: "" };
    //   setTableData(emptyInput);
    // }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <table className="table table-striped">
            <thead>
              <tr className="tableHead">
                <td className="tc">S.N.</td>
                <td className="tc">Operator</td>
                <td className="tl">Comm. Type</td>
                <td className="tl">Rate</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="operator1"
                    value={tableData.operator1}
                    autoComplete="off"
                  />
                </td>
                <td>
                  <select name="commission1"  onChange={(e) => handleChange(e)}  value={tableData.commission1}>
                    <option>select value</option>
                    <option>value1</option>
                    <option>value2</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => handleChange(e)}
                    name="rate1"
                    value={tableData.rate1}
                    autoComplete="off"
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="operator2"
                    value={tableData.operator2}
                    autoComplete="off"
                  />
                </td>
                <td>
                <select name="commission2"  onChange={(e) => handleChange(e)}  value={tableData.commission2}>
                    <option>select value</option>
                    <option>value1</option>
                    <option>value2</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => handleChange(e)}
                    name="rate2"
                    value={tableData.rate2}
                    autoComplete="off"
                  />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="operator3"
                    value={tableData.operator3}
                    autoComplete="off"
                  />
                </td>
                <td>
                <select name="commission3"  onChange={(e) => handleChange(e)}  value={tableData.commission3}>
                    <option>select value</option>
                    <option>value1</option>
                    <option>value2</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => handleChange(e)}
                    name="rate3"
                    value={tableData.rate3}
                    autoComplete="off"
                  />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="operator4"
                    value={tableData.operator4}
                    autoComplete="off"
                  />
                </td>
                <td>
                <select name="commission4"  onChange={(e) => handleChange(e)}  value={tableData.commission4}>
                    <option>select value</option>
                    <option>value1</option>
                    <option>value2</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => handleChange(e)}
                    name="rate4"
                    value={tableData.rate4}
                    autoComplete="off"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>

        <div className="col-6">
          <NewFormTable newData={newData} />
        </div>
      </div>
    </div>
  );
};

export default FormTable;
