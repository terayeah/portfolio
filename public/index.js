$(document).on('click','#worknav', function()
{
    displayWorkView();
});

$(document).on('click','#aboutnav', function()
{
    displayAboutView();
});

function displayHeader()
{
    let html = `<h1>DAIKI TERAI</h1>`;
    html += `<nav class="navigation">`;
    html += `<a id="worknav" style="margin-right: 10px;">Works</a>`;
    html += `<a id="aboutnav">About</a>`;
    html += `</nav>`;
    $("header").html(html);
}

function displayWorkView()
{
    let html = `<section class="item">`;
    html += `<img src="images/rakugaki.jpg">`;
    html += `</section />`;
    html += `<section class="item">`;
    html += `<img src="images/tapin.jpg">`;
    html += `</section />`;
    html += `<section class="item">`;
    html += `<img src="images/utvj.jpg">`;
    html += `</section />`;
    html += `<section class="item">`;
    html += `<img src="images/baten.jpg">`;
    html += `</section />`;
    html += `<section class="item">`;
    html += `<img src="images/aquarium.jpg">`;
    html += `</section />`;
    $("#work").html(html);
    $("#about").html("");
}

function displayAboutView()
{
    console.log("fs");
    let html = `<div>`;
    html += `<h2>about me</h2>`;
    html += `<p>98年生まれ. 千葉大学在籍. UnityとTouchDesignerが得意. 楽天イーグルスを愛している.</p>`;
    html += `</div><div>`;
    html += `<h2>language</h2>`;
    html += `<p>C# / C / processing / python / and other</p>`;
    html += `</div><div>`;
    html += `<h2>contact</h2>`;
    html += `<a href="https://twitter.com/terami_fukami" target="_brank"></a>`;
    html += `</div>`;
    $("#work").html("");
    $("#about").html(html);
}