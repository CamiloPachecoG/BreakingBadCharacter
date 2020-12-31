import { useState, useEffect }from 'react';

export const useFetch = (url) => {
    
    const [state, setState] = useState({ data: null, error: null });    

    useEffect(() => {

        setState({ data:null, error: null}); //Para que cuando ponga next salga el loading

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                setState({
                    error: null,
                    data
                })
            });

    }, [url])

    return state;
}