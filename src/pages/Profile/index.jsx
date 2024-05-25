import { FooterComponent } from "../../components/Footer";
import "../../public/profile/profile.css";

export const ProfilePage = () => {
    return (
        <div className="container-fluid">
            <div className="modal-group-profile-and-contacts">
                <div className="profile" id="profile">
                    PROFILE IS HERE
                </div>
                <div className="contacts" id="contacts">
                    CONTACTS IS HERE
                </div>
            </div>
            <div className="aboutme" id="aboutme">
                ABOUT ME IS HERE
            </div>
            <div className="footer" id="footer">
                <FooterComponent/>
            </div>
        </div>
    );
};
