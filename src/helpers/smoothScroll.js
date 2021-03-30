export const handleScroll = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
        elem.scrollIntoView({block: "center", behavior: "smooth"});
    }
}