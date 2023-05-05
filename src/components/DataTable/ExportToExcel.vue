<script lang="ts" setup>
import { toRefs, defineProps, withDefaults } from "vue";
import XLSX from "xlsx";

interface Props {
  columns: any;
  data: any;
  filename?: string;
  sheetName?: string;
}

const props = withDefaults(defineProps<Props>(), {
  filename: "excel",
  sheetName: "SheetName",
});

// Default props

function has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function foldHelper(oldObj, newObj, prevKey) {
  for (const key in oldObj) {
    if (has(oldObj, prevKey)) continue;

    const value = oldObj[key];
    const newKey = prevKey ? `${prevKey}.${key}` : key;

    if (!value || (value && value.constructor !== Object))
      newObj[newKey] = value;
    else foldHelper(value, newObj, newKey);
  }
}

function fold(obj) {
  const newObj = {};

  foldHelper(obj, newObj, "");

  return newObj;
}

const { columns, data, filename, sheetName } = toRefs(props);

function exportExcel() {
  const createXLSXFormatObj = [];
  const newXlsHeader = [];

  if (columns.value.length === 0 || data.value.length === 0) return;

  columns.value.forEach((e) => {
    if (e.label === "Actions") return; // Don't export the actions column
    newXlsHeader.push(e.label);
  });

  createXLSXFormatObj.push(newXlsHeader);

  data.value.forEach((d) => {
    const rowData = fold(d);
    const innerRowData = [];

    columns.value.forEach((c) => {
      if (c.dataFormat && typeof c.dataFormat === "function")
        innerRowData.push(c.dataFormat(rowData[c.field]));
      else innerRowData.push(rowData[c.field]);
    });

    createXLSXFormatObj.push(innerRowData);
  });

  const file = `${filename.value}.xlsx`;
  const sheet = sheetName.value;
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(createXLSXFormatObj);

  XLSX.utils.book_append_sheet(workbook, worksheet, sheet);
  XLSX.writeFile(workbook, file);
}
</script>

<template>
  <button @click="exportExcel">
    <slot />
  </button>
</template>
