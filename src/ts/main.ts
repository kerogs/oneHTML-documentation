const readmeContent = document.querySelector("#readmeContent") as HTMLDivElement;
const summary = document.querySelector("#summary") as HTMLDivElement;

let oneHTML_title: string;
let readmeContent_title: HTMLHeadingElement[];

if (readmeContent) {
    // ? setup title
    const readmeContent_title = document.querySelectorAll("h1");
    if (!readmeContent_title) {
        console.error("oneHTML -> No h1 found. Try with h2");
        const readmeContent_title = document.querySelectorAll("h2");
        if (!readmeContent_title) {
            console.error("oneHTML -> No h2 found. Try with h3");
            const readmeContent_title = document.querySelectorAll("h3");
            if (!readmeContent_title) {
                console.error("oneHTML -> No h3 found. Try with h4");
            }
        }
    }

    if (readmeContent_title[0]) {
        oneHTML_title = readmeContent_title[0].textContent;
    } else {
        oneHTML_title = "Documentation oneHTML";
    }

    document.querySelector("title")!.textContent = oneHTML_title;

    console.log("oneHTML -> Title set to: " + oneHTML_title);


    // ? setup summary
    const oneHTML_summary = document.querySelectorAll("#readmeContent h2");
    if(!oneHTML_summary) {
        
    } else{
        oneHTML_summary.forEach(element => {
            summary.innerHTML += `<a href="#${element.id}"><li>${element.textContent}</li></a>`
        });
    }
} else {
    console.error("oneHTML -> No #readmeContent found.");
}