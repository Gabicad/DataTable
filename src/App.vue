<template>
  <v-app>
    <v-main>
      <VRow>
        <VCol cols="6">
          <VCard>
            <VCardTitle>Test Data Table</VCardTitle>
            <VCardText>
              <DataTable
                :headers="headers"
                :items="items"
                unique-name="test-table"
                :options="options"
              />
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import DataTable from "@/components/DataTable/DataTable.vue";
import type {
  DataTableHeaders,
  DataTableItem,
  DataTableItems,
} from "./components/DataTable/DataTableInterfaces";

const onEdit = (item: DataTableItem) => {
  console.log("Item Edit", item);
};
const onDelete = (item: DataTableItem) => {
  console.log("Item Delete", item);
};

const options = {
  columnSelectCardTitle: "Visible Columns",
  columnSelectAutoCompleteLabel: "Choose Column",
  columnSelectSelectColumnActivatorIcon: "mdi-format-columns",
  exportToExcelIcon: "mdi-export",
  resetFilterIcon: "mdi-filter-off",
};

const headers: DataTableHeaders = [
  {
    filterable: false,
    title: "ID",
    key: "id",
    isVisible: false,
  },
  {
    title: "Name",
    key: "name",
    filterable: true,
    sortable: true,
    isVisible: true,
  },

  {
    title: "Code",
    key: "code_object.code",
    filterable: true,
    sortable: true,
    isVisible: true,
  },
  {
    title: "Code Active",
    key: "code_object.active.active",
    filterable: true,
    sortable: true,
    isVisible: true,
    component: "v-chip",
    componentProps: {
      color: (item: DataTableItem) => (item.active ? "success" : "error"),
    },
    displayFunction: (item: boolean) => (item ? "YES" : "NO"),
  },
  {
    key: "actions",
    title: "Actions",
    component: "ActionButtons",
    vBindItems: true,
    componentProps: {
      buttons: [
        {
          icon: "mdi-pencil",
          label: "Edit",
          handler: (item: DataTableItem) => onEdit(item),
        },
        {
          icon: "mdi-delete",
          label: "Delete",
          handler: (item: DataTableItem) => onDelete(item),
        },
      ],
    },
  },
];

const items: DataTableItems = [
  {
    id: 1,
    name: "test 1",
    reference: "test1 ref",
    active: true,
    code_object: {
      id: 1,
      code: "12345",
      active: {
        id: 1,
        active: true,
      },
    },
  },
  {
    id: 2,
    name: "test 2",
    reference: "test2 ref",
    active: true,
    code_object: {
      id: 1,
      code: "11111",
      active: {
        id: 1,
        active: false,
      },
    },
  },
  {
    id: 3,
    name: "test 3",
    reference: "test3 ref",
    active: false,
    code_object: {
      id: 1,
      code: "333333",
      active: {
        id: 1,
        active: true,
      },
    },
  },
  {
    id: 4,
    name: "test 4",
    reference: "test4 ref",
    active: false,
    code_object: {
      id: 1,
      code: "444444",
      active: {
        id: 1,
        active: false,
      },
    },
  },
];
</script>