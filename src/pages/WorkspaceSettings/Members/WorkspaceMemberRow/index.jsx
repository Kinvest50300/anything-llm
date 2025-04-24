
function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}



export default function WorkspaceMemberRow({ user }) {
  return (
    <>
      <tr className="bg-transparent text-theme-text-primary text-sm font-medium">
        <th scope="row" className="px-6 py-4 whitespace-nowrap">
          {user.username}
        </th>
        <td className="px-6 py-4">{toTitleCase(user.role)}</td>
        <td className="px-6 py-4">{user.lastUpdatedAt}</td>
      </tr>
    </>
  );
}
