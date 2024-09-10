import {
  Card,
  CardContent,
  CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IGetUser } from "@/types";

const SellersItem: React.FC<{ seller: IGetUser }> = ({ seller }) => {
  return (
    <Card>
      <CardHeader className="flex items-center">
        <i className="bx bxs-user-detail bx-md mr-2 text-xl" />
        <div>
          <CardTitle>{seller.nombre}</CardTitle>
          <CardDescription>{seller.rol}</CardDescription>
        </div>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default SellersItem;
