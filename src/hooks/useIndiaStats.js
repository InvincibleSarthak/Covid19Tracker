import { useState, useEffect } from 'react';
import http_get from '../components/http_get'

export default () => {
    const [result, setResult] = useState([]);
    const searchData = async () => {
        try{
            const response = await http_get.get('');
            setResult(response.data.statewise);
        }
        catch(err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        searchData();
    }, []);
    return [result];
};