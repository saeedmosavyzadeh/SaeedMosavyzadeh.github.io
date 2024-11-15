const metaData = {};
function makeDescription(desc) {
  if (desc) {
    metaData["Description"] = desc;
  } else {
    metaData["Description"] = "";
  }
}

function makeupDateFormat(date) {
  let dateObj = new Date(date);
  metaData["upDate"] =
    '<div class="repocardsubtitletext"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-54q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v160q0 17-11.5 28.5T800-560H640q-17 0-28.5-11.5T600-600q0-17 11.5-28.5T640-640h70q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q95 0 170-57t99-147q5-16 18-24t29-6q17 2 27 14.5t6 27.5q-29 119-126 195.5T480-120Zm40-376 100 100q11 11 11 28t-11 28q-11 11-28 11t-28-11L452-452q-6-6-9-13.5t-3-15.5v-159q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v144Z"/></svg>' +
    dateObj.toDateString() +
    "</div>";
}

function makeHomepage(homepage, html_url) {
  if (homepage && typeof homepage === "string" && homepage.length > 0) {
    metaData["Homepage"] =
      "<div class='doublebtn'><a target='_blank' class='btn-left' href='" +
      homepage +
      "'>" +
      '<div class="btn-left-inside"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>' +
      "Project Homepage" +
      "</div></a>" +
      "<a target='_blank' class='btn-right' href='" +
      html_url +
      "'>" +
      '<div class="btn-right-inside"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>' +
      "Project GithubPage" +
      "</div></a>" +
      "</div>";
  } else {
    metaData["Homepage"] =
      "<a target='_blank' class='btn-middle' href='" +
      html_url +
      "'>" +
      '<div class="btn-middle-inside"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>' +
      "Project GithubPage" +
      "</div></a>";
  }
}

function makeRepoLang(lang) {
  if (lang != null) {
    metaData["lang"] = lang;
  } else {
    metaData["lang"] = "";
  }
}

function generateTemplate(repo) {
  makeHomepage(repo.homepage, repo.html_url);
  makeupDateFormat(repo.updated_at);
  makeDescription(repo.description);
  makeRepoLang(repo.language);

  return [
    "<div class='repocard'>",
    "<div class='repocardcontent'>",
    "<div class='rowtitlebadge'>",
    "<div class='repocardtitle'>" + repo.name + "</div>",
    "<div class='repocardbadgebox'><span class='repocardbadge'>" +
      metaData["lang"] +
      "</span></div>",
      "</div>",
      "<div class='repocardbody'>",
    "<div class='card-text'>" + metaData["Description"] + "</div>",

    "<div class='repocardsubtitle'>" +
      metaData["upDate"] +
      "</div>",

    "</div>",
    "</div>",
    "<div class='repocardfooter'>",
    metaData["Homepage"],
    "</div>",
    "</div>",
  ].join("");
}

function loopReposTask(data) {
  let section = [];
  data.forEach((repo) => {
    if (repo && repo.id) {
      let template = generateTemplate(repo);
      section.push(template);
    }
  });
  $("#repositories").append(section.join(""));
}

var getData = (function ($) {
  let ReposUrl = `https://api.github.com/users/johncoleman83/repos`;
  $.ajax({
    url: ReposUrl,
    type: "GET",
    success: function (data) {
      loopReposTask(data);
    },
    error: function (data) {
      console.info(data);
    },
  });
})($);
