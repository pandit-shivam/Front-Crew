import React from 'react'
import { useFormik } from 'formik';
import { MDBInput } from 'mdb-react-ui-kit';
import * as Yup from 'yup';
import app_config from '../../config';
import Swal from 'sweetalert2';
import './Signupstyle.css';


const SignupSchema=Yup.object().shape({
  firstname:Yup.string()
  .min(2,'Too short!')
  .max(50,'Too Long!')
  .required('required'),
  lastname:Yup.string()
  .min(2,'Too short!')
  .max(50,'Too Long!')
  .required('required'),
  email:Yup.string().email('invalid email').required('required'),
  password:Yup.string().required('password is required')
});

const Sign_up = () => {

  const {themeColorLight} = app_config;

  const signupform = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },

    onSubmit: async values => {
      console.log(values);
      const res = await fetch('http://localhost:5000/user/add',{
          method: 'post',
          body: JSON.stringify(values),
          headers:{'Content-Type':'application/json'}
        })

        console.log(res.status)

        if(res.status===200){
          Swal.fire({
            icon:'success',
            title:'success',
            text:'user Registered Successfully'
          })
        }

    },
    validationSchema : SignupSchema

  })
  return (
    <div style={{backgroundColor: themeColorLight}}>

      <>
        {/* Section: Design Block */}
        <section className="text-center text-lg-start">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
            }}
          />
          {/* Jumbotron */}

          <div className="container py-4 ">
            <div className="row g-0 align-items-center mb-5 ">
              <div className="col-lg-6 mb-5 mb-lg-5 bg-secondary">

                <div
                  className="card cascading-right"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)"
                  }}
                >
                  <div className="card-body p-5 shadow-5">
                    <h2 className="head3">Sign up now</h2>


                    <form onSubmit={signupform.handleSubmit}>
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <MDBInput label='First Name' id='firstname' type='text' value={signupform.values.firstname}
                            onChange={signupform.handleChange} />
                            {/*this statement is used for form validation */}
                            <p className='m-0 text-danger'>{signupform.errors.firstname}</p>
                        </div>
                        <div className="col-md-6 mb-4">
                          <MDBInput label='Last Name' id='lastname' type='text' value={signupform.values.lastname}
                            onChange={signupform.handleChange} />
                            {/*this statement is used for form validation */}
                            <p className='m-0 text-danger'>{signupform.errors.lastname}</p>
                        </div>
                      </div>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <MDBInput label='Email' id='email' type='email' value={signupform.values.email}
                          onChange={signupform.handleChange} />
                          {/*this statement is used for form validation */}
                          <p className='m-0 text-danger'>{signupform.errors.email}</p>
                      </div>
                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <MDBInput label='Password' id='password' type='text' value={signupform.values.password}
                          onChange={signupform.handleChange} />
                          {/*this statement is used for form validation */}
                          <p className='m-0 text-danger'>{signupform.errors.password}</p>

                      </div>
                      {/* Checkbox */}
                      <div className="form-check d-flex justify-content-center mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="form2Example33">
                          Subscribe to our newsletter
                        </label>
                      </div>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Sign up
                      </button>
                      {/* Register buttons */}
                      <div className="text-center">
                        <p>or sign up with:</p>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-facebook-f" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-google" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-twitter" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-github" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                <img
                  src="https://images.all-free-download.com/images/graphiclarge/adventure_travel_poster_boat_stream_sketch_cartoon_design_6854307.jpg"
                  className="w-100 rounded-4 shadow-4"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section>
        {/* Section: Design Block */}
      </>

    </div>
  )
}

export default Sign_up