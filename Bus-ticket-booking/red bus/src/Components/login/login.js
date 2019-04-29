import React, { Component } from 'react'

class Login  extends Component {


constructor(props) {
      super(props)
      this.state = {
      }
}


render() {
     return (
          <div>
              <form>
                    <span className="login100-form-title">
						Member Login
					</span>
                    <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" placeholder="Email"/>
                        <input class="input100" type="password" name="pass" placeholder="Password"/>
					</div>
                    <div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>
              </form>
                    <a class="txt2" href="#">
                        Create your Account
                        <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                    </a>
          </div>
            )
         }
}

export default  Login;