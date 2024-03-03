export default function Footer() {
  return (
    <div className="separator">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">À propos de moi</h4>
            <p>Étudiante en informatique passionnée par le développement web</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <a
              href="mailto:sabrina.ahammuti@hotmail.com"
              className="footer-text"
            >
              sabrina.alhammuti@hotmail.com
            </a>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Réseaux Sociaux</h4>
            <div className="social-links">
              <a
                href="https://github.com/sabrina080802"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-text"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sabrina-al-hammuti-1441632b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-text"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>2024 Sabrina</p>
        </div>
      </footer>
    </div>
  );
}
