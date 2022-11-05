import { useState, useEffect } from "react";

export const useAsync = (asyncFn, dependencies) => {

    const [data, setData] = useState()
    const [error, setError] = useState()
    const [spinner, setSpinner] = useState(true)

    if(!Array.isArray(dependencies)) {
        dependencies = []
    }

    useEffect (() => {
        setSpinner(true)

        asyncFn()
            .then(data => {
                setData(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally (() => {
                setSpinner(false)
            })
        
    }, [...dependencies]) // eslint-disable-line

    return {
        data,
        error,
        spinner
    }

}