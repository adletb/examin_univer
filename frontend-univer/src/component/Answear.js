import React, { Fragment, useState } from 'react'


const Answear = ({test, getTests}) => {
  const [answear, setAwswear] = useState('')

  const saveAnswear = async e => {
    e.preventDefault();

    try {
             
       const response = await fetch(`http://localhost:8080/ansewar/${test.id}`, {
         method: "PUT",
         headers: {"Content-Type": "application/text"},
         body: answear
       } )

       console.log(response)
    } catch (err) {
      console.log(err.message);
    }
   
    getTests()
    // window.location = "/students"
  }
  
  return (
    <Fragment>

      <button type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${test.id}`}
      >Write Answear
            </button>

      <div className="modal" id={`id${test.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">Answear</h4>
              <button type="button"
                className="close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input type="text" value={answear} className="form-control"
              onChange={e => setAwswear(e.target.value)} />
                </div>

            <div className="modal-footer">
              <button type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => saveAnswear(e)}
              >
                Save
              </button>
              <button type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >Close</button>
            </div>

          </div>
        </div>
      </div>

    </Fragment>)
}

export default Answear
