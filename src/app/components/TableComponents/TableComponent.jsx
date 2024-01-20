import Table from "./Table"

export default function TableComponent({users}) {
  return (
    <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th>NOMBRE</th>
          <th>FECHA</th>
          <th>RESULTADO LECTURA DE CARTAS</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <Table key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  </div>
  )
}