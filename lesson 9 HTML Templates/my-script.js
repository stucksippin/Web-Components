customElements.define(
    "my-paragraph",
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById("my-paragraph");
            let container = document.querySelector("main");

            const cardsData = [
                {
                    imageSrc: "/image/Part_II_Ellie_infobox.webp",
                    title: "Ellie Williams",
                    description: "Ellie Williams is the central character of The Last of Us series.She serves as the protagonist of The Last of Us: American Dreams, the playable deuteragonist of The Last of Us, the playable protagonist of The Last of Us: Left Behind, and the playable dual protagonist of The Last of Us Part II."
                },
                {
                    imageSrc: "image/Part_I_Joel_infobox.webp",
                    title: "Joel Miller",
                    description: "Joel Miller is the playable protagonist of The Last of Us, and a supporting character in The Last of Us: Left Behind and The Last of Us Part II, in which he is briefly playable."
                },
                {
                    imageSrc: "image/Part_II_Abby_2038_infobox (1).webp",
                    title: "Abby Anderson",
                    description: "Abigail (Abby) Anderson is the playable dual protagonist of The Last of Us Part II A member of the Fireflies broken by tragedy when Joel Miller killed her father Jerry Anderson, Abby made it her mission to avenge Jerry's demise.[9] However, it is only after her vengeance that she embarks on a journey with companion Lev and rediscovers purpose in her life."
                },
            ];
            cardsData.forEach(data => {
                const clone = document.importNode(template.content, true);
                clone.querySelector("img").src = data.imageSrc;
                clone.querySelector("h2").textContent = data.title;
                clone.querySelector("p").textContent = data.description;
                container.appendChild(clone);
            });

        }
    }
);