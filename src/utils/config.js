const environment = {}

const routes = {
    home: '/',
    product: '/produt'
}

environment.development = {
    routes
   }


export default environment[process.env.REACT_APP_ENV || 'development']