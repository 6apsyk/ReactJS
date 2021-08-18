import PropTypes from 'prop-types'

function Warning ({input}){
    return  <div>{input.length > 0 ? '' : 'Пустое сообщение! Введите хоть что то для отправки'}</div>
}

export default Warning

Warning.protoTypes = {
    input : PropTypes.string.isRequired,
}