import { useState } from "react";

export const FooterComponent = () => {
  const [feedback, setFeedback] = useState("");
  const [contacts, setContacts] = useState("");

  const handleSendResponse = async () => {
    const emailRequest = {
      message: feedback,
      contacts: contacts
    };

    try {
      const response = await fetch(
        "https://api-send-email-46gw.onrender.com/api/send/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(emailRequest)
        }
      );

      if (response.ok) { 
        setFeedback("");
        setContacts("");
        alert("Email sent successfully");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the email");
    }
  };

  return (
    <footer className="footer">
      <div className="feedback-container">
        <h4 className="feedback-title">Deixe seu feedback</h4>
        <textarea
          className="feedback-textarea"
          rows="5"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        <input
          type="text"
          className="feedback-input"
          placeholder="Contato ( Opcional )"
          value={contacts}
          onChange={(e) => setContacts(e.target.value)}
        />
        <button className="feedback-button" onClick={handleSendResponse}>Enviar</button>
      </div>
    </footer>
  );
};
