var height_global;
var width_global;
var mineratio_global;
var saveGameArray;

function populateTable(height, width, mineratio){
    height_global = height;
    width_global = width;
    mineratio_global = mineratio;
    var tbody = document.createElement("tbody");
    var table = document.getElementById("minesweeper_table");

    for(i = 0; i <  height ; i++){
        var row = document.createElement("tr");
        for (j = 0; j <  width; j++){
            var cell = document.createElement("td");
            cell.onclick = function(){ checkCellPlayerClick(this) };
            cell.setAttribute("class", "cell_unchecked");
            cell.setAttribute("id", encodeID(i, j));
            if ( Math.random() < mineratio ){
                cell.setAttribute("mine", 1);
            } else {
                cell.setAttribute("mine", 0);
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
};

function countNeighborMines(cell){
    var rowCol = decodeID(cell);
    var row = rowCol[0];
    var col = rowCol[1];
    var mineCount = 0;
    // Count number of neighboring mines
    // top-left
    //row--; col--;
    mineCount += checkCell(row - 1, col - 1);
    // top
    //col++;
    mineCount += checkCell(row - 1, col);
    // top-right
    //col++;
    mineCount += checkCell(row - 1, col + 1);
    // left
    //row++; col -= 2
    mineCount += checkCell(row, col - 1);
    // right
    //col += 2;
    mineCount += checkCell(row, col + 1);
    // bottom-left
    //row++; col -= 2;
    mineCount += checkCell(row + 1, col - 1);
    // bottom
    //col++;
    mineCount += checkCell(row + 1, col);
    // bottom-right
    //col++;
    mineCount += checkCell(row + 1, col + 1);
    return mineCount;
};

function encodeID(row, col){
    var id = "r" + row + "c" + col;
    return id;
};

function decodeID(cell){
    var id = cell.getAttribute("id");
    var row = id.slice( id.indexOf("r") + 1, id.indexOf("c") );
    row = parseInt(row);
    var col = id.slice( id.indexOf("c") + 1);
    col = parseInt(col);
    return [row, col];
};

function checkCell(row, col){
    if ( row >= 0 && col >= 0 && row < height_global && col < width_global){
        var cell = document.getElementById(encodeID(row, col));
        if ( cell.getAttribute("mine") == 1 ){
            return 1;
         } else {
            return 0;
         };
    } else return 0;
};

function checkCellPlayerClick(cell){
    var rowCol = decodeID(cell);
    var row = rowCol[0];
    var col = rowCol[1];
    if (checkCell(row, col)){
        cell.setAttribute("class", "cell_fail");
        cell.innerHTML = "X";
        gameOver();
    } else {
        cell.setAttribute("class", "cell_checked");
        checkNeighborCells(cell);
    };
};

function checkNeighborCells(cell){
    //if (cell.getAttribute("mine") == 1) return;
    var rowCol = decodeID(cell);
    var row = rowCol[0];
    var col = rowCol[1];
    var mineCount = countNeighborMines(cell);
    if ( mineCount == 0 ){
        cell.setAttribute("class", "cell_checked");

        cell = document.getElementById(encodeID(row-1, col-1));
        if (cell != null && cell.getAttribute("class") != "cell_checked"){
            checkNeighborCells(cell)
        };
        cell = document.getElementById(encodeID(row-1, col));
        if (cell != null && cell.getAttribute("class") != "cell_checked"){
            checkNeighborCells(cell)
        };
        cell = document.getElementById(encodeID(row-1, col+1));
        if (cell != null && cell.getAttribute("class") != "cell_checked"){
            checkNeighborCells(cell)
        };
        cell = document.getElementById(encodeID(row, col-1));
        if (cell != null && cell.getAttribute("class") != "cell_checked"){
            checkNeighborCells(cell)
        };
        cell = document.getElementById(encodeID(row, col+1));
        if (cell != null && cell.getAttribute("class") != "cell_checked"){
            checkNeighborCells(cell)
        };
        cell = document.getElementById(encodeID(row+1, col-1));
        if (cell != null && cell.getAttribute("class") != "cell_checked"){
            checkNeighborCells(cell)
        };
        cell = document.getElementById(encodeID(row+1, col));
        if (cell != null && cell.getAttribute("class") != "cell_checked"){
            checkNeighborCells(cell)
        };
        cell = document.getElementById(encodeID(row+1, col+1));
        if (cell != null && cell.getAttribute("class") != "cell_checked"){
            checkNeighborCells(cell)
        };
    } else {
        cell.innerHTML = mineCount;
        cell.setAttribute("class", "cell_checked");
    }
};

function gameOver(){
    document.getElementById("minesweeper_table").setAttribute("style", "pointer-events: none");
    document.getElementById("retry_button").setAttribute("style", "visibility: visible");
};

function retry(){
    document.getElementById("minesweeper_table").setAttribute("style", "pointer-events: auto");
    document.getElementById("retry_button").setAttribute("style", "visibility: hidden");
    location.reload();
};
function saveGame(){
    $.post("savegame",
        context = {
            "htm" : $("#minesweeper_table").html(),
            "csrfmiddlewaretoken" : csrf,
        },
        function(data, status){
            populateSavesPanel();
        });
};
function loadGame(){
    activeButton = document.getElementsByClassName("active");
    if (activeButton[0]) {
        id = activeButton[0].getAttribute("saveID");
        var html;
        for (var i = 0; i < saveGameArray.length; i++){
            if (saveGameArray[i]["id"] == id){
                html = saveGameArray[i]["gameHTML"];
            };
        };
        document.getElementById("minesweeper_table").innerHTML = html;
        height_global = document.getElementById("minesweeper_table").getElementsByTagName("tr").length;
        width_global = document.getElementById("minesweeper_table").getElementsByTagName("tr")[0].getElementsByTagName("td").length;
        console.log(width_global);
    } else {
        alert("You need to select a save first.");
        return;
    }

    uncheckedCellsList = document.getElementsByClassName("cell_unchecked");
    for (i = 0; i < uncheckedCellsList.length; i++){
        uncheckedCellsList[i].onclick = function(){ checkCellPlayerClick(this) };
    };

    document.getElementById("minesweeper_table").setAttribute("style", "pointer-events: auto");
    document.getElementById("retry_button").setAttribute("style", "visibility: hidden");
};
function populateSavesPanel(){
    saves_panel = document.getElementById("saves_panel");
    saves_panel.innerHTML = "";

    li = document.createElement("li");
    button = document.createElement("button");
    button.innerHTML = "Saved games:";
    button.disabled = true;
    li.appendChild(button);
    saves_panel.appendChild(li);

    $.get("getSavesArray", function(data, status){
       saveGameArray = data;

    for(i = 0; i < saveGameArray.length; i++){
        li = document.createElement("li");
        button = document.createElement("button");
        button.setAttribute("saveID", saveGameArray[i].id);
        button.onclick = function() { selectSave(this) }
        button.innerHTML = /*saveGameArray[i]["title"] + "<br>" + */saveGameArray[i]["date"];
        li.appendChild(button);
        saves_panel.appendChild(li);
    }

    li = document.createElement("li");
    button = document.createElement("button");
    button.setAttribute("id", "loadButton");
    button.onclick = function() { loadGame() };
    button.innerHTML = "Load Game";
    li.appendChild(button);
    saves_panel.appendChild(li);

    li = document.createElement("li");
    button = document.createElement("button");
    button.setAttribute("id", "saveButton");
    button.onclick = function() { saveGame() };
    button.innerHTML = "Save Game";
    li.appendChild(button);
    saves_panel.appendChild(li);
    });
};

function selectSave(elem){
    activeButton = document.getElementsByClassName("active");
    if (activeButton[0]) activeButton[0].setAttribute("class", "");
    elem.setAttribute("class", "active");
};