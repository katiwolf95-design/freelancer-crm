export default function Login () {
  return (
    <div>
        <h1 className="text-xl font-bold mb-4">Login</h1>

        <form className="flex flex-col gap-3 max-w-sm">
        <input placeholder="Email" className="border p-2" />
        <input placeholder="Password" type="password" className="border p-2" />
        <button className="bg-black text-white p-2">Login</button>
        </form>  
    </div>
  );
}