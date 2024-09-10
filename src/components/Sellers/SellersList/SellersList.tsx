import { useSellersStore } from "@/store/sellersStore/sellersStore";
import SellersItem from "../SellersItem/SellersItem";

const SellersList = () => {
  const sellers = useSellersStore((state) => state.allSellers);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sellers.map((seller) => (
            <SellersItem key={seller._id} seller={seller} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SellersList;
