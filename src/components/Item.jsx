export default function Item({ todo }) {
  return (
    <li className="flex justify-between border items-center border-gray-200 bg-white px-3 py-4 rounded-md">
      <span>{todo.title}</span>
      <div className="flex gap-2">
        <button className="bg-green-800 px-3 py-1.5 text-white rounded-md">Edit</button>
        <button className="bg-red-800 px-3 py-1.5 text-white rounded-md">Del</button>
      </div>
    </li>
  );
}
