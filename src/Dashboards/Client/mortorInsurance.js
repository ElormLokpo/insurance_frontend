import React from 'react'

const MotorInsurance = ()=>{
  return (
    <div id = 'forms'>
            <div id = 'apply-form'>
            
            <h3>Apply for Motor Insurance</h3>
            <form>
                <label>License Type:</label>
                <select class = 'form-control'>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>F</option>
                </select>
        

                <label>Years of driving:</label>
                <input type = 'text' class = 'form-control' />
                
                <label>Premium:</label>
                <input type = 'text' class = 'form-control' />

                <label>Insurance Form</label>
                <input type = 'file' class = 'form-control' />

                <label>RC Bood:</label>
                <input type = 'file' class = 'form-control' />

                <label>Identity Proof:</label>
                <input type = 'file' class = 'form-control' />

                <label>Electricity Bill:</label>
                <input type = 'file' class = 'form-control' />

                <label> Date:</label>
                <input type = 'file' class = 'form-control' />

                <button class = 'sub-btn'>Apply</button>

            </form>
            
            </div>

            <div id = 'apply-form'>
                <h3>Make Claim : Motor Insurance</h3>
            <form>
                <label>Claim Form:</label>
                <input type = 'file' class = 'form-control' />

                <label>Policy Document:</label>
                <input type = 'file' class = 'form-control' />
                
                <label>Chassis Number:</label>
                <input type = 'text' class = 'form-control' />

                <label>FRI Copy:</label>
                <input type = 'text' class = 'form-control' />

                <label>Loss Incured:</label>
                <input type = 'text' class = 'form-control' />

                <label>Vehicle Tax Receipt:</label>
                <input type = 'file' class = 'form-control' />

                <label>Registration Certificate:</label>
                <input type = 'text' class = 'form-control' />

                <label>Repair Bill:</label>
                <input type = 'text' class = 'form-control' placeholder = 'GHS' />

                <label>Surveyor Report:</label>
                <input type = 'file' class = 'form-control' />

                <label>Police NonTraceable Certificate:</label>
                <input type = 'file' class = 'form-control' />

                <label>Accident Case:</label>
                <input type = 'file' class = 'form-control' />

                <label>Witness:</label>
                <input type = 'file' class = 'form-control' />

                <label>Claim Reference:</label>
                <input type = 'text' class = 'form-control' />
                
                <button class = 'sub-btn'>Make Claim</button>
            </form>
            
            </div>
        </div>
  )
}

export default MotorInsurance;