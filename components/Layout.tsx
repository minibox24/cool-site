export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-md min-h-screen mx-auto ">
      <div>{children}</div>
    </div>
  );
}
