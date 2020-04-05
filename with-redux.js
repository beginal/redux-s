    function reducer(state, action) {
      if( state = undefined ) {
        return { color: 'yellow' }
      }

    }

    var store = Redux.createStore(reducer);
    console.log(store.getState())
    function red() {
      document.querySelector('#red').innerHTML = `
      <div class="container" id='component_red'>
        <h1>red</h1>
        <input type="button" value="fire" onclick="
        document.querySelector('#component_red').style.backgroundColor = 'red';
        "">
      </div>
      
      `
    }

    red()