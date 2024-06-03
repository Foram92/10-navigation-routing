//import PropTypes from 'prop-types';
import className from 'classnames';

const finalClassName = className ( {
    'bg-blue-400': true,
    'bg-yellow-400': true,
});

console.log(finalClassName);

function Button ({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
 }) {
    return (
        <div>
            <button className='px-3 py-1.5 border border-blue-600 bg-blue-400 text-white'>
                { children }
            </button>
        </div>
    )
}

Button.propTypes = {
    checkValidation: ({ primary, secondary, success, warning, danger }) => {

    const count = 
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger);

        if ( count > 1 ) {
            return new Error ("only one prop can be true!");
        }
    },
};

export default Button;

// Number(true) = 1
// Number(undefined) = NaN
// Number(!!undefined) = 0
// !!undefined = false
// Number(false) = 0
