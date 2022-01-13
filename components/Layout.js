export default function Layout({ children }) {
  return (
    <div className="max-w-screen-md min-h-screen mx-auto ">
      <div>{children}</div>
    </div>
  );
}
