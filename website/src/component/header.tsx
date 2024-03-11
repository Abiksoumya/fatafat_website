export default function Header() {
  return (
    <div className="header">
      <div>
        <h2>Bengal FF</h2>
      </div>
      <div>
        <button
          onClick={() => {
            window.location.reload();
          }}>
          Refresh
        </button>
      </div>
    </div>
  );
}
