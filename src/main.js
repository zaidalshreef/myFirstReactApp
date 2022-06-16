import ContactComponent from "./contact";
import Description from "./aboutMe";
export default function MainContent() {
  return (
    <div className="main-container">
      <h1>Laura Smith</h1>
      <h4>Frontend Developer</h4>
      <p>laurasmith.website</p>
      <ContactComponent/>
      <Description/>
      </div>
  );
}
