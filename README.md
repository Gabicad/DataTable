# Vuetify 3 DataTable Component extension for Vue.js 3

This is a flexible and customizable Vue.js DataTable component that can handle filtering, sorting, column selection, and action buttons. It can be used in any Vue.js project to display complex data in a tabular format.

## Project Status

This project is currently under active development and is not yet complete. However, I wanted to share it with the community to gather feedback and encourage collaboration. Please feel free to contribute or provide suggestions for improvements.


## Vuetify 3

This project is extend the original Vuetify 3 DataTable - see the [Vuetify 3 - DataTable](https://vuetifyjs.com/en/components/data-tables/basics/).

## Test Data Example

This example demonstrates how to use the DataTable component with test data. The table displays information about various test items, including their ID, name, code, and code active status. Users can also perform actions like editing or deleting an item.

## Features

- Column filtering
- Column sorting
- Column visibility selection
- Customizable action buttons
- Export to Excel
- Reset filters

## Configuration

- **headers**: An array of header objects that define the columns for the table.

- **items**: An array of item objects that contain the data to display in the table.

- **unique-name**: A unique identifier for the table, used for store the actual visible columns in to the local storage.

- **options**: An object that contains various configuration options for the table.

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

## Example

This example demonstrates how to use the DataTable component with test data. The table displays information about various test items, including their ID, name, code, and code active status. Users can also perform actions like editing or deleting an item.

```js
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
```

## Script

```ts
<script setup lang="ts">
  import DataTable from '@/components/DataTable/DataTable.vue'
  import type { DataTableHeaders, DataTableItem, DataTableItems } from './components/DataTable/DataTableInterfaces';

  const onEdit = (item: DataTableItem) => {
    console.log('Item Edit', item);
  };
  const onDelete = (item: DataTableItem) => {
    console.log('Item Delete', item);
  };

  const options = {
    columnSelectCardTitle: 'Visible Columns',
    columnSelectAutoCompleteLabel: 'Choose Column',
    columnSelectSelectColumnActivatorIcon: "mdi-format-columns",
    exportToExcelIcon: 'mdi-export',
    resetFilterIcon: 'mdi-filter-off',
  };

  const headers: DataTableHeaders = [
    // ...
  ];

  const items: DataTableItems = [
    // ...
  ];
</script>

```

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/) file for details.
