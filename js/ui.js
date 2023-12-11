//Setup Materialize Components
// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});


const tasks = document.querySelector(".tasks");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const setupUI = (user) => {
  if (user) {
    //toggle UI elements
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
    
  } else {
    //toggle UI elements
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};

document.addEventListener("DOMContentLoaded", function () {
    //Nav Menu
    const menus = document.querySelectorAll(".side-menu");
    M.Sidenav.init(menus, { edge: "right" });
    // Add Tasks
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, { edge: "left" });
  });

  function greeting(name){
    alert(`Hello ${name}`);
  }

  const setupTasks = (data) => {
    let html = "";
    data.forEach((doc) => {
      const task = doc.data();
      const li = `
      <div class="card-panel task white row" data-id ="${task.id}">
                <img src="/img/business-woman-img-152" class="responsive-img materialboxed" alt="">
                <div class="task-detail">
                    
                    <div class="task-title"> ${task.firstName} ${task.lastName}</div>
                      
                    <div class="email">${task.email}</div>
                    <div class="phone"> ${task.phone}</div>
                    <div class="website"> https://${task.website}</div>
                    
                </div>
                <div class="task-edit">
                
                </div> 
                <div class="task-delete">
                    <i class="material-icons edit" data-id ="${task.id}">delete_outline</i>
                </div>
            </div>
      `;
      html += li;
    });
  
    tasks.innerHTML = html;
  };
  
  const renderTask = (data, id) => {
    const html = `
    <div class="card-panel task white row" data-id ="${id}" id="card-panel">
              <img src="/img/business-woman-img-152.png" class="responsive-img materialboxed" alt="">
              <div class="task-detail">
                  
                  <div class="task-title"> ${data.firstName} ${data.lastName}</div>
                  <div class="email"><a href = "mailto: ${data.email}">${data.email}</a></div>
                  <div class="phone"> <a href="tel:${data.phone}">${data.phone}</a></div>
                  <div class="website"><a href="https://${data.website}">${data.website}</a></div>
                  
              </div>
              <div class="task-edit">
              
              </div> 
              <div class="task-
              ">
                  <i class="task-edit material-icons" id="edit" data-id ="test">edit</i>
              </div>
              <div class="task-delete">
                  <i class="material-icons" data-id ="${id}">delete_outline</i>
              </div>
          </div>
    `;
 
    tasks.innerHTML += html;
  };


  // remove Name from DOM.
  const removeTask = (id)=>{
    const task = document.querySelector(`.task[data-id = "${id}"]`);
    task.remove();
  }
 