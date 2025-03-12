const saker = [
  {
    url: "https://frifagbevegelse.no/arbeidsmanden/lettet-over-iaavtalen--na-skal-vi-jobbe-for-a-fa-ned-sykefravaret-6.158.1114315.2ccec46de5",
    tittel:
      "Lettet over IA-avtalen: – Nå skal vi jobbe for å få ned sykefraværet",
    stikktittel: "Inkluderende arbeidsliv",
    bilde:
      "https://frifagbevegelse.no/image-3.590291.145031.20250213115529.1.0ea7bf8b3f?size=512",
    tema: "Nyheter",
  },
  {
    url: "https://frifagbevegelse.no/hknytt/usa-kutter-penger-til-minerydding--katastrofale-konsekvenser-6.158.1114355.d6784afe7e",
    tittel: "USA kutter penger til minerydding: – Katastrofale konsekvenser",
    stikktittel: "Bistand",
    bilde:
      "https://frifagbevegelse.no/image-3.613213.145041.20250213123854.1.67e6ac5395?size=1024",
    tema: "Nyheter",
  },
  {
    url: "https://frifagbevegelse.no/nyheter/ung-psyk-og-uten-jobb-her-kan-du-fa-hjelp-6.469.1099616.4de3c6c631",
    tittel: "Ung, «psyk» og uten jobb? Her kan du få hjelp",
    stikktittel: "Psykisk helse",
    bilde:
      "https://frifagbevegelse.no/image-3.610577.142706.20250213085418.1.6734e060d6?size=1024",
    tema: "Kronikk",
  },
  {
    url: "https://frifagbevegelse.no/image-3.608794.144997.20250213125159.1.a933a2dce2?size=1024",
    tittel: "Den nye IA-avtalen er en stor seier for LO",
    stikktittel: "Inkluderende arbeidsliv",
    bilde:
      "https://frifagbevegelse.no/image-3.608794.144997.20250213125159.1.a933a2dce2?size=1024",
    tema: "Kommentar",
    forfatter: "Navn Navnesen",
    stilling: "Spaltist i FriFagbevegelse",
  },
  {
    url: "https://frifagbevegelse.no/arbeidsmanden/disse-yrkesgruppene-vil-norge-vare-helt-avhengige-av-i-krig-6.158.1110273.d7c0aae461",
    tittel: "Disse yrkesgruppene vil Norge være helt avhengige av i krig",
    stikktittel: "Beredskap",
    bilde:
      "https://frifagbevegelse.no/image-3.503671.144305.20250205141614.1.d59e1d7acb?size=1024",
    tema: "Debatt",
  },
];

const sak1 = document.querySelector("#sak1");
sak1.href = saker[0].url;
sak1.querySelector("img").src = saker[0].bilde;
sak1.querySelector("h1").textContent = saker[0].tittel;
sak1.querySelector("h4").textContent = saker[0].stikktittel;

const sak2 = document.querySelector("#sak2");
sak2.href = saker[1].url;
sak2.querySelector("img").src = saker[1].bilde;
sak2.querySelector("h1").textContent = saker[1].tittel;
sak2.querySelector("h4").textContent = saker[1].stikktittel;

const sak3 = document.querySelector("#sak3");
sak3.href = saker[2].url;
sak3.querySelector("img").src = saker[2].bilde;
sak3.querySelector("h1").textContent = saker[2].tittel;
sak3.querySelector("h4").textContent = saker[2].stikktittel;

const sak4 = document.querySelector("#sak4");
sak4.href = saker[3].url;
sak4.querySelector("img").src = saker[3].bilde;
sak4.querySelector("h1").textContent = saker[3].tittel;
sak4.querySelector("h4").textContent = saker[3].stikktittel;

const sak5 = document.querySelector("#sak5");
sak5.href = saker[4].url;
sak5.querySelector("img").src = saker[4].bilde;
sak5.querySelector("h1").textContent = saker[4].tittel;
sak5.querySelector("h4").textContent = saker[4].stikktittel;

const sak6 = document.querySelector("#sak6");
sak6.href = saker[0].url;
sak6.querySelector("img").src = saker[0].bilde;
sak6.querySelector("h1").textContent = saker[0].tittel;
sak6.querySelector("h4").textContent = saker[0].stikktittel;

const sak7 = document.querySelector("#sak7");
sak7.href = saker[1].url;
sak7.querySelector("img").src = saker[1].bilde;
sak7.querySelector("h1").textContent = saker[1].tittel;
sak7.querySelector("h4").textContent = saker[1].stikktittel;

