import PropTypes from 'prop-types';

const WithOptionalProps = ({req, opt}) => {
    let handleClick = () => {};

    if (opt) {
        handleClick = opt;
    }

    return <div onClick={handleClick}>Hello {req}</div>;
}

WithOptionalProps.propTypes = {
    req: PropTypes.string.isRequired,
    opt: PropTypes.func,
};

export default WithOptionalProps;