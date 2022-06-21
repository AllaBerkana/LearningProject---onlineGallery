export const createElem = (tags, attrs) => {

const elem = document.createElement(tags);
Object.assign(elem, attrs);

return elem;

};

/*
createElem('DIV', {
    className: 'block',
    textContent: "HHHH",
    title: 'JS'
});
*/