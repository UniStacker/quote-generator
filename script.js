document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const generate_btn = document.querySelector("#generate-btn");
    const quote_p = document.querySelector("#quote-p");

    // Quote list
    const quote_list = [
        "We experience what we intend for others.",
        "Fear is wisdom as a child.",
        "The truth is not a stick with which to beat yourself.",
        "Every wound offers us a gift.",
        "Turn tormentors into mentors.",
        "Forgiveness is something we are, rather than something we do.",
        "You are enough just as you are.",
        "You must be the change you wish to see in the world.",
        "If you can change your mind, you can change your life.",
        "You are your best thing.",
        "Believe you can and you're half way there.",
        "Try to be a rainbow in someone else's cloud.",
        "The secret of getting ahead is getting started.",
        "You can't be happy unless you are unhappy sometimes.",
        "Never back down nevar what?",
        "You are your home.",
        "Defeat is simply a signal to press onwards.",
        "Light tomorrow with today.",
        "If you want to shine like a sun, first burn like a sun.",
        "Be a voice not an echo.",
        "There is no place like home."
    ];

    // Listens for button click
    generate_btn.addEventListener("click", () => {
        let quote_idx = Math.round(Math.random() * (quote_list.length-1));
        let quote = quote_list[quote_idx];
        quote_p.textContent = `"${quote}"`;

        // Animation
        quote_p.classList.add("focus-in-contract");
        setTimeout(() => {
            quote_p.classList.remove("focus-in-contract");
        }, 500);
    });
});