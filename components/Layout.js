import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

export default function Layout({ children }) {
  return (
    <>
      <TheHeader />
      <main className="bg-gray-900 text-white"> {children} </main>
      <TheFooter />
    </>
  );
}
