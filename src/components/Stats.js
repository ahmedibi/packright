export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your list! 💤💤</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ( {percentage} % )&emsp; 🛒
        </em>
      ) : (
        <span>You got everything ready to go! &emsp;🚚 </span>
      )}
    </footer>
  );
}
