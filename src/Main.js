import React, { useState } from 'react'

export default function Main() {
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');


    const [eusername, seteusername] = useState('');
    const [eemail, seteemail] = useState('');
    const [epassword, setepassword] = useState('');
    const [ecpassword, setecpassword] = useState('');

    const [ucolor, setucolor] = useState('');
    const [ecolor, setecolor] = useState('');
    const [pcolor, setpcolor] = useState('');
    const [cpcolor, setcpcolor] = useState('');


    function validate() {
        if (username.length > 7) {
            seteusername('')
            setucolor('green')
        }
        else {
            seteusername('username must be 8 letters long')
            setucolor('red')
        }
        if (email.includes('@gmail')) {
            seteemail('')
            setecolor('green')
        }
        else {
            setecolor('red')
            seteemail('email should have @gmail')
        }

        if (password.length > 7 && password.includes('.')) {
            setepassword('')
            setpcolor('green')
        }
        else {
            setepassword('password should be 8 letters long and it should have .')
            setpcolor('red')
        }

        if (password == cpassword && password != '') {
            setecpassword('')
            setcpcolor('green')
        }
        else {
            setecpassword('password not matched')
            setcpcolor('red')
        }
    }


    return (

        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1>Form Validation</h1>
                    <input type="text" placeholder="username" className="form-control" value={username} onChange={(e) => { setusername(e.target.value) }} style={{ borderColor: ucolor }} />
                    <p>{eusername}</p>

                    <input type="text" placeholder="email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} style={{ borderColor: ecolor }} />
                    <p>{eemail}</p>

                    <input type="text" placeholder="password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} style={{ borderColor: pcolor }} />
                    <p>{epassword}</p>

                    <input type="text" placeholder="cpassword" className="form-control" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} style={{ borderColor: cpcolor }} />
                    <p>{ecpassword}</p>

                    <button className="btn btn-success" onClick={validate}>Submit</button>
                </div>
            </div>

        </div>

    )
}
