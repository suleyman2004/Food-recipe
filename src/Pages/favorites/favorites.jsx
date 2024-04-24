import React, { useContext } from "react";
import { Context } from "../../context/context";
import RecipeItem from "../../components/recipe-item/recipe-item";

const Favorites = () => {
  const { favoritesList } = useContext(Context);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item,index) => <RecipeItem key={index} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-x1 text-center text-black font-extrabold">
            Nothing is added in favorites
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
