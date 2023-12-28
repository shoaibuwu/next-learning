import Header from "../components/Header";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <h1>This is your doing</h1>
      {children}
    </>
  );
};

export default layout;
