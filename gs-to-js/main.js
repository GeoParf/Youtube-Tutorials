const SHEET_ID = "1ejuZSxCzmEdBDm_kY5uK3Ruzb3ZMIZ6tLyQzW1iCwJU";
const SHEET_TITLE = "shop_db2";
let SHEET_RANGE = "A1:F6";// не обязательно, если нужен весь лист, и нужна возможность добавления пунктов.

const FULL_URL = (`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}`); //&range=${SHEET_RANGE}

let table = {
  rows: [],
  columns: []
};

const pageElements = {
  goodIdTitle: document.querySelector('#id'),
  goodNameTitle: document.querySelector('#name'),
  goodCategoryTitle: document.querySelector('#category'),
  goodPriceTitle: document.querySelector('#price'),
  goodAmountTitle: document.querySelector('#amount')
}

// Наименование столбцов (работает когда все столбци в таблице идут друг за другом по подряд и без пропуска)
function naming(elements, arrayOfNames){
  Object.keys(elements).forEach(key => {
    let i = 0
    key.innerHTML = `${arrayOfNames[i++].label}`;
  });

}

// Рендеринг имен столбца
function createList(columnName, elementName, columnNumber) {
  table.rows.forEach(row => {
    let newIdBox = document.createElement(elementName);
    newIdBox.className = "common";
    columnName.append(newIdBox);
    newIdBox.innerHTML = row.c[columnNumber].v
  })
}

// Забираем данные из базы на Google таблицах
async function getTable(url) {
  let colNum = 0;

  await fetch(url)
  .then(res => res.text())
  .then(rep => {
    let data =  JSON.parse(rep.substr(47).slice(0, -2));
    table.columns = data.table.cols;
    table.rows = data.table.rows;
  })

// финальное создание таблицы
  naming(pageElements, table.columns)

  Object.entries(pageElements).forEach(([key, value]) => {
    createList(value, "lo", colNum++);
  });
}

getTable(FULL_URL);





