
import './index.css'

const UpperCaseText = (props) => {
    return <p className='text'
              style={{ color: 'blue' }}>{props.text.toUpperCase()}
    </p>
}

export default UpperCaseText