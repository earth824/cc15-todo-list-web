export default function LoginPage() {
  return (
    <section className="flex flex-col gap-4 bg-white p-4 rounded-md">
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Username
        </label>
        <input
          type="text"
          className="w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          type="text"
          className="w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <button className="bg-blue-800 px-3 py-1.5 text-white rounded-md">Sign in</button>
    </section>
  );
}
