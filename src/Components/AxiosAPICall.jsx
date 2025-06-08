import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const AxiosAPICall = () => {
    const [data, setData] = useState([]);
    const getDataOfBooks = async() => {
        const options = {
            method: 'GET',
            url: 'https://hapi-books.p.rapidapi.com/month/2024/3',
            headers: {
                'x-rapidapi-key': 'c3bfc57163mshe3e68b1a54ea4adp147dabjsn29dc6b3ea246',
                'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setData(response.data);
            
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getDataOfBooks();
     
    }, [])
    



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Title</th>
                        <th>rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((book) => (
                            <tr>
                                <td> {book.position} </td>
                                <td> {book.name} </td>
                                <td> {book.rating}  </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
            </div>
    )
}











export default AxiosAPICall