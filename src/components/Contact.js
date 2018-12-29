import React from 'react'

const Contact = (props) => {
    console.log(props);
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi adipisci, quo eveniet, excepturi, aperiam recusandae ab corporis veritatis asperiores at necessitatibus? Quisquam maiores porro ipsam doloremque a iste? Aspernatur, facere.</p>
        </div>
    )
}

export default Contact;