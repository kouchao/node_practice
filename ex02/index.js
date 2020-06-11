module.exports.compose = middlewares => {
    return function () {
        return dispatch(0)
        function dispatch(i) {
            middlewares[i] && middlewares[i](() => dispatch(i + 1))
        }
    }
}