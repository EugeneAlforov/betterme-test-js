const scrollToElementById = (sectionId) => {
    if (!sectionId) {
        return
    }
    document.getElementById(sectionId).scrollIntoView({block: "center", behavior: "smooth"});
};

export default scrollToElementById;