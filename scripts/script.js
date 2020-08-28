    function loadData() {
      console.log("Loading Data...")
      fetch('scripts/data.json')
      .then(resp => resp.json())
      .then(data => console.log(data))

      let panels = data.images.map((panel, i) => {

        return `
          <div class=panel panel${i} style="background-image: url(${panel})">
            <p>${panel.text_top}</p>
            <p>${panel.text_middle}</p>
            <p>${panel.text_buttom}</p>
          </div>
        `
      })
  
      document.querySelector('#panel_container').innerHTML = panels
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