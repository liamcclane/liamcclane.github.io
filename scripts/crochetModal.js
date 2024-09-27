function getParamsAsObject(url) {
    const params = new URLSearchParams(new URL(url).search);
    const obj = {};
    for (const [key, value] of params.entries()) {
        obj[key] = value;
    }
    return obj;
}

// Example usage:
const url = window.location.toString();
const paramsObject = getParamsAsObject(url);
console.log(paramsObject); // { name: "John", age: "30" }


if (Object.keys(paramsObject).length) {
    // html string
    const htmlStr = "<h1>Hello World!</h1>";

// make a new parser
    const parser = new DOMParser();

// convert html string into DOM
    let ele = document.createElement('div');
    // ele.style = "width: auto;";
    ele.innerHTML =`<div class="modal" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
    let parent = document.getElementsByClassName("container-flex my-wrapper")[0];
    console.log(ele);
    parent.appendChild(ele);
}