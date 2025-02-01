function App() {
  return (
    <div
      style={{
        backgroundColor: "whiteSmoke",
        color: "gray",
        padding: "20px",
        borderRadius: "5px",
        width: "60%",
      }}
    >
      First App
      <button
        style={{
          backgroundColor: "whiteSmoke",
          fontSize: " 20px",
          borderRadius: "5px",
          width: "150px",
          margin: " 20px",
        }}
        onClick={() => (window.location.href = "secoundPage.html")}
      >
        Click me
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
