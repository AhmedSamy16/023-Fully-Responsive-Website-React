import "./button.css"

const STYLES = ['btn-primary', 'btn-outline']
const SIZES = ['btn-medium', 'btn-large']

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
        <a href='/sign-up' className='btn-mobile'>
            <button type={type} onClick={onClick} className={`btn ${checkSize} ${checkStyle}`}>
                {children}
            </button>
        </a>
    )
}

export default Button