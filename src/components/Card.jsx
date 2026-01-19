function Card({ children }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
      {children}
    </div>
  );
}

export default Card;