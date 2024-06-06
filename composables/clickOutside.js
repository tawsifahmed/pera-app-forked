// directives/clickOutside.js
export default {
    beforeMount(el, binding) {
        el.clickOutsideEvent = (event) => {
            // Check if the click was outside the element and its children
            if (!(el == event.target || el.contains(event.target))) {
                binding.value(event);
            }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
    },
};
