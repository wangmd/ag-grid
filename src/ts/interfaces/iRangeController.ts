import {Column} from "../entities/column";
import {ColDef} from "../entities/colDef";
import {GridCell} from "../entities/gridCell";

export interface IRangeController {
    clearSelection(): void;
    getCellRangeCount(cell: GridCell): number;
    isCellInAnyRange(cell: GridCell): boolean;
    onDragStart(mouseEvent: MouseEvent): void;
    onDragStop(): void;
    onDragging(mouseEvent: MouseEvent): void;
    getCellRanges(): RangeSelection[];
    setRangeToCell(cell: GridCell): void;
    setRange(rangeSelection: AddRangeSelectionParams): void;
    addRange(rangeSelection: AddRangeSelectionParams): void;
    extendRangeInDirection(cell: GridCell, key: number): void;
    extendRangeToCell(cell: GridCell): void;
}

export interface RangeSelection {
    start: GridCell;
    end: GridCell;
    columns: Column[];
}

export interface AddRangeSelectionParams {
    rowStart: number;
    floatingStart: string;
    rowEnd: number;
    floatingEnd: string;
    columnStart: string|Column;
    columnEnd: string|Column;
}
