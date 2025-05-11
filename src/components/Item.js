export default function Item({ item, onDeleteItem, onToggleItem }) {
  const amazonUrl = `https://www.amazon.com/s?k=${encodeURIComponent(
    item.description
  )}`;

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : null}>
        {item.quantity} {item.description}
      </span>
      <div className="item-actions">
        <button onClick={() => onDeleteItem(item.id)}>❌</button>

        {item.packed ? null : (
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="amazon-btn"
          >
            Buy on Amazon
          </a>
        )}
      </div>
    </li>
  );
}
