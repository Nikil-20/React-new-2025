import React, { useState, useEffect } from 'react'

const APICall = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getPosts();
    }, [data])

    const getPosts = async () => {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts');
            const actualData = await result.json();
            setData(actualData);
            console.log(actualData)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <table className='min-w-full divide-y divide-gray-200 border border-gray-300 shadow-md rounded-md'  >
                <thead>
                    <tr>
                        <th className='px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-black-400' >UserID</th>
                        <th className='px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-black-400' >ID</th>
                        <th className='px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-black-400' >Title</th>
                        <th className='px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-black-400' >Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((post) => (
                            <tr>
                                <td className='px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-black-400' > {post.userId}  </td>
                                <td className='px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-black-400' > {post.id}  </td>
                                <td className='px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-black-400' > {post.title}  </td>
                                <td className='px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-black-400' > {post.body} </td>

                            </tr>



                        ))
                    }

                </tbody>
            </table>


        </div>
    )
}

export default APICall