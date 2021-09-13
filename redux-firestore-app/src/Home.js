import React, { useState, useEffect} from 'react';
import { MDBContainer, MDBRow, MDBCol,MDBInput,MDBBtn,MDBTypography } from 'mdb-react-ui-kit';

const initialState = {
    name:"",
    contact:"",
    email:"",
    address:""
}

const Home = () => {
    const[state, setstate] = useState(initialState); 

    const{Name, contact, email, address}= state;

    const handleInputChange = () => {}
    const handleSubmit = () => {};
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol md="8">
                    <h2>Table</h2>
                </MDBCol>
                <MDBCol md="4">
                    <form onSubmit={handleSubmit}>
                        <MDBInput
                        lable="Name"
                        value={Name}
                        name="Name"
                        type="text"
                        onChange={handleInputChange}
                        />
                        <br />
                        <MDBInput
                        lable="email"
                        value={email}
                        name="email"
                        type="email"
                        onChange={handleInputChange}
                        />
                        <br />
                        <MDBInput
                        lable="contact"
                        value={contact}
                        name="contact"
                        type="number"
                        onChange={handleInputChange}
                        />
                        <br />
                        <MDBInput
                        lable="address"
                        value={address}
                        name="address"
                        type="text"
                        onChange={handleInputChange}
                        />
                        <br />
                        <MDBBtn style={{width:"100px"}} color="success" type="submit">
                            Submit
                        </MDBBtn>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );

};

export default Home;