import Table from "./Table"

export default function TableComponent({users}) {
  return (
    <div className="relative">
      <img className=" absolute top-0 left-0 w-[31rem] h-[28.5rem] opacity-30" src="img/kinomoto.png" alt="Big-mandala" />
      <img className="absolute bottom-1 right-20 w-[11.9375rem] h-[11.875rem] opacity-30" src="img/kinomoto.png" alt="Small-mandala" />

    <div className="flex items-center justify-center my-10 mx-52 rounded-2xl border-4 border-orange-100 p-0">
    <table className="w-full">
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
  </div>
  </div>
  )
}








// import Table from "./Table"

// export default function TableComponent({users}) {
//   return (
//     <div className="overflow-x-auto">
//     <table className="table">
//       <thead>
//         <tr>
//           <th>NOMBRE</th>
//           <th>FECHA</th>
//           <th>RESULTADO LECTURA DE CARTAS</th>
//           <th>ACCIONES</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <Table key={user.id} user={user} />
//         ))}
//       </tbody>
//     </table>
//   </div>
//   )
// }