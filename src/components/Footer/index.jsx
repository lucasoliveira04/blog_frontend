import { useState } from "react";

export const FooterComponent = () => {
  const [feedback, setFeedback] = useState("");
  const [contacts, setContacts] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false); 
  const [showErrorModal, setShowErrorModal] = useState(false);

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
        setShowSuccessModal(true); 
        setShowErrorModal(false); 
      } else {
        setShowErrorModal(true); 
        setShowSuccessModal(false); 
      }
    } catch (error) {
      console.error(error);
      setShowErrorModal(true); 
      setShowSuccessModal(false); 
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

      {/* Success Modal */}
      <div className={`modal fade ${showSuccessModal ? 'show' : ''}`} 
        style={{ display: showSuccessModal ? 'block' : 'none' }}
        tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Success</h5>
              <button type="button" className="close" onClick={() => setShowSuccessModal(false)}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="fw-bold">Email sent successfully</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => setShowSuccessModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      <div className={`modal fade ${showErrorModal ? 'show' : ''}`} 
        style={{ display: showErrorModal ? 'block' : 'none' }}
        tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Error</h5>
              <button type="button" className="close" onClick={() => setShowErrorModal(false)}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="fw-bolder">Erro ao enviar email</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowErrorModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