const sak8 = document.querySelector("#sak8");
sak8.href = saker[2].url;
sak8.querySelector("img").src = saker[2].bilde;
sak8.querySelector("h1").textContent = saker[2].tittel;
sak8.querySelector("h4").textContent = saker[2].stikktittel;

const sak9 = document.querySelector("#sak9");
sak9.href = saker[3].url;
sak9.querySelector("img").src = saker[3].bilde;
sak9.querySelector("h1").textContent = saker[3].tittel;
sak9.querySelector("h4").textContent = saker[3].stikktittel;

const sak10 = document.querySelector("#sak10");
sak10.href = saker[3].url;
sak10.querySelector("img").src = saker[3].bilde;
sak10.querySelector("h1").textContent = saker[3].tittel;
sak10.querySelector("span").textContent = saker[3].tema;
sak10.querySelector(".fri-byline-element").innerHTML = `
  <img src="${saker[3].bilde}"></img>
  <div>
  <p>${saker[3].forfatter}</p>
  <b>${saker[3].stilling}</b>
  </div>
  `;

const sak11 = document.querySelector("#sak11");
sak11.href = saker[3].url;
sak11.querySelector("img").src = saker[3].bilde;
sak11.querySelector("h1").textContent = saker[3].tittel;
sak11.querySelector("span").textContent = saker[3].tema;
sak11.querySelector(".fri-byline-element").innerHTML = `
    <img src="${saker[3].bilde}"></img>
    <div>
    <p>${saker[3].forfatter}</p>
    <b>${saker[3].stilling}</b>
    </div>
    `;

const sak12 = document.querySelector("#sak12");
sak12.href = saker[1].url;
sak12.querySelector("img").src = saker[1].bilde;
sak12.querySelector("h1").textContent = saker[1].tittel;
sak12.querySelector("h4").textContent = saker[1].stikktittel;

const sak13 = document.querySelector("#sak13");
sak13.href = saker[2].url;
sak13.querySelector("img").src = saker[2].bilde;
sak13.querySelector("h1").textContent = saker[2].tittel;
sak13.querySelector("h4").textContent = saker[2].stikktittel;

const sak14 = document.querySelector("#sak14");
sak14.href = saker[3].url;
sak14.querySelector("img").src = saker[3].bilde;
sak14.querySelector("h1").textContent = saker[3].tittel;
sak14.querySelector("h4").textContent = saker[3].stikktittel;

const sak15 = document.querySelector("#sak15");
sak15.href = saker[4].url;
sak15.querySelector("img").src = saker[4].bilde;
sak15.querySelector("h1").textContent = saker[4].tittel;
sak15.querySelector("h4").textContent = saker[4].stikktittel;

const sak16 = document.querySelector("#sak16");
sak16.href = saker[0].url;
sak16.querySelector("img").src = saker[0].bilde;
sak16.querySelector("h1").textContent = saker[0].tittel;
sak16.querySelector("h4").textContent = saker[0].stikktittel;

const sak17 = document.querySelector("#sak17");
sak17.href = saker[1].url;
sak17.querySelector("img").src = saker[1].bilde;
sak17.querySelector("h1").textContent = saker[1].tittel;
sak17.querySelector("h4").textContent = saker[1].stikktittel;

const sak18 = document.querySelector("#sak18");
sak18.href = saker[3].url;
sak18.querySelector("img").src = saker[3].bilde;
sak18.querySelector("h1").textContent = saker[3].tittel;
sak18.querySelector("span").textContent = saker[3].stikktittel;

const sak20 = document.querySelector("#sak20");
sak20.href = saker[4].url;
sak20.querySelector("img").src = saker[4].bilde;
sak20.querySelector("h1").textContent = saker[4].tittel;
sak20.querySelector("h4").textContent = saker[4].stikktittel;

const sak21 = document.querySelector("#sak21");
sak21.href = saker[0].url;
sak21.querySelector("img").src = saker[0].bilde;
sak21.querySelector("h1").textContent = saker[0].tittel;
sak21.querySelector("h4").textContent = saker[0].stikktittel;

const sak22 = document.querySelector("#sak22");
sak22.href = saker[1].url;
sak22.querySelector("img").src = saker[1].bilde;
sak22.querySelector("h1").textContent = saker[1].tittel;
sak22.querySelector("h4").textContent = saker[1].stikktittel;

const sak23 = document.querySelector("#sak23");
sak23.href = saker[2].url;
sak23.querySelector("img").src = saker[2].bilde;
sak23.querySelector("h1").textContent = saker[2].tittel;
sak23.querySelector("h4").textContent = saker[2].stikktittel;

