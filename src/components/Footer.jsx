function Footer() {
  return (
    <footer className="footer-container">
      <div className="social">
        <a href="https://github.com/daniel-ober" target="_blank">
          <img
            src="https://i.imgur.com/qda6heV.png"
            alt="git"
            className="social"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-ober"
          target="_blank"
        >
          <img
            src="https://i.imgur.com/Lqk0JgF.png"
            alt="linkedin"
            className="social"
          />
        </a>
      </div>
      <div className="daniel-ober">
        <p>© Daniel Ober 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
