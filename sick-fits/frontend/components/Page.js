import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>Howdy</h2>
      {children}
    </div>
  );
}
