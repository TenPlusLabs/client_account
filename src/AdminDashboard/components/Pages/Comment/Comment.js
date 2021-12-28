import React from 'react'
import img from '../../../../assets/lana.jpg'
import './Comment.css'

const Comment = () => {
    return (
        <main>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <td>File</td>
                                <td>Author</td>
                                <td>Uploaded to</td>
                                <td><i className='las la-comment'></i></td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={img} alt='' className='img-fluid comment-img'/>
                                </td>
                                <td>AJAPswenky</td>
                                <td>Sample post</td>
                                <td>0</td>
                                <td>2021/05/05</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={img} alt='' className='img-fluid comment-img'/>
                                </td>
                                <td>AJAPswenky</td>
                                <td>Sample post</td>
                                <td>0</td>
                                <td>2021/05/05</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={img} alt='' className='img-fluid comment-img'/>
                                </td>
                                <td>AJAPswenky</td>
                                <td>Sample post</td>
                                <td>0</td>
                                <td>2021/05/05</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Comment
