import className from "classnames";

// const finalClassName = ({
//     'bg-blue-400': true,
//     'bg-yellow-400': false,
// });

// console.log(finalClassName);

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

    const classes = className('flex items-center px-4 py-1.5 border', {
        'border-blue-600 bg-blue-500 text-white': primary,
        'border-gray-600 bg-gray-500 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-600 bg-yellow-500 text-white': warning,
        'border-red-600 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-600': outline && success,
        'text-yellow-600': outline && warning,
        'text-red-600': outline && danger,
    });

    return (
        <div>
            <button className={classes}>
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