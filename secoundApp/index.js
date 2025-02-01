function SecoundApp() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        width: "50%",
        padding: "20px",
        borderRadius: "5px",
        margin: "20px",
      }}
    >
      Secound app
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(<SecoundApp />);
