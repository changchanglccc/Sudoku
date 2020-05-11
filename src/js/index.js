// import { matrixToolkit } from './toolkit';

const matrixToolkit = require('./toolkit');

//九宫格
class Grid {
    constructor(contanier) {
        this._$container = contanier;
    }

    build() {
        const matrix = matrixToolkit.makeMatrix();
        const rowGroupClasses = ["row-g-top", "row-g-middle", "row-g-bottom"];
        const colGroupClasses = ["col-g-left", "col-g-center", "col-g-right"];

        const $cells = matrix.map(rowVaules => rowVaules.map((cellValue, colIndex) => {
            return $("<span>")
                .addClass(colGroupClasses[colIndex % 3])
                .text(cellValue);
        }));

        const $divArray = $cells.map(($spanArray, rowIndex) => {
            return $("<div>")
                .addClass("row")
                .addClass(rowGroupClasses[rowIndex % 3])
                .append($spanArray);
        });

        this._$container.append($divArray);

    }

    layout() {
        const width = $("span:first", this._$container).width();
        $("span", this._$container)
            .height(width)
            .css({
                "line-height": `${width}px`,
                "font-size": width < 32 ? `${width / 2}px` : ""
            })
    }
}

const grid = new Grid($("#container"));

grid.build();
grid.layout();
