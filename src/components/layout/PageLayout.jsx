export default function PageLayout({ children, title, description }) {
  return (
    <>
      <main className="main-area">
        {children}
      </main>
    </>
  );
}