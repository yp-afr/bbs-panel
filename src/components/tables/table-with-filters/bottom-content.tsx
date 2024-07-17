import React, {memo} from "react";
import {Pagination} from "@nextui-org/pagination";
import {Button} from "@nextui-org/button";
import {Selection} from "@nextui-org/react";
import {UserType} from "@/types/user.type";

type BottomContentProps = {
    selectedKeys: Selection;
    filteredItems: UserType[];
    page: number;
    pages: number;
    setPage: (page: number) => void;
    onPreviousPage: () => void;
    onNextPage: () => void;

}

const BottomContent = ({selectedKeys,filteredItems,page,pages,setPage,onPreviousPage,onNextPage }: BottomContentProps) => {
    return (
        <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
              ? "Всі обрано"
              : `${selectedKeys.size} з ${filteredItems.length} обрано`}
        </span>
            <Pagination
                isCompact
                showControls
                showShadow
                color="danger"
                page={page}
                total={pages}
                onChange={setPage}
            />
            <div className="hidden sm:flex w-[30%] justify-end gap-2">
                <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
                    Назад
                </Button>
                <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
                    Далі
                </Button>
            </div>
        </div>
    );
}

export default memo(BottomContent);