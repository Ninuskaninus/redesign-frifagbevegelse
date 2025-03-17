const jobListUrl = "https://jobb.frifagbevegelse.no/wp-json/wp/v2/job-listings";

async function getJobList() {
  const response = await fetch(jobListUrl);
  const jobs = await response.json();

  if (!Array.isArray(jobs)) {
    console.error("Expected an array but got:", jobs);
    return [];
  }

  const jobLists = await Promise.all(
    jobs.map(async (job) => {
      const imageUrl = await getFeaturedImage(job);

      return {
        title: job.title.rendered,
        link: job.link,
        location: job.meta?._job_location || "",
        company: job.meta?._company_name || "",
        companyWebsite: job.meta?._company_website || "",
        image: imageUrl || "No image available",
      };
    })
  );

  const workNumber = document.querySelector("#workNumber");
  workNumber.textContent = jobLists.length;

  const workWrapper = document.querySelector(".fri-work-carousel-wrapper");
  const workElements = jobLists.map((job) => {
    return `
      <a href="${job.link}" target="_blank" class="swiper-slide fri-work-slide">
        <img src="${job.image}" alt="${job.title}" />
        <div class="fri-work-carousel-item-content">
          <h3>${job.title}</h3>
          <p>${job.company}</p>
          <p class="work-location">${job.location}</p>
        </div>
      </a>
    `;
  });

  const yourAdHere = `
    <div class="swiper-slide fri-work-carousel-end">
      <h1>DIN ANNONSE HER</h1>
      <p>Ønsker du å annonsere en ledig stilling?</p>
      <p><a href="https://jobb.frifagbevegelse.no/bestilling-og-priser/" target="_blank">Klikk her!</a></p>
    </div>
  `;
  workElements.push(yourAdHere);

  const allAds = `
    <div class="swiper-slide fri-work-carousel-end-all">
      <a href="https://jobb.frifagbevegelse.no/" target="_blank">Se alle annonser</a>
      <img src="/images/arrow-right-orange.png">
    </div>
  `;

  workElements.push(allAds);

  workWrapper.innerHTML = workElements.join("");
  new Swiper("#swiper2", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    loop: false,

    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },

    navigation: {
      nextEl: ".fri-work-carousel-next",
      prevEl: ".fri-work-carousel-prev",
    },
    pagination: {
      el: ".fri-work-carousel-pagination",
      clickable: true,
    },
  });
}

async function getFeaturedImage(job) {
  if (!job._links || !job._links["wp:featuredmedia"]) return null;

  const mediaUrl = job._links["wp:featuredmedia"][0]?.href;
  if (!mediaUrl) return null;

  try {
    const response = await fetch(mediaUrl);
    const mediaData = await response.json();
    return mediaData.source_url;
  } catch (error) {
    console.error("Error fetching media:", error);
    return null;
  }
}

getJobList();
