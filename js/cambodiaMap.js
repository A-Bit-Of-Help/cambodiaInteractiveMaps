$(document).ready(() => {
    $("g[data-name='city']").each((index, item) => {
        $(`#${item.id}`).click(() => $(`#m${item.id}`).modal());
    });
});
