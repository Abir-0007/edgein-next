import { PropsWithChildren } from "react";
import { ElemButton } from "@/components/ElemButton";
import { numberWithCommas } from "@/utils";

type Props = {
	className?: string;
	page: number;
	itemsPerPage: number;
	shownItems?: number;
	totalItems: number;
	numeric?: boolean;
	onClickPrev?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onClickNext?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onClickToPage?: (selectedPage: number) => void;
};

export const Pagination: React.FC<PropsWithChildren<Props>> = ({
	className,
	page,
	itemsPerPage,
	shownItems = 0,
	totalItems,
	numeric,
	onClickPrev,
	onClickNext,
	onClickToPage,
}) => {
	const shownItemsStart = page === 0 ? 1 : page * itemsPerPage;
	const shownItemsEnd =
		shownItems < itemsPerPage ? totalItems : (page + 1) * itemsPerPage;

	const hide = totalItems < itemsPerPage ? true : false;

	const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClickToPage = (selectedPage: number) => {
    if (onClickToPage) {
      onClickToPage(selectedPage);
    }
  };

	if (hide) {
		return <></>;
	}

	return (
		<nav
			className={`${className} py-3 space-y-3 md:space-y-0 md:flex items-center justify-between`}
			aria-label="Pagination"
		>
			<div className="flex-1">
				{shownItems === 0 ? (
					<></>
				) : shownItems == totalItems ? (
					<span>
						Results: {shownItemsStart}
						{" - "} {shownItemsEnd} of {totalItems}
					</span>
				) : (
					<span>
						Results: {shownItemsStart}
						{" - "}
						{shownItemsEnd} of {numberWithCommas(totalItems)}
					</span>
				)}
			</div>
			<div className="flex-1 flex justify-between sm:justify-end items-center">
				{page * itemsPerPage > 0 && (
					<ElemButton onClick={onClickPrev} btn="white" arrowLeft>
						Prev
					</ElemButton>
				)}

				{numeric && (
          <ul className="flex gap-x-4 mx-0 sm:mx-4">
            {page > 1 && (
              <>
                <li
                  className="font-semibold text-gray-300 cursor-pointer hidden sm:block"
                  onClick={() => handleClickToPage(0)}
                >
                  1
                </li>
                <li className="font-semibold text-gray-300 hidden sm:block">
                  ...
                </li>
              </>
            )}

            {page > 0 && (
              <li
                className="font-semibold text-gray-300 cursor-pointer"
                onClick={() => handleClickToPage(page - 1)}
              >
                {page}
              </li>
            )}

            <li className="font-semibold text-primary-700 cursor-pointer">
              {page + 1}
            </li>

            {totalItems > shownItemsEnd && (
              <li
                className="font-semibold text-gray-300 cursor-pointer"
                onClick={() => handleClickToPage(page + 1)}
              >
                {page + 2}
              </li>
            )}

            {page < totalPages - 2 && (
              <>
                <li className="font-semibold text-gray-300 hidden sm:block">
                  ...
                </li>
                <li
                  className="font-semibold text-gray-300 cursor-pointer hidden sm:block"
                  onClick={() => handleClickToPage(totalPages - 1)}
                >
                  {totalPages}
                </li>
              </>
            )}
          </ul>
        )}

				{totalItems > shownItemsEnd && (
					<ElemButton
						onClick={onClickNext}
						className={numeric ? "" : "sm:ml-3"}
						btn="white"
						arrow
					>
						Next
					</ElemButton>
				)}
			</div>
		</nav>
	);
};
