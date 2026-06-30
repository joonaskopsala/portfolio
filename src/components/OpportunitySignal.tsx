const OpportunitySignal = () => {
  return (
    <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      Currently open for opportunities
    </div>
  );
};

export default OpportunitySignal;
