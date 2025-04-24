<<<<<<< HEAD
=======
import { titleCase } from "change-case";
>>>>>>> 54791b810490c9713c44fe26d84961ee8dbfc03b

export default function WorkspaceMemberRow({ user }) {
  return (
    <>
      <tr className="bg-transparent text-theme-text-primary text-sm font-medium">
        <th scope="row" className="px-6 py-4 whitespace-nowrap">
          {user.username}
        </th>
        <td className="px-6 py-4">{titleCase(user.role)}</td>
        <td className="px-6 py-4">{user.lastUpdatedAt}</td>
      </tr>
    </>
  );
}
