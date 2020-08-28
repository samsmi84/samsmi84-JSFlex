    function loadData() {
      console.log("Loading Data...")
      fetch('scripts/data.json')
      .then(resp => resp.json())
      .then(data => {

      let panels = data.images.map((panels, i) => {

        return `
          <div class=panel panel${i} style="background-image: url(${panels.image})">
            <p>${panels.text_top}</p>
            <p>${panels.text_middle}</p>
            <p>${panels.text_buttom}</p>
          </div>
        `
      }).join("")
  
      document.querySelector('#panel_container').innerHTML = panels
    })

    const panel = document.querySelectorAll('.panel');
    console.log(panel)




    //panel.forEach(panel => panel.addEventListener('click', toggleOpen));
    //panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));

  }
    function toggleOpen() {
      console.log('Hello');
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }