let searchRepositories = ()=>{
    let searchTerms = document.getElementById("searchTerms").value;
    return $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data =>{
      $('#results').innerHTML = `<div>
          <p>name: ${data.name}, description: ${data.description}, repository owner login: ${data.owner.login}</p>
          <a href="${data.html_url}">${data.name}</a>
          <a href="" onclick="showCommits()">Show Commits</a>
      </div>`;
      
    }).fail(displayError())
    
  }
  function showCommits(){
    return $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, data => {
    $('#details').html(data)
  }).fail(displayError())
  }
  
  function displayError(){
    return $('#errors').html("I'm sorry, there's been an error. Please try again.")
  }

$(document).ready(function (){
  
});
