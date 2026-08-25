import { useState } from "react";

function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [contacts, setContacts] = useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        const newContact = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        };

        setContacts([...contacts, newContact]);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
    }
    return (
        <div className="container">
            <div className="card">
                <h1>Contact Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" placeholder='Enter your first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder='Enter your last name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder='Enter your phone number' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>


                    <button type="submit">Add Contact</button>
                </form>

                <div className="contact-list">
                    {contacts.map((contact, index) => (
                        <div className="contact" key={index}>
                            <h3>
                                {contact.firstName} {contact.lastName}
                            </h3>

                            <p>Phone: {contact.phone}</p>
                            <p>Email: {contact.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
export default ContactForm;
