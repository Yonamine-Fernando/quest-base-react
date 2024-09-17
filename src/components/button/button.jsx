import './button.css'

const showLabelButton = (label) => {
    alert(`A label desse botão é ${label ?? ""}`)
}

const Button = ({ label }) => {
    return (
        <>
            <button
                className="btn"
                onClick={() =>
                    showLabelButton(label)}>{label}
            </button>
        </>
    )
}

export default Button