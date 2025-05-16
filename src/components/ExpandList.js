import "./ExpandList.css";
import { useState } from "react";

function ExpandList({
  items,
  initialItems = 1,
  renderItem,
  listClassName = "",
  itemClassName = "",
  buttonText = (showAll, total) =>
    showAll ? "Mostrar menos" : `Mostrar todos los comentarios (${total})`,
}) {
  const [showAll, setShowAll] = useState(false);

  const itemsToShow = showAll ? items : items.slice(0, initialItems);

  return (
    <div>
      <ul className={listClassName}>
        {itemsToShow.map((item, index) => (
          <li key={index} className={itemClassName}>
            {renderItem(item)}
          </li>
        ))}
      </ul>

      {items.length > initialItems && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="expandable-list-button"
        >
          {buttonText(showAll, items.length)}
        </button>
      )}
    </div>
  );
}

export default ExpandList;
