/*==================================================
                PROJECTS.JS
    (used for the Featured Achievements cards)
==================================================*/

/*==================================================
                STAT COUNT-UP
    (hover/entrance animation for these cards is
     handled by CSS :hover and the shared scroll-
     reveal system in scripts/about.js)
==================================================*/

const statNumbers = document.querySelectorAll(".stat-number");

const statObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const el = entry.target;
            const target = parseInt(el.dataset.countTo, 10);
            const prefix = el.dataset.prefix || "";
            const suffix = el.dataset.suffix || "";
            const duration = 1200;
            const start = performance.now();

            function step(now){

                const progress = Math.min((now - start) / duration, 1);
                const value = Math.round(progress * target);

                el.textContent = prefix + value + suffix;

                if(progress < 1){
                    requestAnimationFrame(step);
                }

            }

            requestAnimationFrame(step);

            statObserver.unobserve(el);

        }

    });

}, {

    threshold:0.6

});

statNumbers.forEach(el => statObserver.observe(el));

/*==================================================
                PROJECTS.JS END
==================================================*/
