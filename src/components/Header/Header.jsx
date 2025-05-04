const Header = () => {
  return (
    <header className="flex justify-between items-center m-auto mt-[24px] w-[1240px] h-[48px] headerMainContainer">
      <a href="/"></a>
      <img
        className="flex justify-center items-center w-[160px] h-[22px]"
        src="/images/svg/shopSiteLogo.svg"
        alt="siteLogo"
      />
      <nav>
        <ul className="flex gap-6 w-[321px]">
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">On Sale</a>
          </li>
          <li>
            <a href="/">New Arrivals</a>
          </li>
          <li>
            <a href="/">Brands</a>
          </li>
        </ul>
      </nav>
      <div className="relative flex searchWrapper mal-[40px]">
        <img
          className="top-[13px] absolute pl-[16px]"
          src="/images/svg/search.svg"
          alt="searchIcon"
        />
        <input
          className="bg-[var(--button-bg-color)] pl-[48px] rounded-[62px] focus:outline-none w-[577px] h-[48px] cursor-pointer"
          type="text"
          placeholder="Search for something"
        />
      </div>
      <div className="flex justify-center items-center gap-[14px] cartAndProfile">
        <div className="relative flex justify-center items-center w-[40px] h-[40px] carts">
          <img
            className="w-[24px] h-[24px]"
            src="/images/svg/cart.svg"
            alt="cart"
          />
          <div className="right-[20px] bottom-[25px] left-[28px] absolute flex justify-center items-center bg-amber-500 rounded-[62px] w-[20px] h-[20px]">
            1
          </div>
        </div>

        <img
          className="w-[24px] h-[24px]"
          src="/images/svg/profile.svg"
          alt="profile"
        />
      </div>
    </header>
  );
};

export default Header;
