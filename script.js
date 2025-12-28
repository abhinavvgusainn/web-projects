gsap.to("#nav",{
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "bottom 10%",
        end: "bottom 11%",
        scrub: 2
        
    }
})