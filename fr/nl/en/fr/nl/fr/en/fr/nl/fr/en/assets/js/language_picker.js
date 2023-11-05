const locales = ["en-US","fr-FR", "nl-NL"];

function getFlagSrc(countryCode) {
  return `https://flagcdn.com/w40/${countryCode. toLowerCase()}.png`;
}


const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");

function setSelectedLocale(locale) {
  const intlLocale = new Intl.Locale(locale);
  var langName = new Intl.DisplayNames([locale], {
    type: "language",
  }).of(intlLocale.language);
  langName = langName.charAt(0).toUpperCase() + langName.slice(1);

  dropdownContent.innerHTML = "";

  const otherLocales = locales.filter((loc) => loc !== locale);
  otherLocales.forEach((otherLocale) => {
    const otherIntlLocale = new Intl.Locale(otherLocale);
    var otherLangName = new Intl.DisplayNames([otherLocale], {
      type: "language",
    }).of(otherIntlLocale.language);
    otherLangName = otherLangName.charAt(0).toUpperCase() + otherLangName.slice(1);

    const listEl = document.createElement("li");
    listEl.innerHTML = `${otherLangName}<img src="${getFlagSrc(
      otherIntlLocale.region
    )}" />`;
    listEl.value = otherLocale;
    listEl.addEventListener("mousedown", function () {
      setSelectedLocale(otherLocale);
      redirectURL(otherLocale);
    });
    dropdownContent.appendChild(listEl);
  });

  dropdownBtn.innerHTML = `<img src="${getFlagSrc(
    intlLocale.region
  )}" />${langName}<span class="arrow-down"></span>`;
}

setSelectedLocale(locales[0]);
const browserLang = new Intl.Locale(navigator.language).language;
for (const locale of locales) {
  const localeLang = new Intl.Locale(locale).language;
  if (localeLang === browserLang) {
    setSelectedLocale(locale);
  }
}

locale_to_href_link = {
    "en-US": "/en",
    "nl-NL": "/nl",
    "fr-FR": "/fr",
};

function redirectURL(locale) {
    window.location.href = locale_to_href_link[locale];
}