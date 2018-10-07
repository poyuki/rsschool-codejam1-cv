function openDetails(event) {
    let el=event.currentTarget;

    if(el.classList.contains('fa-plus')){
        el.classList.remove('fa-plus');
        el.classList.add('fa-minus');
    }else{
        el.classList.remove('fa-minus');
        el.classList.add('fa-plus');
    }
}