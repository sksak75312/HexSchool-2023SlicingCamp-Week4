import $ from 'jquery';
import taipeiZhongshan from '../images/store-1.png';
import taipeiGreenGarden from '../images/store-2.png';
import taichungShimizu from '../images/store-3.png';
import kaohsiungChungCheng from '../images/store-4.png';
import kaohsiungDreamTimes from '../images/store-5.png';

const storesList = [
  {
    name: '台北中山旗艦店',
    phone: '(02)000-1234',
    time: '10:00-21:00',
    location: '台北市中山區南京東路25巷2-1號',
    photo: taipeiZhongshan,
    description: '充滿工業風格的旗艦店，使用黑白色調，佈局簡潔',
    googleLink: 'https://maps.google.com/?q=台北市中山區南京東路25巷2-1號',
  },
  {
    name: '台北綠園店',
    phone: '(02)000-2345',
    time: '10:00-21:00',
    location: '台北市中正區復興南路 132-1 號',
    photo: taipeiGreenGarden,
    description: '簡約現代風格的台北綠園店，有白色及木紋牆壁，佈局讓人很放鬆',
    googleLink: 'https://maps.google.com/?q=台北市中正區復興南路 132-1 號',
  },
  {
    name: '台中清水旗艦店',
    phone: '(02)000-1234',
    time: '10:00-21:00',
    location: '台中市清水區經南一路 23 號 8 樓',
    photo: taichungShimizu,
    description: '簡約現代風格的台中清水旗艦店，有白色及木紋牆壁，佈局簡潔',
    googleLink: 'https://maps.google.com/?q=台中市清水區經南一路 23 號 8 樓',
  },
  {
    name: '高雄中正形象店',
    phone: '(07)000-2345',
    time: '10:00-21:00',
    location: '高雄市苓雅區中正路 38 號 12 樓',
    photo: kaohsiungChungCheng,
    description:
      '工業風的高雄中正形象店，使用大面的落地玻璃簡潔明亮，令人感到很放鬆',
    googleLink: 'https://maps.google.com/?q=高雄市苓雅區中正路 38 號 12 樓',
  },
  {
    name: '高雄夢時代店',
    phone: '(07)000-1234',
    time: '10:00-21:00',
    location: '高雄市前鎮區中華一路 63 號 6 樓',
    photo: kaohsiungDreamTimes,
    description: '簡約的高雄夢時代店，有繽紛的椅子，使人感覺愉快',
    googleLink: 'https://maps.google.com/?q=高雄市前鎮區中華一路 63 號 6 樓',
  },
];


let html = '';
storesList.forEach((store) => {
  html += `<li class="col">
              <div class="stores__img">
                <img
                  src=${store.photo}
                  class="img-fluid"
                  alt="${store.description}"
                />
              </div>
              <h3 class="py-2 px-5 mb-0 fs-4 border-start border-end border-light-third">
                ${store.name}
              </h3>
              <ul
                class="py-2 px-5 fs-5 border border-light-third list-unstyled"
              >
                <li class="d-flex align-items-center gap-3 mb-2">
                  <span class="material-symbols-outlined"> call </span>
                  <a
                    href="tel:+${store.phone}"
                    class="stores__link text-dark text-decoration-none"
                  >
                    電話：${store.phone}
                  </a>
                </li>
                <li class="d-flex align-items-center gap-3 mb-2">
                  <span class="material-symbols-outlined"> schedule </span>
                  營業時間：${store.time}
                </li>
                <li class="d-flex gap-3">
                  <span class="material-symbols-outlined"> location_on </span>
                  <a
                    href=${store.googleLink}
                    class="stores__link text-dark text-decoration-none"
                    target="_blank"
                  >
                    地址：${store.location}
                  </a>
                </li>
              </ul>
              <a
                href="./storeDetail.html"
                class="stores__link btn btn-black d-block py-4 fs-5 rounded-0"
                >詳細資訊</a
              >
            </li>`;
});
$('.stores__list').html(html);


$('.stores__item').on('click', function (e) {
  e.preventDefault();
  $('.stores__text').text($(this).text());
  const city = $(this).text().slice(0, 2);
  const filterData = storesList.filter(item => item.name.slice(0, 2) === city)

  let data = "";
  filterData.forEach((store) => {
    data += `<li class="col">
              <div class="stores__img">
                <img
                  src=${store.photo}
                  class="img-fluid"
                  alt="${store.description}"
                />
              </div>
              <h3 class="py-2 px-5 mb-0 fs-4 border-start border-end border-light-third">
                ${store.name}
              </h3>
              <ul
                class="py-2 px-5 fs-5 border border-light-third list-unstyled"
              >
                <li class="d-flex align-items-center gap-3 mb-2">
                  <span class="material-symbols-outlined"> call </span>
                  <a
                    href="tel:+${store.phone}"
                    class="stores__link text-dark text-decoration-none"
                  >
                    電話：${store.phone}
                  </a>
                </li>
                <li class="d-flex align-items-center gap-3 mb-2">
                  <span class="material-symbols-outlined"> schedule </span>
                  營業時間：${store.time}
                </li>
                <li class="d-flex gap-3">
                  <span class="material-symbols-outlined"> location_on </span>
                  <a
                    href=${store.googleLink}
                    class="stores__link text-dark text-decoration-none"
                    target="_blank"
                  >
                    地址：${store.location}
                  </a>
                </li>
              </ul>
              <a
                href="./storeDetail.html"
                class="stores__link btn btn-black d-block py-4 fs-5 rounded-0"
                >詳細資訊</a
              >
            </li>`;
  });
  $('.stores__list').html(data);
});