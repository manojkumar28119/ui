import {Component} from "react"
import Cookies from "js-cookie"
import "./index.css"
 
class SignUpForm extends Component { 
    state = {nameInput:"",numberInput:"",emailInput:"",passwordInput:"",nameErrMsg:false,numberErrMsg:false,emailErrMsg:false,passErrMsg:false}

    
    onChangeNameInput = (event) => {
        this.setState({nameInput:event.target.value})
    }

    onChangeNumberInput = (event) => {
        this.setState({numberInput:event.target.value})
    }

    onChangeEmailInput = (event) => {
        this.setState({emailInput:event.target.value})
    }

    onChangePassInput = (event) => {
        this.setState({passwordInput:event.target.value})
    }

    onBlurNameInput = (event) => {
         const {nameInput} = this.state


        nameInput.length === 0 ? this.setState({nameErrMsg:true}):this.setState({nameErrMsg:false})
    }

    onBlurNumberInput = (event) => {
        const {numberInput} = this.state

        numberInput.length === 0 ? this.setState({numberErrMsg:true}):this.setState({numberErrMsg:false})
    }

    onBlurEmailInput = (event) => { 
        const {emailInput} = this.state

        emailInput.length === 0 ? this.setState({emailErrMsg:true}):this.setState({emailErrMsg:false})
    }

    onBlurPasswordInput = (event) => {
        const {passwordInput} = this.state

        passwordInput.length === 0 ? this.setState({passErrMsg:true}):this.setState({passErrMsg:false})
    }

    onSubmitForm = (event) => {
        const {nameInput,passwordInput,numberInput,emailInput} = this.state
        event.preventDefault()
        console.log(this.state)
         
        

        if((nameInput.length !== 0)&&(passwordInput.length !== 0) && (numberInput.length !== 0) && (emailInput.length !==0)){
            const {history} = this.props
            Cookies.set("userName",nameInput,{expires:30})
            history.replace("/")
        }else{
            this.onBlurNameInput()
            this.onBlurEmailInput()
            this.onBlurNumberInput()
            this.onBlurPasswordInput()
        }
    }
 

    renderErrorMsg = () => (<p className="err-msg">*Required</p>)


    render(){
        const {nameInput,numberInput,emailInput,passwordInput,nameErrMsg,emailErrMsg,passErrMsg,numberErrMsg} = this.state
        
        console.log(nameInput)

        return (
             <div className = "signup-page">
                <h1 className="mobile-heading heading">Create Account</h1>
                 <img src = "https://res.cloudinary.com/dyvuuyt4s/image/upload/f_auto,q_auto/band5eswu8vd856mwidp" alt =  "signup form"
                 className = "signup-img" />
                <form className = "form-container" onSubmit={this.onSubmitForm}>
                    <h1 className = "desk-heading heading">Create Account</h1>
                    <input className = "input" value={nameInput} type = "text" placeholder = "Full Name" onChange={this.onChangeNameInput} onBlur={this.onBlurNameInput}  />
                    {nameErrMsg && this.renderErrorMsg()}
                    <input className = "input" value={numberInput} type = "text" placeholder = "Phone" onChange={this.onChangeNumberInput} onBlur={this.onBlurNumberInput} />
                    {numberErrMsg && this.renderErrorMsg()}
                    <input className = "input" value={emailInput}  type = "email" placeholder = "Email" onChange={this.onChangeEmailInput} onBlur={this.onBlurEmailInput} />
                    {emailErrMsg && this.renderErrorMsg()}
                    <input className = "input" value={passwordInput} type = "password" placeholder = 'Password' onChange={this.onChangePassInput}  onBlur={this.onBlurPasswordInput}/>
                    {passErrMsg && this.renderErrorMsg()}
                    <button type = "submit" className="btn" >
                        Sign Up 
                    </button>
                </form>
            </div>
         )
    }
}

export default SignUpForm