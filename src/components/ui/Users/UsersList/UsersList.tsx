import UsersItem from "../SellersItem/UsersItem";
import { IGetUser } from "@/types";

const UsersList = ({ users, typeUser }: { users: IGetUser[], typeUser:string }) => {
  return (
    <div className="container mx-auto p-4">
      {users && users.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {users.map((user) => (
            <UsersItem key={user._id} user={user} route={`/admin/${typeUser}`} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 p-4">
          <p>No hay usuarios disponibles.</p>
        </div>
      )}
    </div>
  );
};

export default UsersList;
