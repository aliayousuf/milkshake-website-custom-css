// pages/Contact.js

import "./contact.css";
import React from 'react';

const Contact = () => {
    return (
        <div className="contact-form-container">
            <h2>Order Your Milkshake</h2>
            <form action="#" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="flavor">Milkshake Flavor:</label>
                <select id="flavor" name="flavor" required>
                    <option value="">Select a flavor</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="vanilla">Vanilla</option>
                    <option value="strawberry">Strawberry</option>
                    <option value="mint">Mint</option>
                </select>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default Contact;