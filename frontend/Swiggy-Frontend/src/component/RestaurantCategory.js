import MenuItem from "./MenuItem";

// const RestaurantCategory = ({ category }) => {
//   const { title, itemCards } = category;

//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{itemCards.length} items</p>

//       {itemCards.map((menuItem) => {
//         return (
//           <MenuItem key={menuItem.card.info.id} data={menuItem.card.info} />
//         );
//       })}
//     </div>
//   );
// };

const RestaurantCategory = ({ category, command, setIndex }) => {
  const { title, itemCards } = category;

  const handleClick = () => {
    setIndex();
  };

  return (
    <div className="category-accordian">
      <div className="category-header" onClick={handleClick}>
        <div className="arrow">
          <h3>
            {title} ({itemCards.length})
          </h3>
          <p>⬇️</p>
        </div>
      </div>

      {command ? (
        <div className="category-body">
          {itemCards.map((menuItem) => {
            return (
              <MenuItem key={menuItem.card.info.id} data={menuItem.card.info} />
            );
          })}
        </div>
      ) : (
        <div><p></p></div>
      )}
    </div>
  );
};
export default RestaurantCategory;
