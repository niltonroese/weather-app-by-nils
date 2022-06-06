import { useState } from "react"
import ProfilePic from '../Images/ProfilePic.png'

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const details = { name, email }
        const requestMethod = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        };
        fetch('http://localhost:2004/Contact', requestMethod)
        .then( (resp) => {    
                setName("")
                setEmail("")
        })        
    };

    return (
        <div className="card text-white text-center border-0">
            <img src={ProfilePic} className="card-img opacity-100" alt="Author" height={681} width={523} />
            <div className="card-img-overlay">
                <div className="bg-dark bg-opacity-50 py-1">
                    <h2>Subscribe for daily forecasts!
                        <hr />
                        <hr />
                    </h2>
                    <form className="form-group" onSubmit={handleSubmit}>
                        <label for="InputName" className="form-label">Name</label>
                        <input className="form-control" type="text" placeholder="Enter full name" name="name"
                            // name="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                        <br />
                        <label for="InputEmail" className="form-label">Email address</label>
                        <input className="form-control" type="email" placeholder="Enter email" name="email"
                            // name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <br />
                        <button className="btn btn-primary mb-3" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}