export default function ButtonsTable({ to, text }) {
    return (
        <button className="bg-zinc-700 rounded-[20px] border-2 border-orange-100 mx-8 flex flex-row items-center gap-x-2 text-font-color relative z-20 py-2 px-4 hover:bg-[#1E511D] hover:border-orange-100  shadow-md focus:outline-none focus:shadow-outline-red active:bg-green-700 " href={to}>
        {text}
      </button>
    );
  }
  