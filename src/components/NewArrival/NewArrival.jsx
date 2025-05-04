import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import Closes from "../organisms/Closes";

// API URL
const apiURL = "https://680a6770d5075a76d987e97a.mockapi.io/Cards";

const NewArrival = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="flex flex-col mx-auto mt-[80px] mb-[36px] border-b-[var(--color-border)] max-w-[1440px] h-[680px] newArrivalContainer">
      <h2 className="mx-auto font-[900] text-[48px]">NEW ARRIVALS</h2>

      <div className="flex gap-5 w-[1220px] h-[500px]">
        {cards.slice(0, 4).map((card) => (
          <Link to={`/product/`} key={card.id}>
            <div className="w-[295px] h-[283px]">
              <Closes
                title={card.name}
                price={card.price}
                sale={card.sale}
                img={card.img}
                score={card.score}
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="m-auto mt-[36px] w-[218px]">
        <Button
          text="View All"
          color="bg-transparent text-[var(--color-black)]"
          size="w-[218px] h-[52px] rounded-[62px] m-[auto] border-1 cursor-pointer"
        />
      </div>

      <div className="bg-[var(--color-line)] m-auto mt-[64px] w-[1240px] h-[1px] line"></div>
    </div>
  );
};

export default NewArrival;
