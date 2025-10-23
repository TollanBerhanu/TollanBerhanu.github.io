const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Geometric Pattern Layer */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] animate-grid-flow" />
      </div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/25 rounded-full blur-[130px] animate-float-slower" />
      <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-primary/20 rounded-full blur-[140px] animate-float-delay" />
      <div className="absolute top-2/3 right-1/3 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] animate-float-reverse" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
    </div>
  );
};

export default BackgroundEffects;
