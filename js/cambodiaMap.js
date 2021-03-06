// IMPORTANT !!!
// NOTE: every new g tag with city in HTML has to contain data-tag: data-name='city'
$(document).ready(() => {
    $("g[data-name='city']").each((index, item) => {
        $(`#${item.id}`).click(() => $(`#m${item.id}`).modal());
    });
});
