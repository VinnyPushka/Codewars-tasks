const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener("dragover", dragover); //! Перестаскиваемый объект НАД этим объектом
    placeholder.addEventListener("dragenter", dragenter); //! Перестаскиваемый объект заходит на территорию объекта
    placeholder.addEventListener("dragleave", dragleave); //! Перестаскиваемый объект покидает территорию
    placeholder.addEventListener("drop", dragdrop); //! Перестаскиваемый объект отпустили на объект
}

function dragstart(event) {
    event.target.classList.add("hold");
    setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
    event.target.classList.remove("hold", "hide");
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add("hovered");
}

function dragleave(event) {
    event.target.classList.remove("hovered");
}

function dragdrop(event) {
    event.target.append(item);
    event.target.classList.remove("hovered");
}
