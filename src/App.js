import SocialComponent from "./socialComponent";
import Header from "./header";
import MainContent from "./main";

export default function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <SocialComponent />
    </div>
  );
}
