import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return(
        <div className='errorPage'>
            <h1>Error Occured!</h1>
            <p>Oh, No. There is an unexprected error. Trying to fixing in any moment.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;