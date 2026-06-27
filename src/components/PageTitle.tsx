const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
      {children}
    </h1>
  );
};

export default PageTitle;
