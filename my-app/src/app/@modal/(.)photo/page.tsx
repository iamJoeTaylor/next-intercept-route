"use client";

export default function InterceptPage() {
  const historyState = window.history.state;
  return (
    <div className="fixed inset-0">
      <div className="fixed inset-0 bg-black/90" />
      <div className="fixed flex-col inset-0 flex items-center justify-center">
        <button
          onClick={() => {
            window.history.back();
          }}
        >
          Back home
        </button>
        <div className="bg-white/10 p-4 rounded-lg">
          <h1>Intercept Page</h1>
          <div>History State: {JSON.stringify(historyState)}</div>
        </div>
      </div>
    </div>
  );
}
