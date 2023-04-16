import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StateDropdown from "./option/StateName";
import '../../src/style/dashboard.css'

export default function Dashboard() {



  const token = localStorage.getItem("token");
  const [data, setData] = useState({});
  const navigate = useNavigate()

  // useState of all the form--

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [firmName, setFirmName] = useState('');
  const [plan, setPlan] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [gstNo, setGstNo] = useState('');
  const [categories, setCategories] = useState({
    Allopathic: false,
    Generic: false,
    SurgicalMedicalEquipment: false,
    OTC: false,
    Ayurvedic: false,
    Veterinary: false,
  });
  const [dlNo1, setDlNo1] = useState('');
  const [dlNo2, setDlNo2] = useState('');
  const [fssaiNo, setFssaiNo] = useState('');
  const [registerAs, setRegisterAs] = useState(false);
  const [bankAccountName, setBankAccountName] = useState('');
  const [bankAccountNo, setBankAccountNo] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [branch, setBranchName] = useState('');
  const [signature, setSignature] = useState(null);





  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate('/')

  }

  useEffect(() => {
    axios
      .get("/user", {
        headers: {
          authorization: `${token}`,
        },
      })
      .then(function (response) {
        setData(response.data.data);
      })
      .catch((error) => console.log(error.message));
  }, [token]);


  // category function
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };


  //data send to db

  const handleSendData = async () => {
    alert("User Data Save Successfully")
    const response = await fetch("http://localhost:4000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        mobileNo,
        firmName,
        plan,
        address,
        state,
        pinCode,
        gstNo,
        categories,
        dlNo1,
        dlNo2,
        fssaiNo,
        registerAs,
        bankAccountName,
        bankAccountNo,
        ifscCode,
        signature,
        branch,
      }),
    });

    const data = await response.json();
    console.log(data);
  }

  // upload signature
  const handleFileChange = (event) => {
    setSignature(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };



  return (
    <>
      <div className="dashboard-container">
        <div>
          <h1>Partner with us</h1>

          <div className="form-head-group">
            <div className="form-group">
              <label>FirstName</label>
              <input
                type="firstName"
                placeholder="FirstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>LastName</label>
              <input
                type="lastName"
                placeholder="LastName"
                onChange={(e) => setLastName(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
          <div className="form-head-group">
            <div className="form-group">
              <label>Email ID</label>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Mobile No.</label>
              <input
                type="mobile"
                placeholder="Mobile No."
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className="input-field"
              />
            </div>
          </div>

          <div className="form-head-group">
            <div className="form-group">
              <label>Firm Name</label>
              <input
                type="firmName"
                placeholder="FirmName"
                value={firmName}
                onChange={(e) => setFirmName(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Plan</label>
              <input
                type="plan"
                placeholder="Plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="input-field"
              />
            </div>
          </div>

          <div className="form-head-group">
            <div className="form-group">
              <label>Address</label>
              <input
                type="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label className="state-box">State</label>
              <StateDropdown
                type="state"
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
                className="select"
              />
            </div>
          </div>


          <div className="form-head-group">
            <div className="form-group">
              <label>Pin Code</label>
              <input
                type="pincode"
                placeholder="Pincode"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>GST No.</label>
              <input
                type="gstno"
                placeholder="GST No."
                onChange={(e) => setGstNo(e.target.value)}
                className="input-field"
              />
            </div>
          </div>


          <div className="form-head-group">
            <div className="form-group">
              <label>Categories</label>
              <lable className="checkbox-group">
                <input
                  type="checkbox"
                  name="Allopathic"
                /> Allopathic

                <input
                  type="checkbox"
                  name="Generic"
                /> Generic
              </lable>
              <div className="form-group">
                <lable className="checkbox-group">
                  <input
                    type="checkbox"
                    name="SurgicalMedicalEquipment"
                  /> Surgical & Medical Equipent

                  <input
                    type="checkbox"
                    name="OTC"
                  /> OTC
                </lable>
              </div>


              <lable className="checkbox">
                <input
                  type="checkbox"
                  name="Ayurvedic"
                /> Ayurvedic

                <input
                  type="checkbox"
                  name="Veterinary"
                /> Veterinary
              </lable>
            </div>
          </div>


          <div className="form-head-group">
            <div className="form-group">
              <label>DL NO1</label>
              <input
                type="dlno1"
                placeholder="DL NO1"
                value={dlNo1}
                onChange={(e) => setDlNo1(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>DL NO2</label>
              <input
                type="dlno2"
                placeholder="DL NO2"
                value={dlNo2}
                onChange={(e) => setDlNo2(e.target.value)}
                className="input-field"
              />
            </div>
          </div>


          <div className="form-head-group">
            <div className="form-group">
              <label className="lable-title">FSSAI No</label>
              <input
                type="fssaiNo"
                placeholder="FssaiNo"
                value={fssaiNo}
                onChange={(e) => setFssaiNo(e.target.value)}
                className="input-field"
              />
            </div>
          </div>


          <div className="form-head-group">
            <div className="round">
              <label className="lable-title">Register As</label>
              <input
                type="checkbox"
                name="Manufacturer"
              /> Manufacturer
              <input
                type="checkbox"
                name="Distributor"
              /> Distributor
              <input
                type="checkbox"
                name="WholeSaler"
              /> WholeSaler
              <input
                type="checkbox"
                name="Retailer"
              /> Retailer
              <input
                type="checkbox"
                name="Hospital"
              /> Hospital
            </div>
          </div>

          <div className="bank-details"><h3>Bank Details</h3></div>

          <div className="form-head-group">
            <div className="form-group">
              <label>Account Name</label>
              <input
                type="accountName"
                placeholder="Account Name"
                value={bankAccountName}
                onChange={(e) => setBankAccountName(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Account No</label>
              <input
                type="accountno"
                placeholder="Account No"
                value={bankAccountNo}
                onChange={(e) => setBankAccountNo(e.target.value)}
                className="input-field"
              />
            </div>
          </div>

          <div className="form-head-group">
            <div className="form-group">
              <label>IFSC Code</label>
              <input
                type="ifsc"
                placeholder="IFSC Code"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Branch</label>
              <input
                type="branch"
                placeholder="Branch"
                value={branch}
                onChange={(e) => setBranchName(e.target.value)}
                className="input-field"
              />
            </div>
          </div>


          <div className="form-group">
            <label htmlFor="signature">Upload Signature:</label>
            <input
              type="file"
              id="signature"
              name="signature"
              accept=".jpg,.png"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-group-term">
            <div className="term-condition">

              <input
                type="checkbox"
                name="tnc"
              /></div> 
               <div className="term-link-head"> &nbsp; Please tick the box to accept our <span className="term-link">Terms & Conditions </span >and <span className="term-link">Privacy Policy.</span>
              

            </div>
          </div>
          <p></p>
          <div className="btn">
            <button onClick={handleSendData}>Register User</button>
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        </div>

      </div>








    </>
  );
}
