import AsideFull from "./asideFull.component";
import AsideSmall from "./asideSmall.component";

const Aside = () => {
  return (
    <div className="w-full top-0 md:w-[18vw] xl:w-[15vw] h-[10vh] md:h-screen md:border-r-2 border-solid border-r-mainLight dark:border-r-mainDark z-[1000] md: fixed">
      <AsideSmall />
      <AsideFull />
    </div>
  );
};

export default Aside;
