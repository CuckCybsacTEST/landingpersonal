function Card({ children }) {
  return (
    <div className="group rounded-2xl border border-white/10 gradient-card p-6 shadow-sm backdrop-blur hover:border-white/20 transition-all duration-300 glow-md">
      {children}
    </div>
  );
}

export default Card;