const sak24 = document.querySelector("#sak24");
sak24.href = saker[3].url;
sak24.querySelector("img").src = saker[3].bilde;
sak24.querySelector("h1").textContent = saker[3].tittel;
sak24.querySelector("h4").textContent = saker[3].stikktittel;

const sak25 = document.querySelector("#sak25");
sak25.href = saker[4].url;
sak25.querySelector("img").src = saker[4].bilde;
sak25.querySelector("h1").textContent = saker[4].tittel;
sak25.querySelector("h4").textContent = saker[4].stikktittel;

const sak26 = document.querySelector("#sak26");
sak26.href = saker[0].url;
sak26.querySelector("img").src = saker[0].bilde;
sak26.querySelector("h1").textContent = saker[0].tittel;
sak26.querySelector("h4").textContent = saker[0].stikktittel;

const sak27 = document.querySelector("#sak27");
sak27.href = saker[1].url;
sak27.querySelector("img").src = saker[1].bilde;
sak27.querySelector("h1").textContent = saker[1].tittel;
sak27.querySelector("h4").textContent = saker[1].stikktittel;

const sak28 = document.querySelector("#sak28");
sak28.href = saker[2].url;
sak28.querySelector("img").src = saker[2].bilde;
sak28.querySelector("h1").textContent = saker[2].tittel;
sak28.querySelector("h4").textContent = saker[2].stikktittel;

const sak29 = document.querySelector("#sak29");
sak29.href = saker[3].url;
sak29.querySelector("img").src = saker[3].bilde;
sak29.querySelector("h1").textContent = saker[3].tittel;
sak29.querySelector("h4").textContent = saker[3].stikktittel;

const sak30 = document.querySelector("#sak30");
sak30.href = saker[4].url;
sak30.querySelector("img").src = saker[4].bilde;
sak30.querySelector("h1").textContent = saker[4].tittel;
sak30.querySelector("h4").textContent = saker[4].stikktittel;

const sak31 = document.querySelector("#sak31");
sak31.href = saker[0].url;
sak31.querySelector("img").src = saker[0].bilde;
sak31.querySelector("h1").textContent = saker[0].tittel;
sak31.querySelector("h4").textContent = saker[0].stikktittel;

const sak32 = document.querySelector("#sak32");
sak32.href = saker[1].url;
sak32.querySelector("img").src = saker[1].bilde;
sak32.querySelector("h1").textContent = saker[1].tittel;
sak32.querySelector("h4").textContent = saker[1].stikktittel;

const sak33 = document.querySelector("#sak33");
sak33.href = saker[2].url;
sak33.querySelector("img").src = saker[2].bilde;
sak33.querySelector("h1").textContent = saker[2].tittel;
sak33.querySelector("h4").textContent = saker[2].stikktittel;

const sak36 = document.querySelector("#sak36");
sak36.querySelector("img").src = saker[1].bilde;
sak36.querySelector("h1").textContent = saker[1].tittel;
sak36.querySelector("span").textContent = saker[1].stikktittel;

const sak37 = document.querySelector("#sak37");
sak37.href = saker[2].url;
sak37.querySelector("img").src = saker[2].bilde;
sak37.querySelector("h1").textContent = saker[2].tittel;
sak37.querySelector("h4").textContent = saker[2].stikktittel;

const sak38 = document.querySelector("#sak38");
sak38.querySelector("img").src = saker[1].bilde;
sak38.querySelector("h1").textContent = saker[1].tittel;
sak38.querySelector("h4").textContent = saker[1].stikktittel;

const list1 = document.querySelector("#list1");
for (let i = 0; i < saker.length; i++) {
  const li = document.createElement("a");
  li.classList.add("fri-list-element");
  li.href = saker[i].url;
  li.innerHTML = `
                  <img src="${saker[i].bilde}" alt="" />
                <div>
                  <h4>${saker[i].stikktittel}</h4>
                  <h1>${saker[i].tittel}</h1>
                </div>
    `;
  list1.appendChild(li);
}

const swiper1 = document.querySelector("#swiper1");
for (let i = 0; i < saker.length; i++) {
  const nyttOmFolk = document.createElement("a");
  nyttOmFolk.classList.add("swiper-slide", "fri-swiper-element");
  nyttOmFolk.href = saker[i].url;
  nyttOmFolk.innerHTML = `
      <img src="${saker[i].bilde}" alt="" />
      <div>
          <h4>${saker[i].stikktittel}</h4>
          <h1>${saker[i].tittel}</h1>
      </div>
      `;
  swiper1.appendChild(nyttOmFolk);
}

const swiper = new Swiper(".fri-nytt-om-folk-swiper", {
  direction: "horizontal",
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
