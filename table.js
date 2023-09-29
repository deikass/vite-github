const toggleRowExpansion = (rows, collapseButton, expandButton, rowGroup, expandRowGroup) => {
    rowGroup.classList.toggle('is-active');
    collapseButton.classList.toggle('d-none', !expandRowGroup);
    expandButton.classList.toggle('d-none', expandRowGroup);

    rows.forEach((row) => {
        row.classList.toggle('d-none', !expandRowGroup);
    });
}

const initializeTable = (table) => {
    const rowGroupsArray = table.querySelectorAll('[data-row-group]');

    if (rowGroupsArray.length === 0) return;

    rowGroupsArray.forEach((rowGroup) => {
        const headerRow = rowGroup.querySelector('[data-header-row]');
        const expandButton = headerRow?.querySelector('[data-expand-button]');
        const collapseButton = headerRow?.querySelector('[data-collapse-button]');
        const rows = rowGroup.querySelectorAll('tr:not([data-header-row])');

        if (!headerRow || !expandButton || !collapseButton) {
            console.warn("Incomplete data in row group.");
            return;
        }

        expandButton.addEventListener("click", () => toggleRowExpansion(rows, collapseButton, expandButton, rowGroup, true));
        collapseButton.addEventListener("click", () => toggleRowExpansion(rows, collapseButton, expandButton, rowGroup, false));
    });
}

export const initExpandableTables = () => {
    const tables = document.querySelectorAll('[data-expandable-table]');

    if (tables.length === 0) return;

    tables.forEach((table) => {
        initializeTable(table);
    });
}