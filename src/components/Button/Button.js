import './Button.css'

const Button = ({content, clases}) => {
    
    return (
        <button className={clases}>{content}</button> 
    )
    
}

export default Button