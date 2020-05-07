import { useState, useEffect } from 'react';
import getWorldData from '../api/getWorldData';

export default () => {
    const [result, setResult] = useState([]);
    const searchData = async () => {
        try{
            const response = await getWorldData.get('');
            setResult(response.data);
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