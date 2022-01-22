import React from 'react'

const Messages = () => {
    return (
        <main>
            <div className='cards'>
            <h2>Messages</h2>
                <hr/>
                <div className='no-orders'>
                    <p>You have no message yet!</p>
                    <p>All your message will be placed here for you to access their state anytime.</p>
                    <button>Continue Shopping</button>
                </div>
            </div>
        </main>
    )
}

export default Messages