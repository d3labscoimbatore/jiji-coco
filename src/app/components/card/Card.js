import "../card/card.css";
import { gtSuper } from "@/app/utility/fonts";

const Card = () => {
  return (
    <div className="card">
      <h4 className={gtSuper.className}>Legacy</h4>
      <p>
        Were the premier fully integrated coir company worldwide, commanding
        6.5% of the global coir consumption market
      </p>
    </div>
  );
};

export default Card;