const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:cursor-none">
      <div className="w-full md:pl-[18vw] xl:pl-[15vw] md:w-[100vw] h-screen pt-[8vh] md:pt-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;
