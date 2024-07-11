import { Pagination } from "antd";
const PaginationCard = () => {
  return (
    <div>
      <Pagination defaultCurrent={6} total={500} />
    </div>
  );
};

export default PaginationCard;
