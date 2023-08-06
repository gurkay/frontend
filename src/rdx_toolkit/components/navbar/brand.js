export default function Brand() {
  return (
    <div className="Brand">
      <div className="brand-logo">
        <a href="/" className="logo-link">
          <img
            className="logo-img"
            src={require("../../assets/icons/logo.png")}
            width="40px"
            height="40px"
            alt="Logo"
          />
        </a>
      </div>
      <a href="/" className="brand-name">
        Brand Name
      </a>
    </div>
  );
}
