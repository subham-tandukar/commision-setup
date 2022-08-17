import React from "react";

const NewFormTable = (props) => {
  return (
    <>
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
          {props.newData.map((data) => {
            return (
              <>
                <tr>
                  <td>1</td>
                  <td>{data.operator1}</td>
                  <td>{data.commission1}</td>
                  <td>{data.rate1}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>{data.operator2}</td>
                  <td>{data.commission2}</td>
                  <td>{data.rate2}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>{data.operator3}</td>
                  <td>{data.commission3}</td>
                  <td>{data.rate3}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>{data.operator4}</td>
                  <td>{data.commission4}</td>
                  <td>{data.rate4}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default NewFormTable;
