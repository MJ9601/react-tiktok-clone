const db = require("./firebase");

const request = require("request");
const cheerio = require("cheerio");
// const { add } = require("cheerio/lib/api/traversing");

const postsData = [];
request("https://www.tiktok.com/", (error, respanse, html) => {
  if (!error && respanse.statusCode == 200) {
    const $ = cheerio.load(html);
    $(".tiktok-1kylh1d-DivItemContainer.e1eulw5o0").each((i, element) => {
      const userImg = $(element)
        .find(".avatar-anchor.tiktok-1tizhk9 div span img")
        .attr("src");
      const userName = $(element)
        .find(".e1eulw5o1 .e1eulw5o7 .e1eulw5o6 .e10yw27c1 h3")
        .text();
      const userNickName = $(element)
        .find(".e1eulw5o1 .e1eulw5o7 .e1eulw5o6 .e10yw27c1 h4")
        .text();
      const postDisc = $(element)
        .find(".e1eulw5o1 .e1eulw5o7 .e11995xo0")
        .children()
        .first()
        .text();

      const postTageSection = $(element)
        .find(".e1eulw5o1 .e1eulw5o7 .e11995xo0")
        .first()
        .children("a")
        .text();
      const postTags = postTageSection.split(" ");
      const postMusic = $(element)
        .find(".e1eulw5o1 .e1eulw5o7 .e1wg6xq70 a")
        .text();
      const postImg = $(element)
        .find(".e1eulw5o1 .e1cpsqt16 .e1cpsqt7 img")
        .attr("src");
      const postVideo = $(element)
        .find(".e1eulw5o1 .e1cpsqt16 .e1cpsqt7 .e1cpsqt15 .e1yey0rl0")
        .children("video")
        .attr("src");
      const postFeedback = $(element)
        .find(".tiktok-1y2yo26-StrongText.e1bs7gq22")
        .map((index, tag) => $(tag).text())
        .toArray()
        .join(" ");
      const postFeedbacks = postFeedback.split(" ");

      postsData[i] = {
        userImg,
        userName,
        userNickName,
        postDisc,
        postImg,
        postMusic,
        postTags,
        postFeedbacks,
        postVideo: !postVideo && null,
      };
    });

    console.log(postsData);
    postsData.forEach((post) => db.collection("posts").add(post));
  } else {
    console.log(error);
  }
});
