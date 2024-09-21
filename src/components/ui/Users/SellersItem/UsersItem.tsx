import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IGetUser } from "@/types";
import { useNavigate } from "react-router-dom";

const UsersItem: React.FC<{ user: IGetUser; route: string }> = ({
  user,
  route,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${route}/${user._id}`);
  };

  return (
    <Card onClick={handleClick} className="cursor-pointer">
      <CardHeader className="flex items-center">
        <i className="bx bxs-user-detail bx-md mr-2 text-xl" />
        <div>
          <CardTitle>{user.nombre}</CardTitle>
          <CardDescription>{user.rol}</CardDescription>
        </div>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default UsersItem;
