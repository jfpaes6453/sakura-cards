export default function Table({user}) {
    return (
        <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.date}</td>
            <td>{user.results}</td>
            <td>Botones</td>
        </tr>
    )
}