/* Wires every link on every page from site-config.js. Runs without any framework. */
(function () {
  var S = window.SITE || {};
  function $all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  $all("[data-cfg]").forEach(function (el) {
    var key = el.getAttribute("data-cfg");
    var value = S[key];
    if (value) el.textContent = value;
  });
  $all("[data-cfg-show]").forEach(function (el) { if (!S[el.getAttribute("data-cfg-show")]) el.hidden = true; });

  $all("[data-link]").forEach(function (a) {
    var kind = a.getAttribute("data-link");
    if (kind === "download") { a.href = S.downloadUrl || "#"; a.target = "_blank"; a.rel = "noopener"; }
    else if (kind === "issues") { a.href = S.issuesUrl || "#"; a.target = "_blank"; a.rel = "noopener"; }
    else if (kind === "email") {
      if (S.contactEmail) { a.href = "mailto:" + S.contactEmail; if (!a.textContent.trim()) a.textContent = S.contactEmail; }
      else a.hidden = true;
    }
  });

  $all("[data-buy]").forEach(function (a) {
    var plan = a.getAttribute("data-buy");
    var info = (S.plans || {})[plan] || { name: plan, price: "" };
    var link = (S.checkout || {})[plan];
    if (link) { a.href = link; a.target = "_blank"; a.rel = "noopener"; return; }
    if (S.contactEmail) {
      var subject = "Order: " + info.name;
      var body = "Hello,\n\nI would like to order: " + info.name + " (" + info.price + ").\n\n" +
                 "Name:\nCompany:\nRevit version(s):\nE-mail address(es) to licence (one per user):\n\nThank you.";
      a.href = "mailto:" + S.contactEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    } else {
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
      a.title = "Orders open soon";
    }
  });
})();
