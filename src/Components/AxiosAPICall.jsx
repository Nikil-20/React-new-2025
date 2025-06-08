import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const AxiosAPICall = () => {
    const [data, setData] = useState([]);
    const getDataOfBooks = async() => {
        const options = {
            method: 'GET',
            url: 'https://freebooks-api2.p.rapidapi.com/fetchEbooks/horror/2',
            headers: {
                'x-rapidapi-key': '0b4d1e136amsh2dac5076bb7e6e2p1a148bjsna573089b103f',
                'x-rapidapi-host': 'freebooks-api2.p.rapidapi.com'
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
                        <th>Lanuage</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((book,index) => (
                            <tr>
                                <td> {index + 1} </td>
                                <td> {book.title} </td>
                                <td> {book.language}  </td>
                                <td> {book.year} </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>

            <h1> hi go to rapid api website take aa api of any book then subscribe it then copy code of javascript and axiosapi of that api and paste above   </h1>
            </div>
    )
}











export default AxiosAPICall