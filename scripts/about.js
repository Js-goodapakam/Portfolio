/*==================================================
                ABOUT SECTION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
                TAB SWITCHING
    ==========================================*/

    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            tab.classList.add("active");

            const target = document.getElementById(tab.dataset.section);

            if(target){

                target.classList.add("active");

            }

        });

    });

    /*==========================================
                STAGGERED SCROLL REVEAL
    ==========================================*/

    const revealGroups = document.querySelectorAll(
        ".timeline, .skill-grid, .certificate-grid, .service-list, .project-container"
    );

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("is-visible");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold:0.15

    });

    revealGroups.forEach(group => {

        const items = group.children;

        Array.from(items).forEach((item, index) => {

            item.classList.add("reveal-item");

            item.style.transitionDelay = (index * 0.08) + "s";

        });

        revealObserver.observe(group);

    });

    /*==========================================
                SIDEBAR FADE
    ==========================================*/

    const sidebar = document.querySelector(".about-sidebar");

    if(sidebar){

        sidebar.style.opacity = "0";

        sidebar.style.transform = "translateX(-30px)";

        sidebar.style.transition = ".8s ease";

        setTimeout(() => {

            sidebar.style.opacity = "1";

            sidebar.style.transform = "translateX(0)";

        }, 250);

    }

});