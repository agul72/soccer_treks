import s from "./about.module.scss";

function About() {
    return (
        <div className={s.wrapper}>
            <div className={s.textWrapper}>
                <div className={s.title}><h2>About</h2></div>
                <div>What is it that fuels you? For me, it’s Fan Embassy. I love writing about my daily life and what interests me, and sharing all of my thoughts with my readers. The site is an open and honest platform about how to make the best of what comes my way.</div>
                <div>Fan Embassy is truly my passion project, gaining more and more traction each day. I hope you enjoy my site and all of the unique content I offer. Take a look around; perhaps you’ll discover what exhilarates you as well. Are you ready to be inspired?</div>
                <div className={s.greet}>Get in touch</div>
            </div>
            <div className={s.imageWrapper}></div>

        </div>

    );
};

export default About;