import validator from 'email-validator';
import { useState } from "react";
import { collection, db, doc, setDoc } from "../../firebase";
import { Button } from "../shared/Button/Button";
import { TextArea, TextInput } from "../shared/Inputs/Input";
import Spinner from "../shared/Spinner/Spinner";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const updateInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, message } = formData;
        if (!validator.validate(email)) {
            return setError("Enter a valid email address");
        }
        if (!name || !email || !message)
            return setError("Please fill all the fields");
        setError("");
        setLoading(true);
        await sendEmail();
        setFormData({
            name: "",
            email: "",
            message: "",
        });
        setLoading(false);
        setSubmitted(true);
    };
    const sendEmail = async () => {
        try {

            const messageCollection = collection(db, 'messages');
            await setDoc(doc(messageCollection), formData);
        } catch (err) {
            console.log(err);
        }
    };

    if (submitted)
        return (
            <div className={styles.thankYouContainer}>
                <h1>Thank you for contacting me!</h1>
                <h2>Will get back to you soon</h2>
            </div>
        );

    if (loading) return <Spinner />;

    return (
        <div className={styles.formContainer}>
            <h1>Some message for me?</h1>


            <form className={styles.form} onSubmit={handleSubmit}>
                <TextInput
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={updateInput}
                    value={formData.name || ""}
                />
                <TextInput
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={updateInput}
                    value={formData.email || ""}
                />

                <TextArea
                    name='message'
                    placeholder='Message'
                    onChange={updateInput}
                    value={formData.message || ""}
                />
                {error && <p>{error}</p>}
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    );
};

export default ContactForm;
