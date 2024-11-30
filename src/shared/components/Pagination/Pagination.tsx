import Button from "../Button/Button";
import * as sc from "./styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface IPagination {
  currentPage: number;
  totalPages: number;
  OnGoBack: () => void;
  OnNext: () => void;
}

const Pagination = ({ OnGoBack, OnNext, currentPage, totalPages }: IPagination) => {
  return (
    <sc.Paginacion>
      <div>
        <Button Onclick={() => OnGoBack()} disabled={currentPage === 1}>
          <FaChevronLeft />
        </Button>
      </div>
      <div>
        <span>Página {currentPage} de {totalPages}</span>
      </div>
      <div>
        <Button Onclick={() => OnNext()} disabled={currentPage === totalPages}>
          <FaChevronRight />
        </Button>
      </div>
    </sc.Paginacion>
  );
};

export default Pagination;