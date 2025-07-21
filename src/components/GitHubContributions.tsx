const GitHubContributions = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">
          My GitHub Contributions
        </h2>
        
        <div className="bg-card rounded-xl p-8 border border-border/50 animate-scale-in">
          <img 
            src="https://ghchart.rshah.org/008000/benji181" 
            alt="GitHub Contributions Graph"
            className="w-full max-w-3xl mx-auto rounded-lg"
          />
        
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;