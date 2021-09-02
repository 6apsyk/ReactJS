import PropTypes from 'prop-types';

const Warning = ({input}) => {
    return  <div>{input.length > 0 ? '' : 'Пустое сообщение! Введите хоть что то для отправки'}</div>
}

export default Warning;

Warning.propTypes = {
    input : PropTypes.string.isRequired,
};