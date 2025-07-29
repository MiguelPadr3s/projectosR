export default function Suggestions({ data, handleClick }) {
  return (
    <div className="wrapper">
      <ul>
        {data && data.length
          ? data.map((item, index) => (
              <li onClick={handleClick} key={index}>
                {item}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
