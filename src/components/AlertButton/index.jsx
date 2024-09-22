import './index.css'

const Button = ({ label }) => {
    return <button className="btn" 
                   onClick={() => alert(`a label desse botão é ${label ?? ""}`)}>{label}
    </button>

}

export default Button