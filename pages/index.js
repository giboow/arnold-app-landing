import Head from 'next/head'
import Navbar from "../component/navbar";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>

            </Head>
            <section className="hero is-primary is-medium">

                <div className="hero-head">
                    <Navbar></Navbar>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                                <div className="column is-5 landing-caption">
                                    <h1 className="title is-1">Arnold, tu me ramènes?</h1>
                                    <h2 className="subtitle is-5">
                                        Votre application pour rentrer chez vous en toute sérénité sur Nantes!
                                    </h2>
                                    <p className="buttons">
                                        <Link href="#contact-form">
                                            <a className="button">
                                                <span className="text">Nous suivre</span>
                                                <span className="front-gradient"></span>
                                            </a>
                                        </Link>
                                    </p>

                                </div>
                                <div className="column  has-text-centered">
                                    <figure className="image is-inline-block">
                                        <img  alt="" style={{width:"500px"}} src="/ArnoldLogo.png"/>
                                    </figure>
                                </div>
                            </div>
                    </div>
                </div>
            </section>

            <div className="section is-grey is-medium" id="contact-form">
                <div className="container">
                    <div className="column">
                        <div className="column is-5 landing-caption">
                            <h1 className="title is-1">Comment ça marche?</h1>
                            <h2 className="subtitle is-5">
                                Ta communauté t&apos;informe en temps réel des insécurités dans ta ville,
                                et tu reçois l&apos;information directement sur ton smartphone!
                            </h2>
                        </div>
                    </div>
                </div>
            </div>


            <section className="section is-grey has-background-primary" id="contact-form">
                <div className="container">
                    <div className="columns is-centered is-mobile">
                        <div className="column is-half-desktop">
                            <iframe
                                className="responsive-iframe"
                                src="https://docs.google.com/forms/d/e/1FAIpQLSeG_RcTh04zjD81GX_Yg80qb7XpY5B692rqHcsprFjQKpfLXg/viewform?embedded=true">Chargement…
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section is-grey is-grey" id="contact-form">
                <div className="container">
                    <div className="columns is-centered is-mobile">
                        <div className="column is-half has-text-centered">
                            © 2021 - <Link href="/">Arnold App</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
