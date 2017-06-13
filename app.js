//menu toggle in mobile view
(function (window, document) {
      document.getElementById('toggle').addEventListener('click', function (e) {
          document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
          document.getElementById('toggle').classList.toggle('x');
      });
      })(this, this.document);

      //adds tech buttons to page takes in an array
      function addTech(arr, projectDiv){
        const $projectTech = projectDiv;
        arr.forEach((button)=>{
          $projectTech.append('<button class="pure-button pure-button-primary techbtn">' + button + '</button>' );
        })
      };

      //decalre projects and run addtech function
      const $apollo = $('.apollo')
      const apollotech = ['node', 'mongo', 'mongoose', 'react', 'redux']
      addTech(apollotech, $apollo);

      const $githubCard = $('.github-card');
      const githubtech = ['Yarn', 'Webpack', 'Chai', 'Enzyme', 'React', 'React-Router', 'Redux', 'Mocha'];
      addTech(githubtech, $githubCard);

      const $yumshub = $('.yumshub');
      const yumshubtech = []
