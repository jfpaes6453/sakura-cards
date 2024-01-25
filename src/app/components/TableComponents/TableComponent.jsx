import DeleteHistory from "./DeleteHistory"
import Table from "./Table"
import Accordion from "./Accordion";

export default function TableComponent({ users }) {
  return (
    // Desktop version
    <div className="md:relative">
      {/* <img className="z-10 absolute top-0 left-0 w-[31rem] h-[28.5rem] opacity-30" src="img/kinomoto.png" alt="Big-mandala" />
      <img className="z-10 absolute bottom-1 right-20 w-[11.9375rem] h-[11.875rem] opacity-30" src="img/kinomoto.png" alt="Small-mandala" /> */}

      <div className="z-20 flex items-center justify-center my-10 mx-8 ms:mx-52 rounded-2xl border-4 border-orange-100 p-0">
        <table className="z-20 w-full hidden md:table">
          <thead className="">
            <tr>
              <th className="border-2xl border-zinc-400 p-4">NOMBRE</th>
              <th className="border border-zinc-400 p-4">FECHA</th>
              <th className="border border-zinc-400 py-4 px-5">RESULTADO LECTURA DE CARTAS</th>
              <th className="border-2xl border-zinc-400 p-4">ACCIONES</th>
            </tr>
          </thead>
          <tbody className="border-2xl p-5">
            {users.map((user) => (
              <Table key={user.id} user={user} />
            ))}
          </tbody>
        </table>

        {/* mobile version */}
        <div className="md:hidden">
          {users.map((user) => (
            <Accordion key={user.id} user={user} />
          ))}
    </div>

    </div>
        <DeleteHistory />
  </div>
  )
}
