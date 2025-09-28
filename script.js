"use strict";
const header = document.querySelector("header");
const sprogBtn = document.querySelector(".sprog");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("shrink");
    sprogBtn.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
    sprogBtn.classList.remove("shrink");
  }
});

// Object defineret med to sprog, der fortæller indholdet og hvor det skal placeres i html
const texts = {
  da: {
    texts: [
      // OM MIG
      { text: "Mit navn er Aylin Saber", location: ".om-mig h2" },
      { text: "Aspirende frontend-udvikler, med interesse indenfor responsivt design og tilgængelighed.", location: ".om-mig h4" },
      { text: "Mine projekter", location: ".om-mig a.btn" },

      // FACTS ME
      { text: "Problemløsning", location: ".facts-me div:nth-child(1) h4" },
      {
        text: "Jeg arbejder løsningsorienteret og tager gerne nye udfordringer. Hvis jeg vil lave noget, jeg ikke har prøvet før, researcher jeg og prøver mig frem til det ønskede resultat.",
        location: ".facts-me div:nth-child(1) p",
      },
      { text: "Samarbejde", location: ".facts-me div:nth-child(2) h4" },
      {
        text: "Jeg trives i teams og engagerer mig aktivt. Jeg tror på, at de bedste resultater opstår i et stærkt fællesskab, hvor idéer deles frit.",
        location: ".facts-me div:nth-child(2) p",
      },
      { text: "Læringsvillig", location: ".facts-me div:nth-child(3) h4" },
      {
        text: "Jeg er nysgerrig og elsker at tilegne mig ny viden. Ukendte værktøjer og programmer ser jeg som en mulighed for at udvide mine færdigheder.",
        location: ".facts-me div:nth-child(3) p",
      },

      // KOMPETENCER
      { text: "Kompetencer", location: ".kom-liste h2" },
      { text: '"Sprog" og kodebiblioteker', location: ".kom-el div:nth-child(1) h3" },
      { text: "Programmer/Værktøjer", location: ".kom-el .el-2 h3" },
      { text: "Sprog", location: ".kom-el div:nth-child(3) h3" },
      { text: "Dansk (modersmål)", location: ".kom-el div:nth-child(3) li:nth-child(1)" },
      { text: "Engelsk (flydende)", location: ".kom-el div:nth-child(3) li:nth-child(2)" },
      { text: "Farsi (godt kendskab)", location: ".kom-el div:nth-child(3) li:nth-child(3)" },

      // PROJEKTER
      { text: "Projekter", location: ".projects h2" },

      // BUTTON
      { text: "English", location: "#lang-toggle" },
    ],
  },

  en: {
    texts: [
      // ABOUT ME
      { text: "My name is Aylin Saber", location: ".om-mig h2" },
      { text: "Aspiring frontend developer, with an interest in responsive design and accessibility.", location: ".om-mig h4" },
      { text: "My projects", location: ".om-mig a.btn" },

      // FACTS ME
      { text: "Problem solving", location: ".facts-me div:nth-child(1) h4" },
      {
        text: "I work solution-oriented and enjoy taking on new challenges. If I want to do something I haven't tried before, I research and experiment until I reach the desired result.",
        location: ".facts-me div:nth-child(1) p",
      },
      { text: "Collaboration", location: ".facts-me div:nth-child(2) h4" },
      {
        text: "I thrive in teams and engage actively. I believe the best results come from a strong community where ideas are shared freely.",
        location: ".facts-me div:nth-child(2) p",
      },
      { text: "Eager to learn", location: ".facts-me div:nth-child(3) h4" },
      {
        text: "I am curious and love to acquire new knowledge. I see unfamiliar tools and programs as an opportunity to expand my skills.",
        location: ".facts-me div:nth-child(3) p",
      },

      // SKILLS
      { text: "Skills", location: ".kom-liste h2" },
      { text: "Languages & Frameworks", location: ".kom-el div:nth-child(1) h3" },
      { text: "Programs and Tools", location: ".kom-el .el-2 h3" },
      { text: "Languages", location: ".kom-el div:nth-child(3) h3" },
      { text: "Danish (native)", location: ".kom-el div:nth-child(3) li:nth-child(1)" },
      { text: "English (fluent)", location: ".kom-el div:nth-child(3) li:nth-child(2)" },
      { text: "Farsi (good knowledge)", location: ".kom-el div:nth-child(3) li:nth-child(3)" },

      // PROJECTS
      { text: "Projects", location: ".projects h2" },

      // BUTTON
      { text: "Dansk", location: "#lang-toggle" },
    ],
  },
};

// Ændrebar variabel der hiver fat i dansk, sættes som standardsprog
let locale = "da";
// console.logger teksterne for det nuværende sprog i konsollen, altså dansk
console.log(texts[locale]);

function enterLang() {
  texts[locale].texts.forEach(({ text, location }) => {
    const el = document.querySelector(location);
    if (el) el.textContent = text;
  });
}

// Funktion der ændre sproget, hiver fat i deutsch sproget
function switchLanguage(newLocale) {
  // Laver ny locale
  locale = newLocale;
  // Kalder så funktionen der opdatere indholdet
  enterLang();
}

// Finder knappen i DOM
const langBtn = document.querySelector("#lang-toggle");

// Når knappen klikkes, toggles mellem dansk og engelsk
langBtn.addEventListener("click", () => {
  const next = locale === "da" ? "en" : "da";
  switchLanguage(next);
});

// Starter med standardsproget (dansk)
enterLang();
