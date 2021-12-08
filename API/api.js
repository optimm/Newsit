// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741

export const categories = [
  {
    code: "",
    pic: "https://cdn-icons.flaticon.com/png/128/741/premium/741867.png?token=exp=1638973163~hmac=905ea092adef0df40943181a21b45a4d",
    name: "general",
  },
  {
    code: "",
    pic: "https://cdn-icons.flaticon.com/png/128/3281/premium/3281412.png?token=exp=1638973219~hmac=080d1ca98973c48c6e166c45809cbcc1",
    name: "business",
  },
  {
    code: "",
    pic: "https://cdn-icons-png.flaticon.com/128/1038/1038100.png",
    name: "entertainment",
  },
  {
    pic: "https://cdn-icons.flaticon.com/png/128/2382/premium/2382461.png?token=exp=1638973268~hmac=ede0784f70ba11a2f63c99b7646e0af2",
    name: "health",
  },
  {
    pic: "https://cdn-icons.flaticon.com/png/128/3920/premium/3920108.png?token=exp=1638973289~hmac=4dc65d5919fc54a1d4067414d8d3d59c",
    name: "science",
  },
  {
    pic: "https://cdn-icons.flaticon.com/png/128/3311/premium/3311579.png?token=exp=1638973309~hmac=9fc755008bd3180d131b559b39bc7767",
    name: "sports",
  },
  {
    pic: "https://cdn-icons-png.flaticon.com/128/993/993515.png",
    name: "technology",
  },
];

export const country = [
  {
    code: "in",
    name: "India",
  },
  {
    code: "us",
    name: "USA",
  },
  {
    code: "au",
    name: "Australia",
  },
  {
    code: "ru",
    name: "Russia",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "gb",
    name: "United Kingdom",
  },
];

export const sources = [
  {
    id: "bbc-news",
    name: "BBC News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
  },
  {
    id: "cnn",
    name: "CNN",
    pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
  },
  {
    id: "fox-news",
    name: "Fox News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
  },
  {
    id: "google-news",
    name: "Google News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
  },
];

export const BASE_URL = "https://saurav.tech/NewsAPI/";
export const getNewsAPI = (category, country = "in") => {
  return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
  return `${BASE_URL}/everything/${source}.json`;
};
