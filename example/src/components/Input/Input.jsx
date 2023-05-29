import './Input.scss';

function Input({ dataid, label, type, customClass, name, handleChange, defaultValue, disabled }) {
    return (
        <section className='input'>
            <label className='input__label'>{ label }</label>
            <input type={ type } 
                data-id={ dataid }
                className={ `input__field ${customClass ? customClass : ""}` }
                name={ name }
                onChange={ handleChange }
                defaultValue={ defaultValue ? defaultValue : '' }
                disabled={ disabled }
            />
        </section>
    )
}

export default Input;