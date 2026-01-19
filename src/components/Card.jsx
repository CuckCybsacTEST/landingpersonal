function Card({ children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
      {children}
    </div>
  );
}

export default Card;