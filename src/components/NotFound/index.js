import Header from "../Header" 

import "./index.css"



const NotFound = () => (
    <div>
        <Header/>
        <div className="not-found-card">
            <img className="not-found-img" src = "https://assets.ccbp.in/frontend/react-js/not-found-img.png" alt = "not found" />
            <h1 className="not-found-heading">Lost Your Way</h1>
            <p className="not-found-text">sorry,we can't find that page. you'll find lots to explore on the home page</p>
        </div>
    </div>
)

export default NotFound