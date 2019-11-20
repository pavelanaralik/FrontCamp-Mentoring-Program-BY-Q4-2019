function render(store) {
    let state = store.getState();
    if(!state.sources) 
        return;
    for (const item of state.sources) {
        var option = document.createElement("option");
        option.text = item.name;
        option.value = item.id;
        document.getElementById('channels').add(option, null);
    }
}

export {render};