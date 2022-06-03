class Tab_interaction {
    length = 0;
    current = 0;
    element = null;
    constructor(element) {
        if (element)
            this.element = element;
        if (this.element !== null && this.element !== undefined) {
            if (document.querySelector(this.element)) {
                document.querySelector(this.element).querySelectorAll('.tab-button').forEach((el, i)=>{
                    el.setAttribute("data-index", i);
                    this.length++
                });
            } else
                console.error("Couldn't find element with matching id");
        } else {
            console.error('You must specify an element with id');
        }
    }
    click(that){
        if (this.element && document.querySelector(this.element)) {
            document.querySelector(this.element).querySelectorAll('.tab-button').forEach((el, i)=>{
                el.classList.remove("active")
            });
            document.querySelector(this.element).querySelectorAll('.tab-item').forEach((el, i)=>{
                el.classList.remove("open")
                if (that.getAttribute("data-index") === i.toString())
                    el.classList.add("open")
            });
            that.classList.add("active");
        }
    }
}
