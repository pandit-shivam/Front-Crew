import React from 'react'
import { useFormik } from 'formik';
import { MDBInput } from 'mdb-react-ui-kit';

const Sign_up = () => {

  const signupform = useFormik({
    initialValues: {
      name: '',
      Last: '',
      email: '',
      password: '',
    },
    useFormik: values => (console.log(values))
  })
  return (
    <div>

      <>
        {/* Section: Design Block */}
        <section className="text-center text-lg-start bg-black ">
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
                  <div className="card-body p-5 shadow-5 text-center">
                    <h2 className="fw-bold mb-5">Sign up now</h2>


                    <form onSubmit={signupform.handleSubmit}>
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <MDBInput label='First Name' id='name' type='text' value={signupform.values.name}
                            onChange={signupform.handleChange} />
                        </div>
                        <div className="col-md-6 mb-4">
                          <MDBInput label='Last Name' id='Last' type='text' value={signupform.values.Last}
                            onChange={signupform.handleChange} />
                        </div>
                      </div>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <MDBInput label='Email' id='email' type='email' value={signupform.values.email}
                          onChange={signupform.handleChange} />
                      </div>
                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <MDBInput label='Password' id='password' type='text' value={signupform.values.password}
                          onChange={signupform.handleChange} />

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
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
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