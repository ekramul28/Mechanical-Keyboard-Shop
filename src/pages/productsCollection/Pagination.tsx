import { Pagination } from "antd";
type TPaginationProps = {
  setPagination: ({ name, value }: { name: string; value: number }) => void;
  pageData: { total: number; limit: number };
};
const PaginationCard: React.FC<TPaginationProps> = ({
  setPagination,
  pageData,
}) => {
  const handelPage = (label: number) => {
    setPagination({ name: "page", value: label });
    console.log(label);
  };

  console.log({ pageData });
  return (
    <div>
      <Pagination
        onChange={handelPage}
        defaultCurrent={1}
        total={pageData?.total}
        pageSize={pageData?.limit}
      />
    </div>
  );
};

export default PaginationCard;
