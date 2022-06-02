import React from 'react'

const healthInsurance = (props)=>{
  return (
        <div id = 'forms'>
            <div id = 'apply-form'>
            
            <h3>Apply for Health Insurance</h3>
            <form>
                <label>Application Form:</label>
                <input type = 'file' class = 'form-control' />

                <label>Statement of Health Form:</label>
                <input type = 'file' class = 'form-control' />
                
                <label>Birth Certificate:</label>
                <input type = 'file' class = 'form-control' />

                <label>Passport:</label>
                <input type = 'file' class = 'form-control' />

                <label>Voiting Id:</label>
                <input type = 'text' class = 'form-control' />

                <label>Driver's License:</label>
                <input type = 'file' class = 'form-control' />

                <label>Electricity Bill:</label>
                <input type = 'file' class = 'form-control' />

                <label> Date:</label>
                <input type = 'file' class = 'form-control' />

                <button class = 'sub-btn'>Apply</button>

            </form>
            
            </div>

            <div id = 'apply-form'>
                <h3>Make Claim : Health Insurance</h3>
            <form>
                <label>Claim Form:</label>
                <input type = 'file' class = 'form-control' />

                <label>Discharge Card:</label>
                <input type = 'file' class = 'form-control' />
                
                <label>Doctors Report:</label>
                <input type = 'file' class = 'form-control' />

                <label>Hospital bill:</label>
                <input type = 'file' class = 'form-control' />

                <label>X-ray film:</label>
                <input type = 'file' class = 'form-control' />

                <label>Other documents:</label>
                <input type = 'file' class = 'form-control' />
            
                    <button class = 'sub-btn'>Make Claim</button>
            </form>
            
            </div>
        </div>
  )
}

export default healthInsurance