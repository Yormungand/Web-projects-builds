class Tab_interaction {
    length = 0;
    current = 0;
    element = null
    constructor(element) {
        if (element)
            this.element = element;
        if (this.element !== null && this.element !== undefined) {
            if (document.querySelector(this.element)) {
                document.querySelector(this.element).querySelectorAll('.tab-button').forEach((el, i)=>{
                    el.setAttribute("data-index", i);
                    this.length++
                });
                setTimeout(()=>{
                    document.querySelector(this.element).querySelectorAll('.tab-item.open')[0].style.opacity = 1;
                }, 300);
            } else
                console.error("Couldn't find element with matching id");
        } else {
            console.error('You must specify an element with id');
        }
    }
    click(that, section, mentoringType){
        if (this.element && document.querySelector(this.element)) {
            document.querySelector(this.element).querySelectorAll('.tab-button').forEach((el, i)=>{
                el.classList.remove("active")
            });
            document.querySelector(this.element).querySelectorAll('.tab-item').forEach((el, i)=>{
                el.style.opacity = 0;
                setTimeout(()=>{
                    el.classList.remove("open")
                }, 500)
                if (that.getAttribute("data-index") === i.toString()) {
                    setTimeout(()=>{
                        el.classList.add("open");
                        for (let opacity = 0; opacity < 1.1; opacity = opacity + 0.1)
                        {
                            setTimeout(function(){el.style.opacity = opacity;},200)
                        }
                    }, 500)
                }
            });
            that.classList.add("active");
        }
    }
}