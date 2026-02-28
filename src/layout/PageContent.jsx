export default function PageContent({ children }) {
  return (
    <main className="flex-grow w-full flex flex-col items-center">
      <div className="w-full">
        {children}
      </div>
    </main>
  );
}