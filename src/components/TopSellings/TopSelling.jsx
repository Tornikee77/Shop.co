import React from "react";
import Button from "../button";
import Closes from "../organisms/Closes";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const apiURL = "https://680a6770d5075a76d987e97a.mockapi.io/Cards";
const TopSelling = () => {
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
    <div className="flex flex-col mx-auto mb-[80px] border-b-[var(--color-border)] max-w-[1440px] h-[680px] newArrivalContainer">
      <h2 className="mx-auto mb-[55px] font-[900] text-[48px]">TOP SELLING</h2>

      <div className="flex gap-5 w-[1220px] h-[500px]">
        {cards.slice(4, 8).map((card) => (
          <Link key={card.id} to="/product">
            <div className="w-[295px] h-[455px]">
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

      <div className="m-auto w-[218px]">
        <Button
          text="View All"
          color="bg-transparent text-[var(--volor-black)]"
          size="w-[218px] h-[52px] rounded-[62px] border-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TopSelling;
