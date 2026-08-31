const slider = document.querySelector<HTMLElement>(".slider");

const menuButton =
    document.querySelector<HTMLButtonElement>(".menu-button");

const navbarMenu =
    document.querySelector<HTMLUListElement>(".navbar-menu");

function handleScroll(): void {
    if (!slider) {
        return;
    }

    if (window.innerWidth < 768) {
        return;
    }

    const sectionWidth: number = window.innerWidth;

    const scrollPosition: number =
        window.scrollY;

    const totalSections: number =
        slider.children.length;

    const maxTranslateX: number =
        sectionWidth * (totalSections - 1);

    const translateX: number =
        Math.min(
            scrollPosition,
            maxTranslateX
        );

    slider.style.transform =
        `translateX(-${translateX}px)`;
}

function updateSlider(): void {
    if (!slider) {
        return;
    }

    const sectionWidth: number =
        window.innerWidth;

    const totalSections: number =
        slider.children.length;

    const isMobile: boolean =
        window.innerWidth < 768;

    if (isMobile) {

        slider.style.position = "static";

        slider.style.width = "100%";

        slider.style.height = "auto";

        slider.style.transform = "none";

        document.body.style.height = "auto";

        window.removeEventListener(
            "scroll",
            handleScroll
        );

        return;
    }

    const totalWidth: number =
        sectionWidth * totalSections;

    slider.style.position = "fixed";

    slider.style.top = "0";

    slider.style.left = "0";

    slider.style.width =
        `${totalWidth}px`;

    slider.style.height =
        `${window.innerHeight}px`;

    document.body.style.height =
        `${sectionWidth * (totalSections - 1) + window.innerHeight}px`;

    window.removeEventListener(
        "scroll",
        handleScroll
    );

    window.addEventListener(
        "scroll",
        handleScroll
    );

    handleScroll();
}

if (menuButton && navbarMenu) {

    menuButton.addEventListener(
        "click",
        (): void => {

            navbarMenu.classList.toggle("hide");

        }
    );
}

updateSlider();

window.addEventListener(
    "resize",
    updateSlider
);







// const slider = document.querySelector<HTMLElement>(".slider");
// // تابع تنظیم Slider
// function updateSlider():void{
//     if(!slider){
//         return
//     }
//     // عرض فعلی پنجره مرورگر را می‌گیریم
//     const sectionWidth:number=window.innerWidth;
//     // تعداد تمام sectionهای Slider را می‌گیریم
//     const totalSections:number=slider.children.length;
//     // بررسی می‌کنیم که صفحه موبایل است یا نه
//     const isMobile:boolean=window.innerWidth < 768;
//     // اگر صفحه موبایل نباشد
//     if(!isMobile){
//         // عرض کل Slider را بر اساس تعداد sectionها محاسبه می‌کنیم
//         const totalWidth:number=sectionWidth *totalSections;
//         // عرض Slider را تنظیم می‌کنیم
//         slider.style.width=`${totalWidth}px`;
//         // ارتفاع body را افزایش می‌دهیم // تا کاربر بتواند با scroll عمودی، // بخش‌های افقی Slider را مشاهده کند
//         document.body.style.height=
//         `${sectionWidth * (totalSections - 1)+window.innerHeight}px`;
// // ابتدا event قبلی scroll را حذف می‌کنیم // تا چند بار event اضافه نشود
//        window.removeEventListener("scroll", handleScroll);
// // Event جدید scroll را اضافه می‌کنیم window.addEventListener("scroll", handleScroll);
// window.addEventListener("scroll", handleScroll );
//     }else{
//         // در موبایل ارتفاع body به حالت طبیعی برمی‌گردد
//         document.body.style.height="auto";
//         // transform حذف می‌شود // تا Slider به صورت عمودی نمایش داده شود
//    slider.style.transform="none";
//    // عرض Slider برابر عرض صفحه می‌شود
//    slider.style.width="100vw";
//    // Event مربوط به scroll افقی حذف می‌شود
// window.removeEventListener("scroll",handleScroll);
//     }
// }
// // تابع حرکت Slider هنگام Scroll
// function handleScroll():void{
  

// // اگر Slider وجود نداشت،
// // تابع متوقف می‌شود
// if (!slider) {
//     return;
// }
// // عرض صفحه را می‌گیریم
// const sectionWidth:number=window.innerWidth;

// // مقدار Scroll عمودی صفحه را می‌گیریم
// const scrollPosition:number=window.scrollY;
// // حداکثر مقداری که Slider باید حرکت کند
// const maxTranslateX:number=sectionWidth *(slider.children.length -1);

// // مقدار حرکت Slider را محاسبه می‌کنیم
// // Math.min باعث می‌شود Slider بیشتر از آخرین section حرکت نکند
// const translateX:number=Math.min(scrollPosition,maxTranslateX);
// // Slider را به سمت چپ حرکت می‌دهیم
// slider.style.transform = `translateX(-${translateX}px)`;
// // انتخاب دکمه منوی موبایل
// const menuButton = document.querySelector<HTMLButtonElement>(".menu-button");
// // choose mobile menu
// const navbarMenu=document.querySelector<HTMLUListElement>(".navbar-menu");
// // click on menu
// if (menuButton && navbarMenu) {
// menuButton.addEventListener("click", (): void => {
// navbarMenu.classList.toggle("hide");
// });
// }
// // اجرای اولیه پروژه

// document.addEventListener("DOMContentLoaded", (): void => {
// updateSlider();
// window.addEventListener("resize",updateSlider);
// });






// }